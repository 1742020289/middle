/*
 * @Author: migao@wangguoyan
 * @Date: 2021-07-10 16:42:23
 * @Last Modified by: migao@wangguoyan
 * @Last Modified time: 2021-07-12 16:53:56
 */

// types
import { NSConfig } from '@/types/conf';

// modules
import * as path from 'path';
import * as fs from 'fs';
import * as appRoot from 'app-root-path';

class Config {
    /**
     * @description 获取配置文件中的配置数据
     * @returns 服务中的所有配置信息
     */
    private getConfig(): NSConfig.TConfig {
        let res = fs.readFileSync(path.resolve(appRoot.path, './config.json'), 'utf-8')
        return JSON.parse(
            res
        );
    }

    /**
     * @description 获取本机网络IP配置
     * @returns 本机网络IP配置
     */
    public get SERVER_HOST(): string {
        return this.getConfig().SERVER_HOST;
    }

    /**
     * @description 获取本机端口号
     * @returns 服务端口号配置
     */
    public get SERVER_PORT(): number {
        return this.getConfig().SERVER_PORT;
    }

    /**
     * @description 获取服务接口前缀
     * @returns 服务接口前缀
     */
    public get API_PREFIX(): string {
        return this.getConfig().API_PREFIX;
    }

    /**
     * @description 获取服务接口版本
     * @returns 服务接口版本
     */
    public get API_VERSION(): string {
        return this.getConfig().API_VERSION;
    }

    /**
     * @description 获取后端服务地址
     * @return 后端服务地址
     */
    public get BACKEND_BASE_URL(): string {
        return this.getConfig().BACKEND_BASE_URL;
    }
}

export let config = new Config();