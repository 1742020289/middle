import * as path from 'path';

/**
 * @description 获取目标文件的绝对地址
 * @param filePath 文件地址
 * @return path 目标文件绝对地址
 */
export function resolve (filePath: string): string {
    return path.resolve(__dirname, '../../', filePath);
};
