(function(){
angular
  .module("stopLightApp", [])
  .controller("stopLightController", [stopLightController])


function stopLightController(){
  this.colors = ['red', 'yellow','green']
  this.turn = function(color){
    this.bg = color
  }
}
})();
