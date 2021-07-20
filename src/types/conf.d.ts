/*
 * @Author: migao@wangguoyan
 * @Date: 2021-07-10 16:44:48
 * @Last Modified by: migao@wangguoyan
 * @Last Modified time: 2021-07-10 16:45:34
 */

export namespace NSConfig {
  /** 服务配置信息类型约束 */
  interface TConfig {
    /** 本地网络IP */
    SERVER_HOST: string;

    /** 本机端口号 */
    SERVER_PORT: number;

    /** 本机接口前缀 */
    API_PREFIX: string;

    /** 本机接口版本 */
    API_VERSION: string;

    /** 后端服务地址 */
    BACKEND_BASE_URL: string;
  }
}
