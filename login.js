define(function(require){
        var $ = require("jquery");
        var justep = require("$UI/system/lib/justep");
        require("$UI/system/lib/cordova/cordova");
//        require("$UI/blshopApp/JS/Chart.js");
        require("cordova!org.apache.cordova.device");
        
        var Model = function(){
                this.callParent();
 var me=$('#main');
        	me.css('margin-top',($(window).height()-me.height())/2).fadeIn(); 
        };

        
        Model.prototype.btnCheckUserLogin = function(event){
                //var userData = this.comp("userData");
                var username=$('input[xid=username]').val();
                var password=$('input[xid=password]').val();
                //用户名和密码为空提示
                if ( $.trim(username) === "" || $.trim(password) === "") {
                        this.comp("messageDialog").show({
                                "title" : "温馨提示",
                                "message" : "请输入用户名或密码"
                        });
                }
                else
                {
                        var self = this;
                        //ajax校验用户名和密码
                        $.ajax({
                                "type" : "post",
                                "async" : false,
                                "data":{
                                        "username":username, //POS提交用户名字段
                                        "password":password  //POS提交密码字段
                                },
                                "dataType" : "json",
                                "url" : "http://datahub.top/print/checkuserLogin.php", //PHP数据库校验用户名和密码是否正常
                                "success" : function(data) {
                                        if(data['code']==200){          //php返回200，代表后端程序成功返回查询结果
                                                localStorage.setItem('username',data['data']['username']);  //登录成功存储用户名到html localStorage
                                                localStorage.setItem('password',data['data']['password']);  //登录成功存储中文名称到html localStorage
                                                localStorage.setItem('user_id',data['data']['user_id']);
                                                localStorage.setItem('printer_id',data['data']['printer_id']);
                                                //window.location.href="./mainActivity.w";   //登录成功，跳转到APP首页
                                                justep.Shell.showPage('mainActivity');
                                        }
                                        else if(data['code']==400) //返回400，代表数据库查询不到记录，用户名或密码
                                        {
                                                self.comp("messageDialog").show({
                                                "title" : "温馨提示",
                                                "message" : data['message']
                                                });
                                        }        
                                },
                                "error": function(){
                                                alert("数据传输失败！");
                                        }
                                
                        });
                }

        };




        Model.prototype.passwordKeydown = function(event){
        	if(event.keyCode==13)this.btnCheckUserLogin();
	};




        return Model;
});