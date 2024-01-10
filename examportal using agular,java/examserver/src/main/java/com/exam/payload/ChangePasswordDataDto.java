package com.exam.payload;

import lombok.Data;

@Data
public class ChangePasswordDataDto {
    private String username;
    private String currentPassword;
    private String newPassword;
}
