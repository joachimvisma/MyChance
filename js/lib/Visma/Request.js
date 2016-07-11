/**
 * Visma_Request
 */
var Visma_Request = {
		get : function(name){
			var result = "", tmp = [];
		    location.hash.substr(1).split("&").forEach(function (item) {
		        tmp = item.split("=");
		        if (tmp[0] === name){ 
		        	result = decodeURIComponent(tmp[1]);
		        }
		    });
		    return result;
		}, 
		post : function(url, data, success){
			if(url == undefined || url == '' || url == false){
				console.log("Visma_Request.post error: URL not valid: " + url);
				return false;
			}
			
			data += (data != "") ? "&" : "";
			$.ajax({
				url : url,
				type : 'POST',
				data : data,
				success : success,
				error : function(data, data2, data3) {
					alert("Visma_Request.post error: " + url + ": " + data3);
					console.log(data);
					console.log(data2);
					console.log(data3);
				}
			});
		}, 
		doPushRequest : function(){
			return setInterval(10000, function(){
				
			});
		}
};