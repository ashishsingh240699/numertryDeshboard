package com.exam.services;

import com.exam.payload.BankDto;

import java.util.List;

public interface BankService {



    BankDto addBank(BankDto bankDto);

    List<BankDto> getAllBank();

    BankDto getBankById(long id);

    void deletePostById(long id);

    BankDto updateReg(BankDto bankDto, long id);
}
