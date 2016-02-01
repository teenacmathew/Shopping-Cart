var controller = require('./../controller/itemController');

module.exports = function(server) {
    var itemOperationsURL = "/item/:id";
    server.post(itemOperationsURL, controller.postItemToCart);
    server.delete(itemOperationsURL, controller.deleteItemFromCart);
    server.get(itemOperationsURL, controller.getItemsFromCart);
};
