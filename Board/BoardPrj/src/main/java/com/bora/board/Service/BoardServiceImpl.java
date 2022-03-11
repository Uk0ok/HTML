package com.bora.board.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bora.board.Dao.BoardDao;
import com.bora.board.entity.BoardDto;

@Service
public class BoardServiceImpl implements BoardService {

	@Autowired
	private BoardDao dao;

	@Override
	public List<BoardDto> boardList() throws Exception {

		return dao.boardList();
	}

	@Override
	public void writingPost(BoardDto dto) throws Exception {
		
		dao.writingPost(dto);
	}

}
