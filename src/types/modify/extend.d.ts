/*
 * @Author: migao@wangguoyan 
 * @Date: 2021-03-29 13:15:45 
 * @Last Modified by: migao@wangguoyan
 * @Last Modified time: 2021-04-22 17:17:46
 * @description 对于基本对象类型的拓展
 */

/** 基本类型约束 */
declare namespace Extend {
    
}

/** 拓展了Object的可拓展属性 */
interface Object {

    /** 基本对象属性 */
    [key: string]: any;
}
