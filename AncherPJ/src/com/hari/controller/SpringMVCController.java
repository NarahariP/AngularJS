package com.hari.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.hari.pojo.Person;

@Controller
public class SpringMVCController {

	@RequestMapping(value="/hello")
	public ModelAndView hello()
	{
		System.out.println("from hello");
		return new ModelAndView("hello");
	}
	
	@RequestMapping(value = "/PostFormData", method = RequestMethod.POST, consumes="application/json")
	public @ResponseBody Person PostService(@RequestBody Person person) {
		
		System.out.println("from Controller.!");
		System.out.println("form Data: "+person.toString());
		return person;
	}
	
}
