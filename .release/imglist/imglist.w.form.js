define(function(require){
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/button/buttonGroup');
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/button/button');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/board/imglist'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cJrQ3In';
	this._flag_='50d4885303e9993efeac0dc52c378aae';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"addTime":{"define":"addTime","label":"下单时间","name":"addTime","relation":"addTime","type":"String"},"path":{"define":"path","label":"图片路径","name":"path","relation":"path","type":"String"},"printTime":{"define":"printTime","label":"打印时间","name":"printTime","relation":"printTime","type":"String"},"task_id":{"define":"task_id","label":"ID","name":"task_id","relation":"task_id","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{"onCustomRefresh":"data1CustomRefresh"},"idColumn":"task_id","initData":"[{\"path\":\"images/57032ba8444f7.png\",\"task_id\":1,\"addTime\":\"111111\",\"printTime\":\"111111\"},{\"path\":\"images/57032c5331aff.png\",\"task_id\":2,\"addTime\":\"11111\",\"printTime\":\"11111\"},{\"path\":\"images/570339f75c4bc.png\",\"task_id\":3,\"addTime\":\"1111\",\"printTime\":\"11111\"},{\"path\":\"images/57034c766f525.png\",\"task_id\":4,\"addTime\":\"11\",\"printTime\":\"111\"},{\"path\":\"images/57034d378da00.png\",\"task_id\":5,\"addTime\":\"13\",\"printTime\":\"131\"},{\"path\":\"images/57034f6eed70f.png\",\"task_id\":6,\"addTime\":\"313\",\"printTime\":\"133\"}]","limit":3,"xid":"data1"});
 new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"addTime":{"define":"addTime","label":"下单时间","name":"addTime","relation":"addTime","rules":{"datetime":true},"type":"DateTime"},"img":{"define":"img","label":"图片","name":"img","relation":"img","type":"String"},"task_id":{"define":"task_id","label":"任务编号","name":"task_id","relation":"task_id","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{"onCustomRefresh":"localDataCustomRefresh"},"idColumn":"task_id","initData":"[]","limit":-1,"xid":"localData"});
}}); 
return __result;});