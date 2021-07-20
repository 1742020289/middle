/*
 * @Author: migao@wangguoyan 
 * @Date: 2021-06-19 15:11:28 
 * @Last Modified by: migao@wangguoyan
 * @Last Modified time: 2021-06-19 18:15:48
 */
import { ApiProperty } from "@nestjs/swagger";
import { NSAuth } from "@/types/auth";
import { Returns } from "@/types/return-type";

export module AuthDTO {

    /** 用户结构 */
    export class Construct implements NSAuth.Construct {

        @ApiProperty({
            description: '邮箱'
        })
        email: string;

        @ApiProperty({
            description: 'ID'
        })
        id: number;

        @ApiProperty({
            description: '是否锁定'
        })
        isLocked: boolean;

        @ApiProperty({
            description: '锁定状态'
        })
        locked: boolean;

        @ApiProperty({
            description: '密码'
        })
        passWord: string;

        @ApiProperty({
            description: '用户名'
        })
        usrName: string;

        @ApiProperty({
            description: '账号'
        })
        userNo: string;
    }

    /** 登录参数 */
    export class LoginParam implements NSAuth.LoginParam {

        @ApiProperty({
            description: '密码',
            default: '123456'
        })
        passWord: string;

        @ApiProperty({
            description: '用户名',
            default: 'admin'
        })
        userNo: string;
    }

    /** 登录返回结果的data */
    class ReturnData extends Construct {
        @ApiProperty({
            description: 'token'
        })
        token: string;
    }

    /** 登录返回结果 */
    export class LoginReturn implements NSAuth.LoginReturn {
        @ApiProperty({
            description: '返回状态',
            default: '1'
        })
        status: number;

        @ApiProperty({
            description: '返回信息',
            default: '操作成功'
        })
        message: string;

        @ApiProperty({
            description: '返回数据结构'
        })
        data: ReturnData;
    }

    /** 注销登录返回结果 */
    export class LogoutReturn implements Returns.Construct<string> {
        @ApiProperty({
            description: '返回状态',
            default: '1'
        })
        status: number;

        @ApiProperty({
            description: '返回信息',
            default: '操作成功'
        })
        message: string;

        @ApiProperty({
            description: '返回数据结构'
        })
        data: string = '';
    }
}


