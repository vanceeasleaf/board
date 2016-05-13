define(function(require){
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
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
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"addTime":{"define":"addTime","label":"下单时间","name":"addTime","relation":"addTime","rules":{"datetime":true},"type":"DateTime"},"img":{"define":"img","label":"图片","name":"img","relation":"img","type":"String"},"task_id":{"define":"task_id","label":"任务编号","name":"task_id","relation":"task_id","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{"onCustomRefresh":"localDataCustomRefresh"},"idColumn":"task_id","initData":"[]","limit":-1,"xid":"localData"});
}}); 
return __result;});