/*
 * @Author: migao@wangguoyan 
 * @Date: 2021-04-03 16:06:29 
 * @Last Modified by: migao@wangguoyan
 * @Last Modified time: 2021-06-10 17:59:06
 * @description 业务中使用的数据类型约束
 */

// types

/** 业务中使用的数据 */
export namespace Metas {

    /** 模型·页面 */
    namespace Model {

        type ID = string;

        /** 结构 */
        interface Construct {

            /** 版本 */
            version: number;
            /** 描述 */
            desc: string | null;
            /** uuid */
            identity: string;
            /** 从属 */
            basePackages: string[];
            /** 名称 */
            name: string;
        }

        /** 属性 */
        namespace Propertype {

            /** 属性类型约束字面量 */
            type PropType = 'Number' | 'String' | 'Boolean' | 'Map' | 'SupplyChainPlanner' | 'Date' | 'ShiftPattern' | 'UnitOfMeasure' | 'Currency' | 'SalesSegment' | string;

            /** 属性类型含义约束字面量 */
            type TypeMeaning = 'NORMAL' | 'RELATION';

            /** 结构 */
            interface Construct {

                /** 属性类型含义 */
                typeMeaning: TypeMeaning;
                /** 属性名称 */
                name: string;
                /** 属性类型 */
                type: PropType;
            }

            /** 单条数据 */
            namespace DataItem {

                /** 结构 */
                interface Construct {

                    /** 对象id */
                    oid: number;
                    /** 序号 */
                    index: number;

                    [key: string]: any;
                }
            }
        }

    }

    /** 场景 */
    namespace Scene {

        /** 结构 */
        interface Construct {

            /** 模型uuid */
            model: string;
            /** ? */
            isActive: boolean;
            /** ? */
            active: boolean;
            /** 当前激活状态 */
            alive: boolean;
            /** 是否繁忙 */
            busy: boolean,
            /** ? */
            isBusy: boolean,
            /** ？时间 */
            time: number;
            /** ？ */
            isSelected: boolean;
            /** ？ */
            selected: boolean;
            /** ？ */
            isMainScenario: boolean;
            /** ？ */
            mainScenario: boolean;
            /** 场景id */
            id: string;
            /** 场景名称 */
            name: string;
            /** 用户id */
            userId: string;
            /** ？参数 */
            args: string;
            /** 知识表 */
            kts: Array<KT.Construct>;
        }

        /** 看到场景返回数据里面有从属结构kts，但目前不知道是什么，先按照结构定义下来 */
        namespace KT {

            /** 结构 */
            interface Construct {

                /** 场景id */
                sceneId: string;
                /** ？ */
                branchName: string;
                /** ？ */
                branchUuid: string;
                /** 版本uuid */
                versionUuid: string;
                /** 版本号 */
                versionVersion: number;
            }
        }
    }

    namespace Page {
        /** Page 基本结构 */
        interface Construct {
            id?: string;
            classCode?: string;
            className?: string;
            code: string;
            name: string;
            type: string;
            layout: object;
        }
    }

    /** Page对象（前端页面） */
    namespace Config {

        type ID = string;

        type ComponentId = ID;
        type PageId = ID;
        type ViewId = ID;

        /** Page 基本结构 */
        interface Construct {
            /** 配置版本 */
            edition: string;
            /** uid*/
            id: ID;
            /** 页面名称 */
            name: string;
            /** 所属的模型id */
            model: string;
            /** 配置 */
            config?: object;
        }

        /** 组件配置机构 */
        interface Component extends Construct {
            /** 组件类型 */
            type: string;
            /** 关联的节点code */
            nodeType: string;
            /** 版本 */
            version: string;
        }

        /** 页面配置结构<子节点类型> */
        interface Page<T> extends Construct {
            /** 分组代码 */
            classCode?: string;
            /** 分组名称 */
            className?: string;
            /** 代码 */
            code: string;
            /** 版本 */
            version: string;
            /** 子元素 */
            children: T[];
        }

        /** 视图结构<子节点类型> */
        interface View<T> extends Construct {
            /** 代码 */
            code: string;
            /** 分组代码 */
            classCode: string;
            /** 分组名称 */
            className: string;
            /** 子节点 */
            children: T[];
        }

    }

}