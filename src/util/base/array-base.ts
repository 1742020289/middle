/*
 * @Author: migao@wangguoyan
 * @Date: 2021-04-06 20:52:20
 * @Last Modified by: migao@wangguoyan
 * @Last Modified time: 2021-04-17 16:49:27
 * @Description 继承Array对象
 */

/** 继承Array对象 */
export class ArrayBase<T> extends Array<T> {
    /** 实体对象类型 */
    public gd_class_name: string = '';
}
