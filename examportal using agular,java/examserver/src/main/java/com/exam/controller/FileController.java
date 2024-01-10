package com.exam.controller;

import com.exam.payload.FileResponse;
import com.exam.services.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;

@RestController
@CrossOrigin("*")
@RequestMapping("/file")
public class FileController {
    @Autowired
    private FileService fileService;
    @Value("${project.image}")
    private String path;



    @PostMapping("/upload")
    public ResponseEntity<FileResponse> fileUpload(@RequestParam("file") MultipartFile file){
        String fileName = null;
        try {
            fileName = this.fileService.uploadImage(path, file);
        } catch (IOException e) {
            return new ResponseEntity<>(new FileResponse(null,"Image not upload"), HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(new FileResponse(fileName,"Image is sucessfully upload"), HttpStatus.OK);
    }


    @GetMapping(value = "profile/{imageName}",produces = MediaType.IMAGE_JPEG_VALUE)
    public void downloadImage(@PathVariable("imageName") String imageName, HttpServletResponse response) throws IOException {

        InputStream resource = this.fileService.getResource(path, imageName);
        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
        StreamUtils.copy(resource,response.getOutputStream());
    }
}
