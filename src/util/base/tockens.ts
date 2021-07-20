/*
 * @Author: migao@wangguoyan
 * @Date: 2021-04-26 13:30:45
 * @Last Modified by: migao@wangguoyan
 * @Last Modified time: 2021-06-19 18:30:03
 */
import * as md5 from 'md5';

export class Tockens {
    /**
     * 与后端上游服务交互通讯的
     * @returns
     */
    public static toUpstream(): String {
        // 用来异或加密的异或数字
        let xor: bigint = 6666666666n;
        // md5盐
        let salt: string = 'JivV9VHZJD6TfiNb5AX2CmK2Gxng58O9';
        // 获取当前时间时间戳精确到秒
        let timeSecond: bigint = BigInt(
            Math.trunc(new Date().getTime() / 1000),
        );
        // let timeSecond = 1619416834n;
        // 将时间和 xor 异或
        let xorStr = timeSecond ^ xor;

        // 时间和一个加密串拼接 md5一次
        let md5Str = md5(`${timeSecond}${salt}`);
        // 拼接xorStr + "#" + md5Str
        console.log(`${xorStr}#${md5Str}`);
        
        return `${xorStr}#${md5Str}`;
        
        
    }
}
