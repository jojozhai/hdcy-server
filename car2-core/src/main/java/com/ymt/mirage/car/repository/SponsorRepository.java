package com.ymt.mirage.car.repository;

import org.springframework.stereotype.Repository;
import com.ymt.mirage.car.domain.Sponsor;
import com.ymt.pz365.data.jpa.repository.PzRepository;

@Repository
public interface SponsorRepository extends PzRepository<Sponsor>{

}
