window.__justep.__ResourceEngine.loadCss([{url: '/v_15b9f6fb4a764c04b2b14762b03c6c2el_zh_CNs_desktopd_/system/components/comp.min.css', include: '$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/justep/panel/css/panel,$model/system/components/justep/common/css/scrollable,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/contents/css/contents,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/menu/css/menu,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/common/css/forms,$model/system/components/justep/bar/css/bar'},{url: '/v_d95d5a00bbe44a408f908968216d550dl_zh_CNs_desktopd_/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'}]);window.__justep.__ResourceEngine.loadJs(['/v_7aa14c7733744a2c89f5b2b04e287137l_zh_CNs_desktopd_/system/components/comp.min.js','/v_7693110cfc80416e8a6c6e715534a005l_zh_CNs_desktopd_/system/common.min.js','/v_a4dc475e3120455bb2754affb36410a1l_zh_CNs_desktopd_/system/core.min.js']);define(function(require){
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/button/buttonGroup');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/model/model');
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
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"addTime":{"define":"addTime","label":"下单时间","name":"addTime","relation":"addTime","rules":{"datetime":true},"type":"DateTime"},"path":{"define":"path","label":"图片路径","name":"path","relation":"path","type":"String"},"printTime":{"define":"printTime","label":"打印时间","name":"printTime","relation":"printTime","rules":{"datetime":true},"type":"DateTime"},"task_id":{"define":"task_id","label":"ID","name":"task_id","relation":"task_id","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"task_id","initData":"[{\"path\":\"images/57032ba8444f7.png\",\"task_id\":1,\"addTime\":\"111111\",\"printTime\":\"111111\"},{\"path\":\"images/57032c5331aff.png\",\"task_id\":2,\"addTime\":\"11111\",\"printTime\":\"11111\"},{\"path\":\"images/570339f75c4bc.png\",\"task_id\":3,\"addTime\":\"1111\",\"printTime\":\"11111\"},{\"path\":\"images/57034c766f525.png\",\"task_id\":4,\"addTime\":\"11\",\"printTime\":\"111\"},{\"path\":\"images/57034d378da00.png\",\"task_id\":5,\"addTime\":\"13\",\"printTime\":\"131\"},{\"path\":\"images/57034f6eed70f.png\",\"task_id\":6,\"addTime\":\"313\",\"printTime\":\"133\"}]","limit":-1,"xid":"data1"});
 new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"addTime":{"define":"addTime","label":"下单时间","name":"addTime","relation":"addTime","rules":{"datetime":true},"type":"DateTime"},"img":{"define":"img","label":"图片","name":"img","relation":"img","type":"String"},"task_id":{"define":"task_id","label":"任务编号","name":"task_id","relation":"task_id","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{"onCustomRefresh":"localDataCustomRefresh"},"idColumn":"task_id","initData":"[]","limit":-1,"xid":"localData"});
}}); 
return __result;});
