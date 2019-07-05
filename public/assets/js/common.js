$('#logout').on('click', function() {
    var isLogout = confirm('您确定要退出吗')
        //如果用户确定退出
    if (isLogout) {
        $.ajax({
            type: 'post', //get或post
            url: '/logout', //请求的地址
            success: function(result) { //成功的回调函数
                //退出成功
                location.href = 'login.html'
            },
            error: function() {
                alert('退出失败')
            }
        })
    }
})