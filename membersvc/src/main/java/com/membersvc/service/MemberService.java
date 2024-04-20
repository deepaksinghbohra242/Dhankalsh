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

    public Optional<Member> getMemberById(Integer userId) {
        return memberRepository.findByUserId(userId);
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
        try {
            // Check if the member exists
            Optional<Member> existingMemberOptional = memberRepository.findByUserId(updatedMember.getUserId());

            if (existingMemberOptional.isPresent()) {
                // Get the existing member object
                Member existingMember = existingMemberOptional.get();

                // Update fields of the existing member with new values
                existingMember.setFullName(updatedMember.getFullName());
                existingMember.setFatherName(updatedMember.getFatherName());
                existingMember.setMotherName(updatedMember.getMotherName());
                existingMember.setPhoneNumber(updatedMember.getPhoneNumber());
                existingMember.setAddress(updatedMember.getAddress());
                existingMember.setProfession(updatedMember.getProfession());
                existingMember.setDob(updatedMember.getDob());
                existingMember.setStartDate(updatedMember.getStartDate());
                // Save the updated member to the database
                memberRepository.save(existingMember);

                return "Member updated";
            } else {
                return "Member does not exist";
            }
        } catch (Exception e) {
            return "Member not updated";
        }
    }


    public void deleteMember(Integer id) {
        memberRepository.deleteById(id);
    }
}
