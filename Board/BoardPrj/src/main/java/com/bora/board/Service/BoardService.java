package com.bora.board.Service;

import java.util.List;

import com.bora.board.entity.BoardDto;

public interface BoardService {

	public List<BoardDto> boardList() throws Exception;

	public void writingPost(BoardDto dto) throws Exception;

}
