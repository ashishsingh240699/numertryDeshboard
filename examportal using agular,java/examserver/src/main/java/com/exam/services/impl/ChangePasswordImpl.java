package com.exam.services.impl;

import com.exam.model.User;
import com.exam.payload.ChangePasswordDataDto;
import com.exam.repositories.UserRepository;
import com.exam.services.ChangePasswordService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChangePasswordImpl implements ChangePasswordService {
    @Autowired
    private UserRepository userRepository;
    private static final Logger logger = LoggerFactory.getLogger(ChangePasswordService.class);

    @Override
    public String changePassword(ChangePasswordDataDto changePasswordDataDto) throws Exception {
        User user = validateChangePasswordDataDtoAndGetUserEntity(changePasswordDataDto);
        user.setPassword(changePasswordDataDto.getNewPassword());
        userRepository.save(user);
        return "Password Changed Successfully";
    }

    private User validateChangePasswordDataDtoAndGetUserEntity(ChangePasswordDataDto changePasswordDataDto) throws Exception {
        if (changePasswordDataDto == null) {
            logger.error("Change Password request is empty: {}", changePasswordDataDto);
            throw new Exception("ChangePasswordDataDto object is empty");
        }

        if (changePasswordDataDto.getNewPassword() == null || changePasswordDataDto.getNewPassword().isEmpty()) {
            throw new Exception("New Password field is empty");
        }

        if (changePasswordDataDto.getUsername() == null || changePasswordDataDto.getUsername().isEmpty()) {
            throw new Exception("Username field is empty");
        }

        if (changePasswordDataDto.getCurrentPassword() == null || changePasswordDataDto.getCurrentPassword().isEmpty()) {
            throw new Exception("Current Password field is empty");
        }

        User user = userRepository.findByUsernameAndPassword(changePasswordDataDto.getUsername(), changePasswordDataDto.getCurrentPassword());

        if (user == null) {
            logger.error("Can't find User by username: {} and password: {}", changePasswordDataDto.getUsername(), changePasswordDataDto.getCurrentPassword());
            throw new Exception("Can't find User with username: " + changePasswordDataDto.getUsername() + " and password " + changePasswordDataDto.getCurrentPassword());
        }

        return user;
    }


}
