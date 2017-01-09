var tpl=require('./template');

module.exports=function  (cb) {
	
	return tpl({
	  PLUGIN_NAME:'self',
	  argsTrue:function (arguments) {
	    return true;
	  },
	  doPlagin:cb
	})();

}



