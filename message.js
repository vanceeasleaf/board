define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var allData = require("./loadData");
	var Model = function(){
		this.callParent();
	};

	Model.prototype.data1CustomRefresh = function(event){
		var url = "http://datahub.top/print/message.php?printer_id="+localStorage['printer_id']+"&user_id="+localStorage['user_id'];
		allData.loadDataFromFile(url, this.comp('data1'), true);
	};

	return Model;
});