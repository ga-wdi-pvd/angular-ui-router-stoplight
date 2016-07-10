angular
  .module("stoplight", [])
  .controller("stoplightController", [stopLightController])

function stopLightController(){
  this.colors = ['red', 'yellow','green']
  this.turn = function(color){
    this.bg = color
  }
}
