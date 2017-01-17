(function(){
angular
  .module("stopLightApp", ["ui.router"])
  .config(["$stateProvider", Router])
  .controller("stopLightController", ["$state", "$stateParams", stopLightController])

  function Router($stateProvider){
    $stateProvider
    .state("color",{
      url: "/:color",
      controller: "stopLightController",
      controllerAs: "vm"
    });
    console.log("router set up correctly")
  }

function stopLightController($state, $stateParams){
  console.log($stateParams)
  this.bg = $stateParams.color
  this.colors = ['red', 'yellow','green']
  this.turn = function(color){
    // within click function
    $state.go("color", {color: color})
    this.bg = color
  }
}
})();
