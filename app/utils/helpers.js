// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Helper functions for making API Calls
var helper = {

	// getSavedLists = () => {
	// 	return axios.get();
	// },

	// getSharedLists = () => {
	// 	return axios.get();
	// },

	postList: function(list) {
		return axios.post("/list/", list);
	},

	getSavedList: function() {
		return axios.get("/list/all");
	},

	getListItems: function(listId) {
		return axios.get("/list/" + listId);
	}

};

module.exports = helper;