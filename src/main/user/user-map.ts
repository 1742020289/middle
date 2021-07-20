/*
 * @Author: mikey.wupinshuo 
 * @Date: 2021-07-17 12:53:48 
 * @Last Modified by: mikey.wupinshuo
 * @Last Modified time: 2021-07-17 13:31:08
 */
import { MapBase } from "@/util/base/map-base";

 //**继承MapBase对象 */
 export class User extends MapBase<string,object>{
    readonly gd_class_name:string='user';
    
    // for in 通过id 构建新map
    public forin_add(map,obj){
        
        for(let i in obj){
            map.set(i,obj[i]);
        }
        return map;
    }
    //map 转化为JSON
    public map_json(map){
        let obj={};
        for(let[k,v] of map){
            obj[k]=v;
        }
        return obj;
    }
}

// export class GDDataBase<string,object> extends User<K,V>{
// public users:Map<string,User<K,V>>;
// }