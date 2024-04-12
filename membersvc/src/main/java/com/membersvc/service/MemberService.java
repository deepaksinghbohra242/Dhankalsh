package com.membersvc.service;

import com.membersvc.model.Member;
import com.membersvc.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MemberService {
    @Autowired
    private MemberRepository memberRepository;

    public List<Member> getAllMembers() {
        return memberRepository.findAll();
    }

    public Optional<Member> getMemberById(Integer id) {
        return memberRepository.findById(id);
    }

    public String addMember(Member member) {
        try{
            boolean memberExists = memberRepository.existsByUserId(member.getUserId());
            if(memberExists) return "Member Already exists You need to update";
            final Member member1 = new Member(
                    null,
                    member.getUserId(),
                    member.getFullName(),
                    member.getFatherName(),
                    member.getMotherName(),
                    member.getProfession(),
                    member.getAddress(),
                    member.getPhoneNumber(),
                    member.getDob(),
                    member.getCommunityName(),
                    member.getStartDate()
            );memberRepository.save(member1);
            return "Member Added";
        }catch (Exception e){
            return "Error" + e ;
        }
    }

    public String updateMember(Member updatedMember) {
        try{
            boolean existingMember = memberRepository.existsByUserId(updatedMember.getUserId());
            if(!existingMember) return "Member not exists";
            memberRepository.save(updatedMember);
            return "Member updated";
        }catch (Exception e){
            return "Member not updated";
        }
    }

    public void deleteMember(Integer id) {
        memberRepository.deleteById(id);
    }
}
