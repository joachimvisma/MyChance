/**
 * Visma_Lead
 */
var Visma_Lead = {
	/**
	 * Fetching a lead
	 * 
	 * @param leadid
	 * @returns {Boolean}
	 */
	getLead : function(leadid) {
		if (leadid === undefined || leadid == '' || leadid == false) {
			console.log('Invalid leadid');
			return false;
		}

		Visma_Request.post(Visma_Config.getApiUrl('lead'), 'userid='
				+ Visma_Oaut.getToken('VLPOauthToken') + 'leadid=' + leadid,
				function(data) {
					if (data.success == true) {
						this.writeLead(data);
					} else {
						alert("An unexpected error occured");
						console.log(data);
					}
				});
	},
	/**
	 * Populating the lead
	 * 
	 * @param data
	 */
	writeLead : function(data) {
		console.log(data);
	}
};