<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
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
	
	<h2>게시글 작성</h2><hr>

    <form action="writingPost" method="post">
        <div>
            제목 : 
            <input type="text" name="title" id="title" placeholder="제목을 입력하세요." size="77.5">
        </div><br>
        <div>
            내용 : 
            <textarea name="content" id="content" cols="80" rows="10" placeholder="내용을 입력하세요."></textarea>
        </div><br>
        <div>
            작성자 : 
            <input type="text" name="writer" id="writer" placeholder="이름을 입력하세요.">
        </div><br>
        <a type="button" href="javascript:history.back();" class="btn btn-primary write">뒤로가기</a>
        <input type="submit" class="btn btn-primary write" value="작성하기"></input>

    </form>
	
</body>
</html>