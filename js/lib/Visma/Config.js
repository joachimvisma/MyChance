var config = {};
var Visma_Config = {
	refreshConfig : function() {
		$.get('cfg/config.xml', function(d) {
			config = d;
		});
	},
	getApiUrl : function(api) {
		var environment = $(config).find('site').find('environment').html();
		var value = $(config).find('api').find(environment).find(api).html();
		if (value == undefined || value == '') {
			console.log("Visma_Config.getApiUrl error: undefined url value");
			console.log("Environment: " + environment);
			console.log("API: " + api);
			console.log("Value: " + value);
			return false;
		}
		return value;
	}
};