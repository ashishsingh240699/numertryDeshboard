package com.exam.controller;

import com.exam.payload.BankDto;
import com.exam.services.BankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/bank")
public class BankController {
    @Autowired
    private BankService bankService;
@PostMapping("/")
    public ResponseEntity<BankDto> addBank(@RequestBody BankDto bankDto){
      return new ResponseEntity<>(bankService.addBank(bankDto), HttpStatus.CREATED);
    }
    @GetMapping("/get")
    public List<BankDto> getAllBank(){
        return bankService.getAllBank();
    }
    @GetMapping("/{id}")
    public ResponseEntity<BankDto> getBankById(@PathVariable(name = "id") long id){

        return ResponseEntity.ok(bankService.getBankById(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteRegistration(@PathVariable(name = "id") long id){
        bankService.deletePostById(id);
        return new ResponseEntity<>("Post entity deleted successfully.", HttpStatus.OK);
    }
    @PutMapping("update/{id}")
    public ResponseEntity<BankDto> updateReg(@RequestBody BankDto bankDto, @PathVariable long id){
        BankDto bankResponse = bankService.updateReg(bankDto, id);

        return new ResponseEntity<>(bankResponse, HttpStatus.OK);
    }
}
