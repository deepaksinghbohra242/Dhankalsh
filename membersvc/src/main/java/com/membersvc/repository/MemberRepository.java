package com.membersvc.repository;

import com.membersvc.model.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member,Integer> {
    Boolean existsByUserId(Integer userId);
}
