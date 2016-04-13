define(function(require){
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/windowContainer/windowContainer');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/contents/contents');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/board/index'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cjYrIBb';
	this._flag_='7ffdf8b323c43f06edb1000cd97d083d';
	this.callParent(contextUrl);
}}); 
return __result;});