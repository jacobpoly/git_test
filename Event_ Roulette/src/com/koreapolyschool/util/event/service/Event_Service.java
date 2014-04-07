package com.koreapolyschool.util.event.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.koreapolyschool.util.event.dao.Event_Dao;
import com.koreapolyschool.util.event.vo.StudentVO;

@Service
public class Event_Service {
	
	@Autowired
	private Event_Dao event_dao;
	
	public StudentVO search_EventYN(StudentVO studentvo) {
		
		
		return (StudentVO)event_dao.search_EventYN(studentvo);
	}
	

}
