  // 上传用户数据
  $('#userForm').on('submit', function() {
          // serialize方法将表单中的数据自动转化为字符串形式
          var userDate = $('#userForm').serialize();
          $.ajax({
                  type: 'post', //get或post
                  url: '/users', //请求的地址
                  data: userDate,
                  success: function(result) { //成功的回调函数
                      // console.log(result);
                      // 刷新页面
                      location.reload();
                  },
                  error: function() {
                      alert('用户添加失败')
                  }
              })
              //阻止默认行为
          return false;
      })
      //头像上传
  $('#avatar').on('change', function() {
      //设置一个空的表单对象
      var formData = new FormData();
      //追加表单对象中的属性值，将用户选择的文件追加到formdata表单对象中
      formData.append('avatar', this.files[0]);
      //发送请求
      $.ajax({
          type: 'post', //get或post
          url: '/upload', //请求的地址
          contentType: false,
          processData: false,
          data: formData,
          success: function(result) {
              console.log(result);
              // 实现头像预览功能
              $('#preview').attr('src', result[0].avatar);
              //隐藏域的值为图片的路径，用来上传数据
              $('#hiddenImg').val(result[0].avatar)
          }
      })




  })