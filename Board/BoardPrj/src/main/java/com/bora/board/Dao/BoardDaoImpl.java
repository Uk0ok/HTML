package com.bora.board.Dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.bora.board.entity.BoardDto;

@Repository
public class BoardDaoImpl implements BoardDao {

	@Autowired
	private SqlSession session;

	@Override
	public List<BoardDto> boardList() throws Exception {

		return session.selectList("board.boardList");
	}

	@Override
	public void writingPost(BoardDto dto) throws Exception {
		
		session.insert("board.writingPost", dto);
	}

}
