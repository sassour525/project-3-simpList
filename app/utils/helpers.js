// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from "axios";

// Helper functions for making API Calls
var helper = {

	// getSavedLists = () => {
	// 	return axios.get();
	// },

	// getSharedLists = () => {
	// 	return axios.get();
	// },

	postList: (list) => {
		return axios.post("/list/", {list: list});
	},

};

export default helper;