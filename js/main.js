/**
 * Created by zhaoyige on 2017/7/16.
 */
$().ready(function(){
  var department = ['运维一线','运维二线','运维三线','运维开发','运维策划编辑','运维推广培训']//数据库取值
  for(var i = 0 ; i < department.length; i++) {
    var flag = "<option value='"+i+"'>" +department[i]+"</option>"
    $('#department').append(flag)
  }
  function validform(obj){
    return $(obj).validate({
      rules:{
        user: {
          required: true,
          mobile: true
        },
        password: {
          required: true,
          chrnum: true,
          minlength: 6
        },
        userName: {
          required: true,
          chinese: true
        },
        department: {
          required: true,
          selectNone: true
        },
        schoolName: {
          required: true,
          chinese: true
        },
        icloudCategory: {
          required: true,
          selectNone: true
        },
        outTime: {
          required: true
        },
        icoudDescribe:{
          required: true
        }
      },
      errorElement: "p",
      messages:{
        password: {
          minlength: "*密码长度不能低于6个字符"
        }
      }

    })
  }

  $(validform())
  /*注册页面验证*/
  $('.js-register').on('click',function(e){
    e.preventDefault()
    if(validform('#register').form()){ //通过验证之后执行
      alert('注册成功')
      window.location.href="login.html"
    }else{

    }
  })

  /*注册页面验证*/
  $('.js-icloud').on('click',function(){
    if(validform('#icloud').form()){ //通过验证之后执行
      alert('提交成功')
      window.location.href="admin.html"
    }else{

    }
  })
})