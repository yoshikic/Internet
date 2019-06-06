	$(function(){
		$('.login').click(function(){
			console.log(new FormData($('.login-form')[0]))
			$.ajax({
				async : false,
	            url : "http://192.168.0.126:8000/demo/api/v1.0/tasks_p",
	            type : "post",
	            dataType : "json", // 返回的数据类型，设置为JSONP方式
	            processData: false,
				contentType: false,
	            data: new FormData($('.login-form')[0]), //提交的数据
				success: function(response) {
					console.log(response)
				},
				error: function(XMLHttpRequest, textStatus, errorThrown) {
					alert('请求失败,请刷新后重试!');
				}
			});
		})
	})
