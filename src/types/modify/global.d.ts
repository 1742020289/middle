/*
 * @Author: migao@wangguoyan 
 * @Date: 2021-03-19 10:43:46 
 * @Last Modified by: migao@wangguoyan
 * @Last Modified time: 2021-04-22 18:46:54
 * @description 对于Nodejs中的global对象的拓展约束
 */

// types
/** Nodejs 类型拓展 */
declare namespace NodeJS {

    /** Global对象类型拓展 */
    interface Global {
        // _data_base: any;
    }
}