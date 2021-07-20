/*
 * @Author: migao@wangguoyan 
 * @Date: 2021-04-06 10:25:18 
 * @Last Modified by: migao@wangguoyan
 * @Last Modified time: 2021-05-29 10:18:32
 * @description Upstream 类的约束
 */

// types
import { AxiosRequestConfig } from 'axios';
import { ReadStream } from 'fs';
import { ReturnType } from './return-type';

/** 上游服务类约束 */
export namespace UpstreamType {
    
    /** 构造器参数 */
    interface param {

        /** HTTP请求根路径 */
        httpBaseUrl: string;
    }

    /** 结构 */
    interface Construct {

        /**
         * get请求
         * @param url 地址（baseurl之后拼接的接口地址）
         * @param param 参数（同AxiosRequestConfig)
         */
        get(url: string, param?: AxiosRequestConfig): Promise<ReturnType.Basic>;

        /**
         * post请求
         * @param url 地址（baseUrl之后拼接的接口地址）
         * @param param 参数（同AxiosRequestConfig）
         */
        post(url: string, param?: AxiosRequestConfig): Promise<ReturnType.Basic | Buffer | ReadStream>;
    }

}
