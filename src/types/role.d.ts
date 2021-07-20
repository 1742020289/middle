/*
 * @Author: Fanpingfan
 * @Date: 2021-07-15 17:43:50
 * @LastEditors: Fanpingfan
 * @LastEditTime: 2021-07-19 16:05:54
 */


import { General } from "./general";

/**用户角色相关约束 */

export namespace NSRole{

    /**用户角色对象结构 */
    interface Role{
        /**角色描述 */
        description:string;
        /**角色id */
        id:string;
        /**角色名称 */
        roleName:string;
    }
    /**查询角色信息参数 */
    interface getRoleParams{
        /**页号 */
        no:number;
        /**每页数量 */
        size:number;
    }
    /**查询角色信息接口返回的data数据 */
    interface roleReturnData<D>{
        /**当前页号 */
        current:number;
        /**每页数量 */
        size:number;
        /**总数量 */
        total:number;
        /**角色信息 */
        records:D[];
    }
    /**查询角色信息返回结果结构 */
    interface roleReturn extends General.APIReturnConstruct<roleReturnData<Role>>{

    }
    /**删除角色信息参数 */
    interface delRoleParam {
        /**角色ID */
        id:string;
    }
}


