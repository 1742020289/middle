/*
 * @Author: migao@wangguoyan
 * @Date: 2021-04-17 16:48:55
 * @Last Modified by: migao@wangguoyan
 * @Last Modified time: 2021-04-26 17:58:22
 */

/** 矩阵 */
export class Materix<K, D> {
    /** 矩阵存储数据 */
    private data: Map<K, Map<K, D>> = new Map();

    /**
     * 查询矩阵数据
     * 如果没有返回undefined
     * @param row 行标
     * @param column 列标
     * @returns
     */
    public search(row: K, column: K): D | undefined {
        return this.data.get(row)?.get(column);
    }

    /**
     * 设置矩阵数据值
     * @param row 行标
     * @param column 列标
     * @param value 值
     */
    public store(row: K, column: K, value: D) {
        this.data.has(row)
            ? this.data.get(row)?.set(column, value)
            : this.data.set(row, new Map().set(column, value));
    }

    /**
     * 获取行
     * @param row 行标
     * @returns
     */
    public getRow(row: K): Map<K, D> | undefined {
        return this.data.get(row);
    }

    /**
     * 获取列
     * @param column
     * @returns
     */
    public getColumn(column: K): Map<K, D> | undefined {
        let that = this;
        /** 获取所有行的索引 */
        let rows = this.data.keys();
        /** 预设返回结果 */
        let columnResult = new Map();
        // 根据所有行的索引，将每行的数据中对应的列值存储为一个map返回
        for (let rowStr of rows) {
            columnResult.set(rowStr, that.data.get(rowStr)?.get(column));
        }
        return columnResult;
    }
}
