<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:69px;top:9px;" onActive="modelActive" onInactive="modelInactive"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="localData" idColumn="task_id" limit="-1" onCustomRefresh="localDataCustomRefresh">
   <column label="图片" name="img" type="String" xid="column3"></column>
  <column label="任务编号" name="task_id" type="Integer" xid="column4"></column>
  <column label="下单时间" name="addTime" type="DateTime" xid="column1"></column>
  <data xid="default3">[]</data></div>
  </div>  
<style>
body{background: #494A5F; 
    color: #D5D6E2;}
.item{float:left;width:100px;;margin:2px;box-sizing: border-box;list-style: none;position:relative;}
.item .wrap{max-height:100px;background: #bbb;position: relative;}
.item .graph{max-width:100%;max-height: 100%;margin:auto;display: block}
.item .caption{display: block;padding-top:5px;font-size: 14px;font-family: "微软雅黑";display: none;}
.item .marker{height:100%;background: rgba(73, 74, 95, 0.44);;position: absolute;top:0;left: 0;width: 100%;opacity:0; transition: opacity .4s ease-out  }
.item .marker:hover{transition: opacity .4s ease-in;
	opacity: 1.0;cursor: pointer;
}
.dayIndex{line-height:30px;position:absolute;top:0;left:0;background:rgba(97, 94, 94, 0.29);text-align:center;font-size:15px;color:#fff;width:30px;height:30px;border-radius:15px;z-index:30;}
.day{float:left;width: 100%;}
.date{font-size:20px;padding:10px;border-bottom: 2px solid #333;}
.mask{width:100%;height:100%;position: fixed;top:0px;background: rgba(37, 37, 46, 0.81);display: none;z-index:100;}
.mask .control{position: absolute;width: 40px;cursor: pointer;z-index:100;background:rgb(209, 208, 208);}
#stage{position:absolute;background: rgba(210, 211, 236, 0.69);background:url('bg.jpg');background-size:cover}
#stage .caption{position:absolute;top:0;color:#333;text-align:center;width:100%;padding:5px;font-size:17px;font-family:'微软雅黑'；}
.mask .stage{position:absolute;top:0;max-width: 100%;max-height:100%;margin:auto;}
.maskcontainer{position:relative;}
#nomore{padding:20px;color:#fff;text-align:center;}
@media screen and (min-width:400px ){
	/*.item{width:30%;}*/
}
</style>
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="历史订单"
          class="x-titlebar titlebar" style="background-color:#66677c;;">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title talk_title" style="background-color:#66677c;;">历史订单</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    
  <div class="x-panel-content maskcontainer" xid="content2" _xid="C707C8A724A00001788A19B31EB214F4" style="bottom: 0px;">
  <div id="container" style="max-width: 700px;margin:auto;"></div>
  <div style="clear:both"></div>
  <div id="nomore">已经没有数据了</div></div>
  </div>

</div> <!-- window -->