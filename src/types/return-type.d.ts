/*
 * @Author: migao@wangguoyan 
 * @Date: 2021-04-02 10:55:48 
 * @Last Modified by: migao@wangguoyan
 * @Last Modified time: 2021-06-15 13:08:30
 * @description 接口返回值的约束
 */

///<reference path="./modify/extend.d.ts" />

// types
import { Metas } from './metas';

/** 数据返回结构 */
export namespace ReturnType {

    /** 状态定义 */
    type _Status = 0 | 1;

    /** 返回的数组数据结构 */
    type _List_Construct = {

        /** 表示当前结果共包含数据的数量 */
        total: number;
        /** 返回的数据 */
        rows: Array<any>;
    }

    /** 数据返回的外层结构 */
    interface Basic {
        /** 接口返回状态 */
        status: _Status;
        /** 接口调用返回的状态信息 */
        message: string;
        /** 接口数据信息 */
        data: _List_Construct | any;
    }

    /** 
     * 查询数据模型
     * api/v1/model/page
     */
    namespace Module {

        /** Pages数据结构 */
        interface _Row_Construct extends _List_Construct {
            rows: Array<Metas.Model.Construct>;
        }

        /** 接口数据结构 */
        interface Result extends Basic {
            data: _Row_Construct;
        }
    }

    /**
     * 查询模型下的节点名称
     * api/v1/model/{identity}/types
     */
    namespace Types {

        /** 接口数据结构 */
        interface Result extends Basic {
            data: Array<string>;
        }
    }

    /**
     * 查询节点属性
     * api/v1/model/{identity}/type/{name}/properties
     */
    namespace Properties {

        /** 接口数据结构 */
        interface Result extends Basic {
            data: Array<Metas.Model.Propertype.Construct>;
        }
    }

    /**
     * 查询模型下所有场景
     * /api/v1/scene/model/{identity}
     */
    namespace Scenes {

        /** 接口数据结构 */
        interface Result extends Basic {
            data: Array<Metas.Scene.Construct>;
        }
    }

    /**
     * 查询场景&模型下数据
     * /api/v1/scene/{uuid}/datas
     */
    namespace Datas {

        /** 数据项集合结构 */
        interface _Item_Construct extends _List_Construct {
            rows: Array<Metas.Model.Propertype.DataItem.Construct>
        }

        /** 整合数据结构 */
        interface Construct {
            [key: string]: _Item_Construct;
        }

        /** 数据的返回结构 */
        interface DataConstruct extends Construct {}

        /** 接口数据结构 */
        interface Result extends Basic {
            data: Construct;
        }

        /** 分页参数结构 */
        interface _Page_Param {
            /** 页号 */
            num: number;
            /** 每页数量 */
            size: number;
        }

        /** 单项参数 */
        interface _Param_Item {
            /** 查询条件 */
            condition: string;
            /** 页面参数 */
            __page: _Page_Param;
        }

        /** 调用接口传参结构 */
        interface Param {
            [key: string]: _Param_Item;
        }
    }

    /** Socket消息规则 */
    namespace Socket {
        /** 节点变化带来的socket数据变更socket消息通知 */
        interface NodeChange {
            eventType: "NODE_CHANGE" | "SUBSCRIBE_SUCCESS" | string;	// 订阅事件类型
            data: {
                time: string;
                scene: string,
                nodes: string[]
            }
        }
    }
}

/** 接口返回 */
export namespace Returns {

    /** 接口返回结构<接口返回的data结构> */
    interface Construct<T> {
        status: number;
        message: string;
        data: T;
    }

    interface ListResult<T> {
        total: number;
        rows: T[]
    }
}