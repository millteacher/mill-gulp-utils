# mill-gulp-utils
关于gulp的一些工具封装

#### 轻量级的自定义插件
```
var mplug=require("mill-gulp-utils").mplug;
var gulp=require("gulp");
var gutil=require("gulp-util");
module.exports=function  () {
	gulp.src('test/**/*.js')
	.pipe(mplug(function  (gutil,file,enc,content) {
		//自定义插件
		gutil.log(gutil.colors.red(file.path));
		gutil.log(content);
		return content;//需要返回content
	})).pipe(gulp.dest("dist"));
}
```
#### 独立的自定义插件
```
var tpl=require("mill-gulp-utils").tpl;
module.exports=tpl({
  PLUGIN_NAME:'t2',
  argsTrue:function (arguments) {
    return arguments.length>=1;
  },
  doPlagin:function  (gutil,file,enc,content) {
    gutil.log(content);
    return content;
  }
});
```