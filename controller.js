(function () {





	function FormController (){
		var vm = this;
		vm.itemArray = [];

		
		vm.updateInfo = function(addNewItem){
			vm.itemArray.push({addNewItem: addNewItem})
			vm.addNewItem = "";
		}	
		vm.removeItem = function(item){
			var index = vm.itemArray.indexOf(item);
			vm.itemArray.splice(index, 1);
		}
	};


	angular
	.module("App")
	.controller("FormController", FormController);




})();