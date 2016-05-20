define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require('jSignature');
	//var io=require('http://cdn.bootcss.com/socket.io/1.3.7/socket.io.js');
	var Model = function(){
		this.callParent();
		this.mode=1;
		this.uploading=false;
		this.messaging=false;
		init();
		$(window).resize(init);
		//initSocket();
	};
	function init(){
		$('#bgcontainer *').hide();

		/*if($(window).width()>600){
		$('#bgcontainer').width(600);
		}
		if($(window).height()>700){
		$('#bgcontainer').height(700).css('top',($(window).height()-$('#bgcontainer').height())/2);
		}*/
		if($(window).width()<400){
			$('#bgcontainer').width($(window).width()+60);
			$('#bgcontainer').css('left',-30);
		}else 					
		var ratio=0.7;
		var t=$(window).height()*ratio;
		var l=($(window).width()-t)*.5;
		if($(window).width()>t){
		$('#bgcontainer').width(t);
		//$('#bgcontainer').css('left',l);
		}else{
			$('#bgcontainer').width($(window).width());

			$('#bgcontainer').css('left',0);
		}
		$('#canvasContainer').width($('#bgcontainer').width()-60);
		$('#canvasContainer').height($('#bgcontainer').height()-84);
		$('#canvasContainer').css('top',$('#bgcontainer').offset().top+54);
		$('#canvasContainer').css('left',$('#bgcontainer').offset().left+30);
		var w=$('#bgcontainer').width();
		var h=$('#bgcontainer').height();
		var wc=w-$('#lt').width()-$('#rt').width()-5;
		var hc=h-$('#lt').height()-$('#lb').height();
		$('#t').width(wc);
		$('#l').height(hc);
		$('#c').width(wc);
		$('#c').height(hc);
		$('#r').height(hc);
		//wc=w-$('#lb').width()-$('#rb').width()-5;
		$('#b').width(wc);
		$('#bgcontainer *').fadeIn();
		$('#canvasContainer').jSignature('destroy');
		$('#canvasContainer').jSignature({'width':'100%','height':'100%','signatureLine':false,'color':'#000','background-color':'transparent'});
	}
	function initSocket(){

	    // 连接服务端
	    var socket = io('http://workerman.net:2120');
	    // uid可以是自己网站的用户id，以便针对uid推送以及统计在线人数
	    uid = "85848858481";//+localStorage['user_id'];
	    // socket连接后以uid登录
	    socket.on('connect', function(){
	    	socket.emit('login', uid);
	    	console.log(uid);
	    });
	    // 后端推送来消息时
	    socket.on('new_msg', function(msg){
	    	msg=msg.replace("&quot;",'"');
	        console.log("收到消息："+msg);
	        
	        var data=JSON.parse(msg);
	        if(data.status=="success"){
			var count=data.count;
			$('#counter span').text(data.count);
			if(data.count==0)$('#counter').hide();
			else{$('#counter').show('slow');}
		}
	    });
	    // 后端推送来在线数据时
	    socket.on('update_online_count', function(online_stat){
	        console.log(online_stat);
	    });
	}
	Model.prototype.button2Click = function(event){
		this.comp('messageDialog1').show();
		
	};
	Model.prototype.buttonTouchmove = function(event){
		return false;
	};

	Model.prototype.button3Click = function(event){
	this.comp('messageDialog2').show();
		
	};
	function date() {

    var da = new Date();

    return da.getFullYear() + "-" + (da.getMonth() + 1) + "-" + da.getDate() + " " + da.getHours() + ":" + da.getMinutes() + ":" + da.getSeconds();

}
	function getPng(){
	$('canvas.jSignature').attr("id",'myCanvas');
    	// Generate the image data
    	var Pic = document.getElementById("myCanvas").toDataURL("image/png");
    	//Pic = Pic.replace(/^data:image\/(png|jpg);base64,/, "")
    	return Pic;
		}
	Model.prototype.UploadPic=function(Pic,addTime) {
		if(this.uploading)return;
		this.uploading=true;
	    var me=this;
	    // Sending the image data to Server
	    $.ajax({
	        type: 'POST',
	        global:false,
	        url: 'http://datahub.top/print/saveimg.php',
	        data:'img='+Pic+'&addTime='+addTime+'&printer_id='+localStorage['printer_id']+'&user_id='+localStorage['user_id'],
	        //contentType: 'application/json; charset=utf-8',
	        dataType: 'json',
	        success: function (data) {
	            if(data.status=="success"){
	            	me.removeData();
	            //alert("正在打印"+data.path);
	            }else{//alert("图片上传失败");
	            }
	        },
	        complete:function(request){
	        	me.uploading=false;
	        }
	    });
	}  
	Model.prototype.messageDialog1OK = function(event){
		$('#canvasContainer').jSignature('clear');
	};  

	Model.prototype.messageDialog2OK = function(event){
		var Pic =getPng();
		var d=this.comp('localData');
		d.newData({
						index : 0,
						defaultValues : [ {
							"img" : Pic,
							"addTime" : date()
						} ]
					});
		this.saveData();
		$('#canvasContainer').jSignature('clear');
		
		//UploadPic(Pic);
	};  
	Model.prototype.saveData = function(event){
		var d=this.comp('localData');
		localStorage.setItem("localData", JSON.stringify(d.toJson(false)));
	};  
	Model.prototype.removeData = function(event){
		var d=this.comp('localData');
		d.remove(d.getLastRow());
		this.saveData();
	}; 	
	Model.prototype.button6Click = function(event){
		//this.comp("windowDialog1").open();
		justep.Shell.showPage('imglist');
	};  
	Model.prototype.modelLoad = function(event){
		if(localStorage.getItem("localData")){
			var json=JSON.parse(localStorage.getItem("localData"));
			var rows=[];
			for(var i in json.rows){
				var row=json.rows[i];
				var obj={};
				for(var key in row){
					obj[key]=row[key].value;
				}
				rows.push(obj);
			}
			this.comp('localData').loadData(rows);
		}
		var me=this;
		var c=function(){me.commit();};
		var x=setInterval(c,5000);
		var u=function(){me.findmessage();};
		var p=setInterval(u,10000);
	};  
	Model.prototype.findmessage=function(){window.onerror=null;
		if(this.messaging)return;
		this.messaging=true;
		var me=this;
		$.getJSON('http://datahub.top/print/message.php',{printer_id:localStorage['printer_id'],user_id:localStorage['user_id'],type:'info'},function(data){
		if(data.status=="success"){
			var count=data.count;
			$('#counter span').text(data.count);
			if(data.count==0)$('#counter').hide();
			else{$('#counter').show('slow');}
			
		}
		}).always(function(){
		me.messaging=false;});
	}
	Model.prototype.commit=function(){
		var d=this.comp('localData');
		if(d.count()===0)return;
		var row=d.getLastRow();
		var Pic=row.val('img');
		var addTime=row.val('addTime');
		this.UploadPic(Pic,addTime);
	};
	//
	Model.prototype.button4Click = function(event){
		this.mode=!this.mode;
		var erase="img:$UI/board/eraser.png";
		var pencil="img:$UI/board/pencil.png";
		this.comp('button4').set("icon",this.mode?erase:pencil);
		if(!this.mode){
			this.lineWidth=$('#canvasContainer').jSignature('getSettings').lineWidth;
			//$('#canvasContainer').jSignature('disable');
			$('#canvasContainer').jSignature('updateSetting','lineWidth',25,true);
			$('#canvasContainer').jSignature('updateSetting','color','transparent',true);
			//$('#canvasContainer').jSignature({'width':'100%','height':'100%','signatureLine':false, color:'#ffffffff',lineWidth:5});
		}else{
			//$('#canvasContainer').jSignature('disable');
			//$('#canvasContainer').jSignature({'width':'100%','height':'100%','signatureLine':false});
			$('#canvasContainer').jSignature('updateSetting','lineWidth',this.lineWidth,true);
			$('#canvasContainer').jSignature('updateSetting','color','#000',true);
		}
	};
	Model.prototype.button1Click = function(event){
		justep.Shell.showPage('message');
		$('#counter').hide();
	};
	Model.prototype.button5Click = function(event){
		this.comp('messageDialog3').show();
		
	};
	Model.prototype.messageDialog3OK = function(event){
localStorage['username']="";
		justep.Shell.showPage('login');
	};

	Model.prototype.modelActive = function(event){
		init();
		
	};

	return Model;

});