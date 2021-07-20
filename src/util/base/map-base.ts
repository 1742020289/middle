/*
 * @Author: migao@wangguoyan
 * @Date: 2021-04-06 20:50:33
 * @Last Modified by: migao@wangguoyan
 * @Last Modified time: 2021-04-17 16:49:12
 * @Description 继承Map对象
 */

/** 继承Map对象 */
export class MapBase<K, V> extends Map<K, V> {
    /** 实体对象类型 */
    public gd_class_name: string = 'MapBase';
}
