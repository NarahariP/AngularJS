package com.hari.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.support.SessionStatus;

@Controller
@RequestMapping(value="test")
public class AncherPJController {

	@RequestMapping(value="success", method=RequestMethod.GET)
	public String success(SessionStatus sessionStatus){
		
		System.out.println("from success page..!");
		sessionStatus.setComplete();
		System.out.println("session completed..!");
		return "success";
	}
	
}
