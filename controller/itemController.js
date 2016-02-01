var itemService = require('./../service/itemService');

module.exports = {

    postItemToCart : function(req,res) {
        itemService.postItem(req)
            .then(function(data) {
                res.json(data);
            }).catch(function (err) {
            res.json(err);
        });
    },

    deleteItemFromCart : function(req,res) {
        itemService.deleteItem(req)
            .then(function(data) {
            res.json(data);
        }).catch(function (err) {
            res.json(err);
        });
    },

    getItemsFromCart : function(req,res) {
        itemService.getItems(req)
            .then(function(data) {
                res.json(data);
            }).catch(function (err) {
            res.json(err);
        });
    }

}

