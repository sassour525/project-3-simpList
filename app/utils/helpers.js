// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Helper functions for making API Calls
var helper = {
    shareList: function(shareOptions){
        return axios.post("/list/share/", shareOptions);
    },
    getSharedLists: function(userId) {
        return axios.get("/user/sharedlists/"+userId);
    },
    createUser: function (user) {
        return axios.post("/user/", user)
    },

    postList: function (list) {
        return axios.post("/list/", list);
    },

    getSavedList: function (userId) {
        return axios.get("/list/user/" + userId);
    },

    getListItems: function (listId) {
        return axios.get("/list/" + listId);
    }

};

module.exports = helper;