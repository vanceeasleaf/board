<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog3" style="left:38px;top:66px;" onOK="messageDialog3OK" title="确认注销" message="是否清空登录信息并回到登录页面？" type="OKCancel"></span><div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad" style="height:auto;left:54px;top:55px;"><div component="$UI/system/components/justep/data/data" autoLoad="false" xid="localData" idColumn="task_id"><column label="任务编号" name="task_id" type="Integer" xid="xid1"></column>
  <column label="图片" name="img" type="String" xid="xid2"></column>
  <column label="下单时间" name="addTime" type="String" xid="xid3"></column></div></div> 
<span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog1" type="OKCancel" title="请确认" message="确认清除？" onOK="messageDialog1OK" style="left:3px;top:60px;"></span>
  <span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog2" type="OKCancel" title="确认提交" message="确认提交订单？订单将记录在云端，并在仓库中打印，供相关人员取货和发货。您可以在历史订单中查看统计数据。" onOK="messageDialog2OK" style="left:21px;top:61px;"></span>
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-content" xid="content1" style="height:100%;">
   <div style="width:100%;height:100%;background-image:url(mainbg.png);position:absolute;top:0;left:0;z-index:-10;">
   <style>#bgcontainer *{display:none;}</style>
    <div id="bgcontainer" style="margin:auto;position:relative;width:100%;height:100%;" bind-touchmove="buttonTouchmove">
     <div id='lt' style="background:url(bg9/lt.png);width:144px;height:119px;float:left;margin-left: 1px;"></div>
      <div id='t' style="background:url(bg9/t.png);height:119px;float:left"></div>
       <div id='rt' style="background:url(bg9/rt.png);width:137px;height:119px;float:left;"></div>
       <div style="clear:both;"></div>
        <div id='l' style="background:url(bg9/l.png);width:145px;height:30px;float:left"></div>
         <div id='c' style="background:url(bg9/c.png);width:35px;height:30px;float:left"></div>
          <div id='r' style="background:url(bg9/r.png);width:137px;height:30px;float:left"></div>
          <div style="clear:both;"></div>
           <div id='lb' style="background:url(bg9/lb.png);width:145px;height:79px;float:left"></div>
            <div id='b' style="background:url(bg9/b.png);width:36px;height:79px;float:left"></div>
             <div id='rb' style="background:url(bg9/rb.png);width:137px;height:79px;float:left"></div>
     
     </div> 
     </div>
     <a component="$UI/system/components/justep/button/button" class="btn x-purple btn-icon-left pull-right" label="注销" xid="button5" icon="icon-load-c" style="color:#fff;margin-top:15px;" onClick="button5Click" bind-touchmove="buttonTouchmove">
   <i xid="i6" class="icon-load-c"></i>
   <span xid="span5">注销</span></a><div id='canvasContainer' xid="div2" style="height:100%;position:absolute;"></div></div>
   <div class="x-panel-bottom pull-right" xid="bottom1" height="60"><a component="$UI/system/components/justep/button/button" class="btn x-purple btn-only-icon pull-right" label="清除" xid="button4" onClick="button4Click" style="line-height:45px;border-radius:30px;height:60px;width:60px;;" bind-touchmove="buttonTouchmove" icon="img:$UI/board/eraser.png|">
   <i xid="i5"></i>
   <img src="$UI/board/eraser.png" xid="image4" style="width:20px;"></img><span xid="span4">清除</span></a><a component="$UI/system/components/justep/button/button" class="btn x-purple pull-right" label="清除" xid="button2" onClick="button2Click" style="line-height:45px;border-radius:30px;height:60px;width:60px;;" bind-touchmove="buttonTouchmove">
   <i xid="i2"></i>
   <span xid="span2">清除</span></a>
  
  <a component="$UI/system/components/justep/button/button" class="btn x-purple pull-right" label="消息" xid="button1" style="position:relative;margin-left:5px;line-height:45px;border-radius:30px;width:60px;height:60px;;" bind-touchmove="buttonTouchmove" onClick="button1Click">
   <i xid="i4"></i>
   <span xid="span1">消息</span><div id="counter" xid="div1" style="display:none;border-radius:15px;position:absolute;width:30px;height:30px;background:#f00;top:-5px;left:30px;"><span xid="span6" style="display:block;width:100%;height:100%;line-height:30px;text-align:center;"><![CDATA[10]]></span></div></a>
  <a component="$UI/system/components/justep/button/button" class="btn x-purple pull-right" label="历史" xid="button6" style="margin-left:5px;line-height:45px;border-radius:30px;height:60px;width:60px;" bind-touchmove="buttonTouchmove" onClick="button6Click">
   <i xid="i1"></i>
   <span xid="span8">历史</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-info pull-right" label="提交" xid="button3" style="margin-left:5px;line-height:45px;border-radius:30px;width:60px;height:60px;;" bind-touchmove="buttonTouchmove" onClick="button3Click">
   <i xid="i3"></i>
   <span xid="span3">提交</span></a></div></div></div>