/*
 * @Author: wupinshuo
 * @Date: 2021-07-16 09:50:59
 * @LastEditors: wupinshuo
 * @LastEditTime: 2021-07-20 14:08:03
 */

import { General } from '@/types/general';

//定义用户结构类型的地方
export namespace NSUser {
    //**用户对象结构 */
    interface Construct {
        /**用户id */
        id: string;
        /**用户名 */
        userName: string;
        /**用户编号 */
        userNo: string;
        /**邮箱 */
        email: string;
        /**认证类型 */
        authorityType: string;
        /**加密后的密码 */
        passWord: string;
        /**被锁定 */
        isLocked: boolean;
        /**锁定状态 */
        Locked: boolean;
    }

    /**查询用户信息中返回的data数据 */
    interface UserReturnData<D> {
        /**用户信息 */
        records: D[];
    }

    /**查询用户信息返回结果结构 */
    interface UserReturn
        extends General.APIReturnConstruct<UserReturnData<Construct>> {}
}
