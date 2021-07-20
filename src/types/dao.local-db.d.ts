/*
 * @Author: migao@wangguoyan 
 * @Date: 2021-06-08 17:14:33 
 * @Last Modified by: migao@wangguoyan
 * @Last Modified time: 2021-06-09 17:16:15
 */

export namespace NSLocalDB {
    
    /** 查询方法参数约束 */
    interface QueryParam {
        /** 查询条件 */
        condition: string;
    }

    /** 构造参数 */
    interface ConstructParam {
        /** 表名（文件名） */
        name: string;
    }
    
    /** 类本身的结构约束 */
    interface Construct<T> {
        /** 存储数据 */
        store(data: T): Promise<string>;
    }
}