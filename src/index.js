(function(Global,fun){
  // requirejs
  if(typeof define === 'function' && define.amd){
    define(fun)
  }else if(typeof exports === 'object'){ // seajs
    module.exports = fun()
  }else{ // global
    Global.scrollTo = fun()
  }
})(this,function(){
  return function(el){
    el.setAttribute('tabindex',-1)
    el.focus()
    el.removeAttribute('tabindex')
  }
});
