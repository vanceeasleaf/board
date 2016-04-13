define(function(require){
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/bootstrap/panel/panel');
require('$model/UI2/system/components/justep/button/button');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/board/message'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='c73uEFf';
	this._flag_='6066a91c48765245fba0bc6ecba6e730';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"message":{"define":"message","label":"详情","name":"message","relation":"message","type":"String"},"message_id":{"define":"message_id","label":"编号","name":"message_id","relation":"message_id","rules":{"integer":true},"type":"Integer"},"time":{"define":"time","label":"时间","name":"time","relation":"time","rules":{"datetime":true},"type":"DateTime"}},"directDelete":false,"events":{"onCustomRefresh":"data1CustomRefresh"},"idColumn":"message_id","limit":20,"xid":"data1"});
}}); 
return __result;});