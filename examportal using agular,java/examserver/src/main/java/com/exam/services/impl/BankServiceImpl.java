package com.exam.services.impl;

import com.exam.model.deshboard.Bank;
import com.exam.payload.BankDto;
import com.exam.repositories.BankRepository;
import com.exam.services.BankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BankServiceImpl implements BankService {
    @Autowired
    private BankRepository bankRepository;
    @Override
    public BankDto addBank(BankDto bankDto) {
        Bank bank = mapToEntity(bankDto);
        Bank save = bankRepository.save(bank);
        BankDto bankDto1 = mapToDto(save);
        return bankDto1;
    }

    @Override
    public List<BankDto> getAllBank() {
        List<Bank> allbank = bankRepository.findAll();
         return allbank.stream().map(bank -> mapToDto(bank)).collect(Collectors.toList());
    }

    @Override
    public BankDto getBankById(long id) {
        Bank bank = bankRepository.findById(id).get();
        return mapToDto(bank);
    }

    @Override
    public void deletePostById(long id) {
        bankRepository.deleteById(id);
    }

    @Override
    public BankDto updateReg(BankDto bankDto, long id) {
        Bank bank = bankRepository.findById(id).get();
        bank.setBankName(bankDto.getBankName());
        bank.setAccountHolderName(bankDto.getAccountHolderName());
        bank.setAccountNumber(bankDto.getAccountNumber());
        bank.setIfscCode(bankDto.getIfscCode());
        bank.setUpiId(bankDto.getUpiId());
        Bank save = bankRepository.save(bank);

        return mapToDto(save);
    }

    private BankDto mapToDto(Bank bank){
        BankDto bankDto = new BankDto();
        bankDto.setId(bank.getId());
        bankDto.setBankName(bank.getBankName());
        bankDto.setAccountHolderName(bank.getAccountHolderName());
        bankDto.setAccountNumber(bank.getAccountNumber());
        bankDto.setIfscCode(bank.getIfscCode());
        bankDto.setUpiId(bank.getUpiId());
        return bankDto;
    }
    private Bank mapToEntity(BankDto bankDto){
        Bank bank =new Bank();
        bank.setBankName(bankDto.getBankName());
        bank.setAccountHolderName(bankDto.getAccountHolderName());
        bank.setAccountNumber(bankDto.getAccountNumber());
        bank.setIfscCode(bankDto.getIfscCode());
        bank.setUpiId(bankDto.getUpiId());
        return bank;
    }
}
