package com.membersvc.repository;

import com.membersvc.model.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member,Integer> {
    Boolean existsByUserId(Integer userId);

    Optional<Member> findByUserId(Integer userId);
}
