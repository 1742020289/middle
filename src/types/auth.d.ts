/*
 * @Author: migao@wangguoyan 
 * @Date: 2021-06-08 11:33:34 
 * @Last Modified by: migao@wangguoyan
 * @Last Modified time: 2021-06-19 13:48:56
 */

import { General } from './general';

/** 用户权限相关约束 */
export namespace NSAuth {

    /** 用户对象结构 */
    interface Construct {
        /** 邮箱 */
        email: string;
        /** 用户id */
        id: number;
        /** 被锁定 */
        isLocked: boolean;
        /** 锁定状态 */
        locked: boolean;
        /** 用户密码 */
        passWord: string;
        /** 用户名 */
        usrName: string;
        /** 用户账号 */
        userNo: string;
    }

    /** 登录参数 */
    interface LoginParam {
        /** 密码 */
        passWord: string;
        /** 账号 */
        userNo: string;
    }

    /** 登录接口返回信息中的data数据 */
    interface LoginReturnData extends Construct {
        /** 用户登录后用于验证的token */
        token: string;
    }

    /** 登录返回结果结构 */
    interface LoginReturn extends General.APIReturnConstruct<LoginReturnData> {}

}