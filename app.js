angular
  .module("stoplight", ["ui.router"])
  .config(["$stateProvider", Router])
  .controller("stoplightController", ["$state", "$stateParams", stopLightController])

function Router($stateProvider){
  $stateProvider
  .state("color",{
    url:'/:color',
    controller: 'stoplightController',
    controllerAs: 'vm'
  })
}

function stopLightController($state, $stateParams){
  this.colors = ['red', 'yellow','green']
  this.bg = $stateParams.color
  this.turn = function(color){
    this.bg = color
    $state.go("color",{color: color})
  }
}
