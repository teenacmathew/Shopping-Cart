var itemService = require('./../service/itemService');

module.exports = {

    postItemToCart : function(req,res,next) {
        itemService.postItem(req,res);
    },

    deleteItemFromCart : function(req,res,next) {
        itemService.deleteItem(req,res);
    },

    getItemsFromCart : function(req,res,next) {
        itemService.getItems(req,res);
    }

}

