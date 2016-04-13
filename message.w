<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="message_id" onCustomRefresh="data1CustomRefresh"><column label="编号" name="message_id" type="Integer" xid="xid1"></column>
  <column label="时间" name="time" type="DateTime" xid="xid2"></column>
  <column label="详情" name="message" type="String" xid="xid3"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="消息"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">消息</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView2">
   <div class="x-content-center x-pull-down container" xid="div4">
    <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i2"></i>
    <span class="x-pull-down-label" xid="span3">下拉刷新...</span></div> 
   <div class="x-scroll-content" xid="div5"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="data1">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div class="panel panel-default" component="$UI/system/components/bootstrap/panel/panel" xid="panel3">
   <div class="panel-heading" xid="heading1">
    <h4 class="panel-title x-scroll-view" xid="h41" bind-text="ref('time')"><![CDATA[时间]]>
  </h4></div> 
   <div class="panel-body" xid="body1" bind-text=' $object.val("message")'></div>
   </div></li></ul> </div></div>
   <div class="x-content-center x-pull-up" xid="div6">
    <span class="x-pull-up-label" xid="span4">加载更多...</span></div> </div></div>
  </div> 
</div>