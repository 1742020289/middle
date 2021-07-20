/*
 * @Author: wupinshuo
 * @Date: 2021-07-16 09:47:21
 * @LastEditors: wupinshuo
 * @LastEditTime: 2021-07-20 14:08:56
 */


import { ApiProperty } from '@nestjs/swagger';
import { NSUser } from '../user';

export module UserDTO {
    
    /**用户结构 */
    export class Construct implements NSUser.Construct {
        @ApiProperty({
            description: '用户id',
        })
        id: string;
        @ApiProperty({
            description: '用户名',
        })
        userName:string;
        @ApiProperty({
            description: '用户编号',
        })
        userNo:string;
        @ApiProperty({
            description: '邮箱',
        })
        email:string;
        @ApiProperty({
            description: '认证类型',
        })
        authorityType;
        @ApiProperty({
            description: '加密后的密码',
        })
        passWord:string;
        @ApiProperty({
            description: '被锁定',
        })
        isLocked:boolean;
        @ApiProperty({
            description: '锁定状态',
        })
        Locked:boolean;
    }
    
// 返回结果的data
class ReturnData extends Construct{
    
}

    /**返回用户结构数据的测试---成功 */
    export class ReturnUser {
        @ApiProperty({
            description:'返回状态',
            default:'1'
        })
        status:number;

        @ApiProperty({
            description:'返回信息',
            default:'操作成功'
        })
        message:string;

        @ApiProperty({
            description:'返回数据结构',
        })
        data:Construct;

    }
}
