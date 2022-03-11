<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>    
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>viewBoard</title>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</head>
<body>

    <h2>게시글 목록</h2>

    <table border="1">
        <tr>
            <th>번호</th>
            <th>제목</th>
            <th>이름</th>
            <th>작성일</th>
        </tr>
       <c:forEach items="${list}" var="b">
        	<tr>
        		<td>${b.postNo}</td>	
        		<td><a href="${path}/b/read.do?bno=${b.postNo}">${b.title}</a></td>	
        		<td>${b.writer}</td>	
        		<td><fmt:formatDate value="${b.regDate}" pattern="yy-MM-dd" /></td>	
        	</tr>   	
        </c:forEach> 
    </table><br>
    
    <a type="button" href="writingPage" class="btn-primary btn writing">글쓰기</a>

</body>
</html>