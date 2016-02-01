var Q = require('q');
module.exports = {

    postItem : function(req) {
        var defer = Q.defer();
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
                defer.resolve(data);
            });
        }else{
            data["items"] = "Please provide required data ";
            defer.reject(data);
        }
        return defer.promise;
    },

    deleteItem : function(req) {
        var defer = Q.defer();
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
                defer.resolve(data);
            });
        }else{
            data["item"] = "Please provide required data ";
            defer.reject(data);
        }
        return defer.promise;
    },

    getItems : function(req) {
        var defer = Q.defer();
        var data = {
            "Data":""
        };
        req.db.collection('items').find().toArray(function (err, items) {
            if(items.length != 0){
                data["error"] = 0;
                data["items"] = items;
               defer.resolve(data);
            }else{
                data["error"] = 1;
                data["items"] = 'No items Found..';
                defer.reject(data);
            }
        });
        return defer.promise;
    }

}
