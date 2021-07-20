/*
 * @Author: migao@wangguoyan 
 * @Date: 2021-06-08 13:29:40 
 * @Last Modified by: migao@wangguoyan
 * @Last Modified time: 2021-06-08 14:31:11
 */

/** 通用约束 */
export namespace General {
    
    /** 调用接口返回结构约束<结构中的data属性约束> */
    interface APIReturnConstruct<D> {
        /** 返回的数据 */
        data: D;
        /** 接口调用状态 */
        status: number;
        /** 接口调用状态信息 */
        message: string;
    }

    /** 接口返回列表值类型的结构约束<返回值中数组对象的结构> */
    interface APIReturnListObject<D> {
        /** 当前接口返回的数据总数 */
        total: number;
        /** 返回的数据实体 */
        rows: D[];
    }

    /** 接口参数相关通用约束 */
    namespace ApiParam {

        /** 查询接口过滤参中的分页参数约束 */
        interface QueryFilterPage {
            num: number;
            size: number;
        }

        /** 查询数据过滤条件的每一项 */
        interface QueryFilterItem {
            condition: string;
            __page: QueryFilterPage;
        }
    
        /** 查询数据接口过滤参数结构约束 */
        interface QueryFilter {
            [key: string]: QueryFilterItem;
        }
    }

}