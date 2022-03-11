package com.bora.board.Dao;

import java.util.List;

import com.bora.board.entity.BoardDto;

public interface BoardDao {
	
	public List<BoardDto> boardList() throws Exception;

	public void writingPost(BoardDto dto) throws Exception;
	
}
