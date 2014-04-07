package com.koreapolyschool.util.event.dao;


import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.koreapolyschool.util.event.vo.StudentVO;

@Repository
public class Event_Dao {
	@Autowired
	private SqlSession session;
	
	//private SqlSessionFactory factory;
	
	public StudentVO search_EventYN(StudentVO studentvo) {
		
		StudentVO vo = new StudentVO();
		
		try {
			
			System.out.println("DAO :: "+studentvo.getEvent_no());
			System.out.println("DAO :: "+studentvo.getClient_mem_code());
			
	//		vo = (StudentVO) factory.openSession().selectOne("event_ns.search_EventYN", studentvo);
				vo =(StudentVO) session.selectOne("event_ns.search_EventYN", studentvo);
		
			System.out.println("vo :: "+ vo.getEnter_yn());
		} catch (Exception e) {
			e.printStackTrace();
		}
	
		return vo;
	}



}
