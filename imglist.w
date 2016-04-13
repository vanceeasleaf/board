<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:69px;top:9px;"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="data1" idColumn="task_id" limit="3" onCustomRefresh="data1CustomRefresh"><column label="图片路径" name="path" type="String" xid="xid1"></column>
  <column label="ID" name="task_id" type="Integer" xid="xid2"></column>
  <column label="下单时间" name="addTime" type="String" xid="xid3"></column>
  <column label="打印时间" name="printTime" type="String" xid="xid4"></column>
  <data xid="default1">[{&quot;path&quot;:&quot;images/57032ba8444f7.png&quot;,&quot;task_id&quot;:1,&quot;addTime&quot;:&quot;111111&quot;,&quot;printTime&quot;:&quot;111111&quot;},{&quot;path&quot;:&quot;images/57032c5331aff.png&quot;,&quot;task_id&quot;:2,&quot;addTime&quot;:&quot;11111&quot;,&quot;printTime&quot;:&quot;11111&quot;},{&quot;path&quot;:&quot;images/570339f75c4bc.png&quot;,&quot;task_id&quot;:3,&quot;addTime&quot;:&quot;1111&quot;,&quot;printTime&quot;:&quot;11111&quot;},{&quot;path&quot;:&quot;images/57034c766f525.png&quot;,&quot;task_id&quot;:4,&quot;addTime&quot;:&quot;11&quot;,&quot;printTime&quot;:&quot;111&quot;},{&quot;path&quot;:&quot;images/57034d378da00.png&quot;,&quot;task_id&quot;:5,&quot;addTime&quot;:&quot;13&quot;,&quot;printTime&quot;:&quot;131&quot;},{&quot;path&quot;:&quot;images/57034f6eed70f.png&quot;,&quot;task_id&quot;:6,&quot;addTime&quot;:&quot;313&quot;,&quot;printTime&quot;:&quot;133&quot;}]</data></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="localData" idColumn="task_id" limit="-1" onCustomRefresh="localDataCustomRefresh">
   <column label="图片" name="img" type="String" xid="column3"></column>
  <column label="任务编号" name="task_id" type="Integer" xid="column4"></column>
  <column label="下单时间" name="addTime" type="DateTime" xid="column1"></column>
  <data xid="default3">[]</data></div>
  </div>  

  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="历史订单"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">历史订单</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    
  <div class="x-panel-content" xid="content2"><div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel2">
   <div class="x-panel-content" xid="content3">
  <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents1">
   <div class="x-contents-content" xid="content1" _xid="C6F62EA400800001F3929D50179E5450" style="bottom: 0px;"><div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView2">
   <div class="x-content-center x-pull-down container" xid="div4">
    <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i1"></i>
    <span class="x-pull-down-label" xid="span8">下拉刷新...</span></div> 
   <div class="x-scroll-content" xid="div2">
  <div component="$UI/system/components/justep/list/list" class="x-list x-cards" xid="list1" data="data1" limit="6" disablePullToRefresh="false" autoLoad="true">
    
    
     
     <ul class="x-list-template x-min-height list-group my-gallery" xid="listTemplateUl1" componentname="$UI/system/components/justep/list/list#listTemplateUl" id="undefined_listTemplateUl1">
     <figure xid="li1" class="x-min-height list-group-item figures" componentname="li(html)" id="undefined_li1"  style="float:left;margin-left:5px;">
     <a itemprop="contentUrl" data-size="300x600" style="0px 1px 7px 1px #bbb;width:100%;display:block;height:300px;background-color:#eee;" bind-attr-href='$object.val("path")'>
            <img itemprop="thumbnail" alt="Image description" bind-attr-src='$object.val("path")' style="max-width:100%;max-height:100%;"/>
        </a>
        <figcaption style="display:none" itemprop="caption description" bind-text='"添加时间:"+val("addTime")+"；  打印时间:"+(val("printTime")?val("printTime"):&quot;未打印&quot;)'></figcaption>
        
        
  <!--  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col1"><img src="$UI/swapface/placeholder.png" alt="" xid="image1" bind-attr-src='$object.val("path")' bind-click="image1Click" style="max-width:100%;max-height:200px;background-color:#ddd;"></img></div>
   <div class="x-col" xid="col2"><span xid="span6" style="display:inline-block;height:20px;"><![CDATA[订单编号：]]></span><span xid="span7" bind-text="ref('task_id')" style="height:20px;"></span><div xid="div3"></div><span xid="span3" style="display:inline-block;height:20px;"><![CDATA[下单时间：]]></span><span xid="span2" bind-text="ref('addTime')" style="height:20px;"></span>
  <div xid="div1"></div><span xid="span4" style="display:inline-block;height:20px;"><![CDATA[打印时间：]]>
  </span>
  <span xid="span5" bind-text="ref('printTime')?ref('printTime'):&quot;未打印&quot;" style="height:20px;"></span>
  
  </div>
   </div>--></figure></ul>



