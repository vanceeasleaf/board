define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var ShellImpl = require('$UI/system/lib/portal/shellImpl');
	var CommonUtils = require("$UI/system/components/justep/common/utils");
	//require("$UI/swapface/appVersionChecker");
	var Model = function() {
		this.callParent();
		var shellImpl = new ShellImpl(this, {
			"contentsXid" : "pages",
			"pageMappings" : {
				"mainActivity" : {
					url : require.toUrl('./mainActivity.w')
				},
				"login" : {
					url : require.toUrl('./login.w')
				
				},
				"imglist" : {
					url : require.toUrl('./imglist.w')
				
				},
				"message" : {
					url : require.toUrl('./message.w')
				
				}
			}
		});
		//shellImpl.setIsSinglePage(true);
		shellImpl.useDefaultExitHandler = false;


	};

	Model.prototype.modelLoad = function(event){
		//if(!localStorage.getItem("username")){justep.Shell.showPage("login");return;}
		if(localStorage['username']){justep.Shell.showPage('mainActivity');return;}
		justep.Shell.showPage("login");
				               
		
	};

	return Model;
});