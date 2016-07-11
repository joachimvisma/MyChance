var Visma_Oaut = {
		isLoggedIn : function(){
			var token = this.getToken('VLPOauthToken');
			return (token > 0) ? true : false;
		}, 
		setToken : function(name, value){
			window.localStorage.setItem(name, value);
		}, 
		getToken : function(name){
			return window.localStorage.getItem(name);
		}, 
		removeToken : function(name){
			localStorage.removeItem(name);
		}
};