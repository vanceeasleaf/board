define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var page = 0;
var finished = 0;
	var loading=false;
	var dateString="";
	var Model = function(){
		this.callParent();
		//$('#container').css('min-height',$(window).height());
$('.x-panel-content').on("mousewheel DOMMouseScroll",function () {
  var totalheight = $(window).height() + $(this).scrollTop();
  //console.log(totalheight+"----"+$('#container').height());
  
  if ($('#container').height() - 300 <= totalheight) {
      if (!finished && !loading){
          loadData();//console.log(1);
      
      	}
  }
});
}
function refresh(){
	page=0;
	finished=0;
	id=0;
	currentDate=tomorrow.getDay();
	dateLabel="";
	$('#container *').remove();
	$('#nomore').hide();
	loadUnsync()
	loadData();
}

var tomorrow=new Date();
var id=0;
var showid=0;
tomorrow.setDate(tomorrow.getDate()+1);
var currentDate=tomorrow.getDay();
var today=new Date();
var yestoday=new Date();
var dateLabel="";
yestoday.setDate(yestoday.getDate()-1);
//var $currentUL=$('<ul class="day"></ul>');
//$('#container').append('<div class="date">今天</div>');
//$('#container').append($currentUL);

Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒  
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
function loadUnsync(){

		$('#unsync *').remove();
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
		var count=rows.length;if(count==0)return;
		$('#unsync').append('<div class="date">未同步<span class="sum">(共'+count+'个)</span></div>');
		var c=$('<ul class="day"></ul>');
		$('#unsync').append(c);
		for(var i in rows){
			var x=rows[i];
			c.append('<li class="item"><div class="wrap"><img  class="graph" src="'+x['img']+'"></div><div style="clear:both;"></li>');
			
		}
			
	}
	}
	function parseDate(time){
		var arr =time.split(/[- :]/);
		return new Date(arr[0],arr[1]-1,arr[2],arr[3],arr[4],arr[5]);
	}
	function loadData(callback) {
	loading=true;
	$.getJSON('http://datahub.top/print/history.php',{printer_id:localStorage['printer_id'],user_id:localStorage['user_id'],page:page,dateString:dateString},function (data) {
          if (data.length==0) { $('#nomore').show();finished = 1; return; }
          for(var i in data){
			var x=data[i];
			var s=x.printTime;
			var date=parseDate(x.addTime).getDate();
			var time=parseDate(x.addTime).Format("hh:mm");
			var dateLabel=parseDate(x.addTime).Format("yyyy-MM-dd");
			if(dateLabel==today.Format("yyyy-MM-dd")){
				dateLabel="今天";
			}else if(dateLabel==yestoday.Format("yyyy-MM-dd")){
				dateLabel="昨天";
			}
			//console.log(date);
			if (date!=currentDate){

					$currentUL=$('<ul class="day"></ul>');

				currentDate=date;

				var c=$('<div class="date" style="clear:both">'+dateLabel+'<span class="sum">(共5个)</span></div>');
				sum=c.find('.sum');
				sumInt=0;
				$('#container').append(c);
				$('#container').append($currentUL);
				$('#container').append("<div style='clear:both'></div>");
			}
			if(!s)s="未打印";
			id++;
			if(x.dayIndex<0)x.dayIndex*=-1;
			$currentUL.append('<li class="item"><div class="dayIndex">'+x.dayIndex+'</div><div class="wrap"><img width=100 height=100 data-id='+id+' dayIndex='+x.dayIndex+' date="'+dateLabel+' '+time+'" class="graph" src="'+(x.path).replace('.png','_thumb.png')+'"><div class="marker" src="'+x.path+'" data-id='+id+'></div></div><h5 class="caption">下单时间:'+x.addTime+'</h5><h5 class="caption">打印时间:'+s+'</h5><div style="clear:both;"></li>');
			sumInt+=1;
			sum.text("(共"+sumInt+"个)");
loading=false;
		}
    if(callback)callback();  
  });
  page++;
}


$(document).on('click','.marker',function(){
	showid=$(this).attr('data-id');

	showDetail();
		showPic(showid);
});

$('body').append('<div class="mask" id="stagemask"><img id="control_left" src="left.png" style="top: 40%;" class="control"><div id="stage"><div class="dayIndex"></div><img   class="stage"><div class="caption"></div></div><img  id="control_right" src="right.png" style="top: 40%;right:0" class="control"><img  id="control_close" src="close.png" class="control" style="top:0px;right:0;"><div>');
$('#control_close').click(hideDetail);
$('#control_left').click(function(){
	showid--;
	if(showid<=0){
		showid=1;//alert('已到第一个');
	}
	showPic(showid);
});
$('#control_right').click(function(){
	showid++;
	if(showid>=id+1){
		if(finished){showid=id;//alert('已到最后');
		}
		else{loadData(function(){showPic(showid);});return;}
	}
	showPic(showid);
});
function showDetail(){
	$('.mask').fadeIn();


}
function hideDetail(){
	$('.mask').fadeOut();
	$('.talk_title').text('历史记录');
}
function showPic(showid){
	var src=$('.marker[data-id='+showid+']').attr('src');
	var date=$('.graph[data-id='+showid+']').attr('date');
	var dayIndex=$('.graph[data-id='+showid+']').attr('dayIndex');
	$('.stage').attr("src",src);
	var w=$('.stage').width();
	var w1=$('#stage').width();
	$('.stage').css("left",(w1-w)/2);
	//$('#stage .caption').text(date);
	$('.talk_title').text(date);
	$('#stage .dayIndex').text(dayIndex);
}
	Model.prototype.localDataCustomRefresh = function(event){
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
	};








	Model.prototype.modelActive = function(event){
refresh();
setHeight();
$(window).resize(setHeight);
	
	};
	function setHeight(){
		var w=$(window).width();
	var h=$(window).height();
	//$('#stagemask').show();
	var fh=$('.maskcontainer').position().top;
	$('.mask').height(h-fh);
	$('.mask').css("top",fh);
	$('#stage').width(w);
	$('#stage').height(h-fh);
	$('#stage .dayIndex').css('left',w/2-$('#stage .dayIndex').width()/2);
	$('#stage').css("top",0);
	$('#stage').css("left",0);
	hideDetail();
	}








	Model.prototype.modelInactive = function(event){
	$('#stagemask').hide();
	};








	Model.prototype.button1Click = function(event){
		refresh();
	};








	Model.prototype.button2Click = function(event){
		dateString=$('input[xid=input1]').val();
		refresh();
	};








	Model.prototype.input1Keydown = function(event){
		if(event.keyCode==13){this.button2Click();}
	};








	return Model;
});