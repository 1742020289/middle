/*
 * @Author: Fanpingfan
 * @Date: 2021-07-15 17:43:26
 * @LastEditors: Fanpingfan
 * @LastEditTime: 2021-07-20 15:37:34
 */

import { MapBase } from "@/util/base/map-base";
import { Role } from "../role/gd-role";
import { User } from "../user/user-map";


/**数据存储类 */
 export class GDDataBase extends MapBase<string,object>{
    
    public readonly gd_class_name: string = 'database';
    public roles:Role = new Role();
    public users:User= new User();
}
