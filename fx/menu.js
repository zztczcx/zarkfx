/*
 *
 * DOC_BEGIN
 *
 * Menu
 * ===========
 *
 * 将嵌套的ul列表转换成具有层级关系的菜单。此fx基于
 * `jQuery Menu <http://jqueryui.com/menu/>`_,
 * 由
 * `ajie <http://github.com/zhaoxingjie>`_
 * 维护。
 *
 * Usage
 * --------------
 *
 * :FX name: menu
 * :Description: 将嵌套的ul列表转换成具有层级关系的菜单
 *
 * .. zarkfx:: :demo:
 *
 *     <ul fx="menu" style="width:180px;">
 *         <li><a href="#">Aberdeen</a></li>
 *         <li><a href="#">Addyston</a></li>
 *         <li>
 *             <a href="#">Salzburg</a>
 *             <ul>
 *                 <li>
 *                     <a href="#">Delphi</a>
 *                     <ul>
 *                         <li><a href="#">Ada</a></li>
 *                         <li><a href="#">Saarland</a></li>
 *                     </ul>
 *                 </li>
 *                 <li><a href="#">Delphi</a></li>
 *                 <li><a href="#">Perch</a></li>
 *             </ul>
 *         </li>
 *         <li><a href="#">Amesville</a></li>
 *     </ul>
 *
 *
 * DOC_END
 *
 */

FX.getFrame('jquery-1.7.2', function($){

    FX.register('menu', [ 'jqueryui-1.10.2' ], function(attrs){
    
        var $this = $(this);
        $this.menu(attrs);

    }, {
        style: 'smoothness'
    });

});
