package com.bora.board.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.bora.board.Service.BoardService;
import com.bora.board.entity.BoardDto;

@Controller
@RequestMapping("b")
public class BoardController {
	
	@Autowired
	private BoardService service;
	
	@GetMapping("viewBoard")
	public String boardList(Model model) throws Exception {
		
		List<BoardDto> list = service.boardList();
		
		model.addAttribute("list", list);
		
		return "b/viewBoard";
	}
	
	@GetMapping("writingPage")
	public String writePage() {
		return "b/writingPage";
	}
	
	@PostMapping("writingPost")
	public String writingPost(BoardDto dto) throws Exception {
		service.writingPost(dto);
		
		return "redirect:viewBoard";
	}
}
