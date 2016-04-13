window.__justep.__ResourceEngine.loadCss([{url: '/v_6f948dff0bad41cab6542c1362093d15l_zh_CNs_d_m/system/components/comp.min.css', include: '$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/justep/panel/css/panel,$model/system/components/justep/common/css/scrollable,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/contents/css/contents,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/menu/css/menu,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/common/css/forms,$model/system/components/justep/bar/css/bar'},{url: '/v_cb4d6afa233c494b95178266e0195b3dl_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'}]);window.__justep.__ResourceEngine.loadJs(['/v_8c5008c273c7415a8b7e67d7af407a6cl_zh_CNs_d_m/system/components/comp2.min.js','/v_72b6b520e6ac4034b09cacb47b1209ddl_zh_CNs_d_m/system/components/comp.min.js','/v_8a8ac7feac604cffb157fb0d1842f320l_zh_CNs_d_m/system/common.min.js','/v_e95a86c3503840b486a297be16385f86l_zh_CNs_d_m/system/core.min.js']);define(function(require){
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
