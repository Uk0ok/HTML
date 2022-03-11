package com.bora.board.entity;

import java.util.Date;

import lombok.Data;


@Data
public class BoardDto {
	private int postNo;
	private String title;
	private String content;
	private String writer;
	private Date regDate;
	private char delYn;
};
