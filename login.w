<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model1" style="left:6px;top:393px;height:46px;width:143px;">
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="userData" idColumn="username" autoNew="true" limit="1">
  <column label="username" name="username" type="String" xid="default1"></column>
  <column label="userpass" name="password" type="String" xid="default2"></column></div>
  </div>
      <style>.form-signin{box-shadow: 0px 0px 8px -2px #979393;background: rgba(255, 255, 255, 0.5);border-radius:5px;padding: 0px 20px ;}.sign-title{
    font-size: 24px;
    color: #fff;
    left: 0;
    text-align: center;
color:#666;position: initial;margin: 0 auto 25px auto;}
.form-signin .btn-login{background: #A8B8D1;border:none;}</style>
  <span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog" style="left:9px;top:351px;"></span><div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents1" style="background-image:url(login-bg.jpg);background-size:cover;">
   <div id="main" class="x-contents-content form-signin" xid="content1" style="display:none;position:initial;overflow:hidden;width:330px;max-width:330px;margin:auto;height:500px;"><div xid="div1" align="center"><img src="$UI/board/tlogo.png" alt="" xid="image1" height="150px" style="margin-top:20px;"></img><h1 xid="h11" class="sign-title" >
  <![CDATA[泉奇云打印]]></h1></div>

  <div class="form-vertical" component="$UI/system/components/bootstrap/form/form" xid="form1"><div xid="div12" class="form-group" style="margin-right:auto;margin-left:auto;width:95%;">

  <label xid="label4" class="sr-only"><![CDATA[用户名]]></label>
  <div xid="div14" class="input-group"><div xid="div15" class="input-group-addon"><span class="glyphicon glyphicon-user"></span></div>
  <input component="$UI/system/components/justep/input/input" class="form-control" xid="username" placeHolder="请输入用户名" bind-ref="userData.ref('username')" id="username"></input></div></div><div xid="div13" class="form-group" style="margin-right:auto;margin-left:auto;width:95%;">  <label xid="label5" class="sr-only"><![CDATA[密码]]></label>
  <div xid="div16" class="input-group"><div xid="div17" class="input-group-addon"><span class="glyphicon glyphicon-edit"></span></div>
  <input component="$UI/system/components/justep/input/password" class="form-control" xid="password" placeHolder="请输入密码" bind-ref="userData.ref('password')" id="password" bind-keydown="passwordKeydown"></input>
  </div></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col" xid="col10" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn btn-success btn-block btn-login" label="登  录" xid="button1" onClick="btnCheckUserLogin">
   <i xid="i1"></i>
   <span xid="span1">登  录</span></a></div>
   </div>
  <div xid="div3" style="margin-top:30px;text-align:center;"><span xid="span2"><![CDATA[ © Change Cloud]]></span>
  </div>
  </div></div>
  </div>