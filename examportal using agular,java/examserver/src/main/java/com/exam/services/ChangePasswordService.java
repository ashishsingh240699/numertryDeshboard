package com.exam.services;

import com.exam.payload.ChangePasswordDataDto;

public interface ChangePasswordService {
    public String changePassword(ChangePasswordDataDto changePasswordDataDto) throws Exception;
}
