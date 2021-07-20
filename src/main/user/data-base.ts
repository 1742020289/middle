/*
 * @Author: mikey.wupinshuo 
 * @Date: 2021-07-17 11:21:30 
 * @Last Modified by:   mikey.wupinshuo 
 * @Last Modified time: 2021-07-17 11:21:30 
 */


import { MapBase } from "@/util/base/map-base";
import { User } from "./user-map";

export class GDDataBase extends User{
    readonly gd_dababase_name:string='gd_database';
    public users:Map<string,User>=new Map();
}