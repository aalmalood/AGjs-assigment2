(function () {
    'use strict';
    
    angular.module('ShoppingListCheckOff', [])
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .controller('ToBuyController', ToBuyController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyCtr = this;
        toBuyCtr.toBuyItems = ShoppingListCheckOffService.getTobuyItems();

      toBuyCtr.checkAsBought = function (itemIndex) {
        ShoppingListCheckOffService.checkAsBought(itemIndex);
      };
      
    }
    

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
      var boughtCtr = this;
        boughtCtr.boughtItems = ShoppingListCheckOffService.getBoughtItems();
    }
    

    function ShoppingListCheckOffService() {
      var service = this;
    
      // List of shopping items
      var toBuyItems = [ {
        name: "Sugat Cubes",
        quantity: "15"
      },
      {
        name: "Soda",
        quantity: "5"
      },
      {
        name: "Cookies",
        quantity: "20"
      },
      {
        name: "Candy",
        quantity: "50"
      },
      {
        name: "Water",
        quantity: "5"
      }];
      var boughtItems = [];
    
      service.checkAsBought = function (itemIndex) {
        var item = toBuyItems[itemIndex];
        boughtItems.push(item);
        toBuyItems.splice(itemIndex, 1);
      };
    
      service.getBoughtItems = function () {
        return boughtItems;
      };

      service.getTobuyItems = function () {
        return toBuyItems;
      };
    }
    
    })();
    /*
    !function(){"use strict";function a(b){var a=this;a.toBuyItems=b.getTobuyItems(),a.checkAsBought=function(a){b.checkAsBought(a)}}function b(a){var b=this;b.boughtItems=a.getBoughtItems()}angular.module("ShoppingListCheckOff",[]).controller("AlreadyBoughtController",b).controller("ToBuyController",a).service("ShoppingListCheckOffService",function(){var a=this,b=[{name:"Sugat Cubes",quantity:"15"},{name:"Soda",quantity:"5"},{name:"Cookies",quantity:"20"},{name:"Candy",quantity:"50"},{name:"Water",quantity:"5"}],c=[];a.checkAsBought=function(a){var d=b[a];c.push(d),b.splice(a,1)},a.getBoughtItems=function(){return c},a.getTobuyItems=function(){return b}}),a.$inject=["ShoppingListCheckOffService"],b.$inject=["ShoppingListCheckOffService"]}()*/