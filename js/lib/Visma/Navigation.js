var pageHistory = [];
var Visma_Navigation = {
	navigate : function(template, get, success, raw){
		if(typeof get == 'string' && get != ''){
			window.location = '#' + get;
		}
		var url = (raw === true) ? template : 'template/' + template + '.html';
		
		if(template.indexOf('login') == -1){
			pageHistory.push(url);
		}
		
		$.ajax({
			url : url, 
			success : function(data){
				$("#mainContent").empty().html(data);
				if(typeof success == 'function'){
					success(data);
				}
			},
			error : function(data, data2, data3) {
				alert("Visma_Navigate error: " + url + ": " + data3);
				console.log(data);
				console.log(data2);
				console.log(data3);
			}
		});
	}, 
	goBack : function (){
		var current = pageHistory.pop();
		if(pageHistory.length < 2 && current != 'home'){
			this.navigate('home');
			return false;
		} else if(pageHistory.length < 2){
			return true;
		}
		
		var prev = pageHistory.pop();
		this.navigate(prev, null, null, true);
		
		return false;
	}
};