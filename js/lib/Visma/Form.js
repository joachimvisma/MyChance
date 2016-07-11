/**
 * Visma_Form
 */
var Visma_Form = {
		validateForm : function(form, highlight){
			if(highlight == undefined){
				highlight = true;
			}
			var result = true;
			$("*[required]", form).removeClass("inputError").each(function(){
				if($(this).attr('disabled') != 'disabled' && $(this).val() == ''){
					if(highlight === true){
						$(this).addClass("inputError");
					}
					result = false;
				}
			});
			
			return result;
		}
};