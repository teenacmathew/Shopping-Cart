var Q = require('q');
module.exports = {

    postItem : function(req,res) {
        var id = req.params.id;
        var data = {
            "error":1,
            "item":""
        };
        if(!!id ){
            req.db.collection('items').insert({id:id}, function(err, result) {
                if(!!err){
                    data["items"] = "Error Adding data";
                }else{
                    data["error"] = 0;
                    data["items"] = "Item Added to cart Successfully";
                }
                res.json(data);
            });
        }else{
            data["items"] = "Please provide required data ";
            res.json(data);
        }
    },

    deleteItem : function(req,res) {
        var id = req.params.id;
        var data = {
            "error":1,
            "Items":""
        };
        if(!!id){
            req.db.collection('items').remove({id:id}, function(err, result) {
                if(!!err){
                    data["item"] = "Error deleting data";
                }else{
                    data["error"] = 0;
                    data["item"] = "Delete Item Successfully";
                }
                res.json(data);
            });
        }else{
            data["item"] = "Please provide required data ";
            res.json(data);
        }
    },

    getItems : function(req,res) {
        var data = {
            "Data":""
        };
        var db = req.db;
        req.db.collection('items').find().toArray(function (err, items) {
            if(items.length != 0){
                data["error"] = 0;
                data["items"] = items;
                res.json(data);
            }else{
                data["error"] = 1;
                data["items"] = 'No items Found..';
                res.json(data);
            }
        });
    }

}
