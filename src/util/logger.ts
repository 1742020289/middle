/*
 * @Author: migao@wangguoyan
 * @Date: 2021-06-18 14:59:50
 * @Last Modified by: migao@wangguoyan
 * @Last Modified time: 2021-07-13 16:28:38
 */

import { LoggerService } from '@nestjs/common';
import * as moment from 'moment';

/** 自定义日志 */
export class Logger implements LoggerService {

    /**
     * @description 格式化日志信息
     * @param message 具体的日志信息
     * @param level 日志级别
     * @returns 格式化之后的日志信息
     */
    private arrStr(message: string, level: string): string {
        return `[${moment().format('YYYY-MM-DD: hh:mm:ss.SSS')}] - [${level}] >>> ${message}`;
    }

    /**
     * @description 普通日志
     * @param message 
     */
    public log(message: string) {
        console.log(this.arrStr(message, 'Log'));
    }

    /**
     * @description 错误日志
     * @param message 
     * @param trace 
     */
    public error(message: string, trace: string) {
        console.error(this.arrStr(`${message} ### ${trace}`, 'Error'));
    }

    /**
     * @description 警告日志
     * @param message 
     */
    public warn(message: string) {
        console.warn(this.arrStr(message, 'Warn'));
    }

    /**
     * @description 调试日志
     * @param message 
     */
    public debug(message: string) {
        console.debug(this.arrStr(message, 'Debug'));
    }

    /**
     * @description verbose日志
     * @param message 
     */
    public verbose(message: string) {
        console.log(message, 'Verbose');
    }
}
