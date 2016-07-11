/**
 * Startup
 */
var app = {
	/**
	 * push listener
	 */
	pushListener: null,
    /**
     * Application contructor
     */
    initialize: function() {
        this.bindEvents();
    },
    /**
     * Binding events
     */
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        //$(this.onDeviceReady);
        Visma_Config.refreshConfig();
    },
    /** 
     * Device Ready
     */
    onDeviceReady: function() {
    	document.addEventListener('resume', this.onResume, false);
    	document.addEventListener('backbutton', this.onBackKeyDown, false);
		
        // Checking login
    	if(!Visma_Oaut.isLoggedIn()){
    		Visma_Navigation.navigate('login');
    	} else {
    		var leadid = Visma_Request.get('leadid');
    		if(leadid != ''){
    			Visma_Navigation.navigate('lead');
    		} else {
    			Visma_Navigation.navigate('home');
    		}
    	}
    }, 
    onResume: function(){
    	// Checking login
    	if(!Visma_Oaut.isLoggedIn()){
    		Visma_Navigation.navigate('login');
    	}
    }, 
    onBackKeyDown: function(){
    	Visma_Navigation.goBack();
    },
    /**
     * Logout
     */
    logout: function(){
    	if(confirm("Er du sikker på at du vil logge ut?")){
    		Visma_Oaut.removeToken('VLPOauthToken');
        	Visma_Navigation.navigate('login');
    	}
    	return false;
    },
    /**
     * Push init
     */
    pushInit: function(){
    	if(this.pushListener == null){
    		this.pushListener = Visma_Request.doPushRequest();
    	}
    }, 
    /**
     * Clear push
     */
    clearPush: function(){
    	clearInterval(this.pushListener);
    }
};
/**
 * Popup message
 * 
 * @param label
 * @param height
 */
function popup(label, height){
	var content = document.createElement("div");
	$(content).attr("id", "popupContent").html(label);
	
	var box = document.createElement("div");
	$(box).attr("id", "popupBox").append(content).css({
		height : height + "px", 
		top : "calc(50% - " + ( height / 2 ) + "px)"
	});
	
	var shadow = document.createElement("div");
	$(shadow).attr("id", "popupShadow").append(box);
	
	$("body").append(shadow);
}
function popupClose(){
	$("#popupShadow").remove();
}
//jQuery expression for case-insensitive filter
$.extend($.expr[":"], {
    "contains-ci": function(elem, i, match, array) {
		return (elem.textContent || elem.innerText || $(elem).text() || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
	}
});