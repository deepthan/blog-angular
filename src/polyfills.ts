/**
 * auther: deepthan
 * createDate: 2017.10.23
 * explain: 处理浏览器兼容问题
 *          不同的浏览器对Web标准的支持程度也不同，填充库（polyfill）能帮我们把这些不同点进行标准化 
 * */ 

/**
 * angular和应用加载之前需要这个文件所包含的填充库。
 * 你可以添加你自己的填充库到这个文件
 * 
 * 这个文件被分为两个部分：
 *    1. 浏览器填充库: 这些在加载ZoneJS之前被应用，并被浏览器分类。
 *    2. 应用引用：    在ZoneJS之后导入的文件，应该在您的主文件之前加载。
 * 
 * 目前的设置是所谓的“常用”浏览器; 最新版本的浏览器都会自动更新，包括 Safari >= 10, Chrome >= 55 (包括 Opera),
 * Edge >= 13 桌面应用,  iOS 10 和  Chrome 移动应用.
 *
 * 了解更多： https://angular.io/docs/ts/latest/guide/browser-support.html
 */

/***************************************************************************************************
 * 浏览器填充库
 */

 
/** IE9, IE10 和 IE11 需要下面的所有填充库 **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';

/** 在IE10和IE11上SVG元素使用NgClass需要引入下面的依赖包  */
// import 'classlist.js';  // Run `npm install --save classlist.js`.

/** 常用浏览器需要这些 **/
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';

/**
 * 使用动画需要引入： `@angular/platform-browser/animations`.
 * 需要的: 除了Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.

/***************************************************************************************************
 * angular 需要引入zone.js.
 */
import 'zone.js/dist/zone';  //  Angular CLI 包括这个.



/***************************************************************************************************
 * 应用引入的文件
 */

/**
 * Date（日期）, currency（货币）, decimal（小数） and percent pipes(管道百分比).
 * 需要的: 除了 Chrome, Firefox, Edge, IE11 和 Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
/**
 * 使用intl至少需要引入一个本地数据.
 */
// import 'intl/locale-data/jsonp/en';