</div><div class="clearfix"></div></div>
  <div class="x-content-center x-pull-up" xid="div6">
    <span class="x-pull-up-label" xid="span9">加载更多...</span>
  </div></div> </div><div class="x-contents-content x-scroll-view" xid="content4" onActive="localDataCustomRefresh"><div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView1" noMoreLoadLabel="没有未同步订单了。" hideScrollbar="true">
   <div class="x-content-center x-pull-down container" xid="div5">
    <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i5"></i>
    <span class="x-pull-down-label" xid="span13">下拉刷新...</span></div> 
   <div class="x-scroll-content" xid="div7"><div component="$UI/system/components/justep/list/list" class="x-list x-cards" xid="list2" data="localData" limit="5" disablePullToRefresh="false" autoLoad="true">
   <ul class="x-list-template x-min-height list-group" xid="listTemplateUl2" componentname="$UI/system/components/justep/list/list#listTemplateUl" id="undefined_listTemplateUl1">
    <li xid="li2" class="x-min-height list-group-item" componentname="li(html)" id="undefined_li1">
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
      <div class="x-col" xid="col7">
       <img src="$UI/swapface/placeholder.png" alt="" xid="image2" bind-attr-src='$object.val("img")' bind-click="image1Click" style="max-width:100%;max-height:200px;background-color:#ddd;"></img></div> 
      <div class="x-col" xid="col8">
       <span xid="span15" style="display:inline-block;height:20px;">订单编号：</span>
       <span xid="span16" bind-text="ref('task_id')" style="height:20px;"></span>
       <div xid="div9"></div>
       <span xid="span20" style="display:inline-block;height:20px;">下单时间：</span>
       <span xid="span19" bind-text="ref('addTime')" style="height:20px;"></span>
       <div xid="div10"></div>
       </div> </div> </li> </ul> </div></div>
   <div class="x-content-center x-pull-up" xid="div8">
    <span class="x-pull-up-label" xid="span14">加载更多...</span></div> </div></div></div>
  </div>
  <div class="x-panel-bottom" xid="bottom2"><div component="$UI/system/components/justep/button/buttonGroup" class="btn-group x-card btn-group-justified" tabbed="true" xid="buttonGroup1" style="height:100%;"><a component="$UI/system/components/justep/button/button" class="btn btn-warning btn-icon-left" label="未同步" xid="button1" icon="icon-alert" target="content4">
   <i xid="i2" class="icon-alert"></i>
   <span xid="span10" bind-text='"未同步("+localData.count()+")"'><![CDATA[未同步]]></span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="已同步" xid="button2" icon="icon-checkmark" target="content1">
   <i xid="i3" class="icon-checkmark"></i>
   <span xid="span11" bind-text='"已同步("+data1.count()+")"'>已同步</span></a></div></div></div>
   </div></div>
   <!-- Root element of PhotoSwipe. Must have class pswp. -->
<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">

    <!-- Background of PhotoSwipe. 
         It's a separate element as animating opacity is faster than rgba(). -->
    <div class="pswp__bg"></div>

    <!-- Slides wrapper with overflow:hidden. -->
    <div class="pswp__scroll-wrap">

        <!-- Container that holds slides. 
            PhotoSwipe keeps only 3 of them in the DOM to save memory.
            Don't modify these 3 pswp__item elements, data is added later on. -->
        <div class="pswp__container">
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
        </div>

        <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
        <div class="pswp__ui pswp__ui--hidden">

            <div class="pswp__top-bar" style="padding:10px;height: 60px;">

                <!--  Controls are self-explanatory. Order can be changed. -->

                <div class="pswp__counter" style="line-height:60px;"></div>

                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

                 <button class="pswp__button pswp__button--share" title="Share" style="display:none;"></button>

                <button class="pswp__button pswp__button--fs" title="Toggle fullscreen" style="display:none;"></button>

                <button class="pswp__button pswp__button--zoom" title="Zoom in/out" style="display:none;"></button> 

                <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->
                <!-- element will get class pswp__preloader-active when preloader is running -->
                <div class="pswp__preloader">
                    <div class="pswp__preloader__icn">
                      <div class="pswp__preloader__cut">
                        <div class="pswp__preloader__donut"></div>
                      </div>
                    </div>
                </div>
            </div>

            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div class="pswp__share-tooltip"></div> 
            </div>

            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
            </button>

            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
            </button>

            <div class="pswp__caption">
                <div class="pswp__caption__center"></div>
            </div>

        </div>

    </div>

</div>


</div> <!-- window -->