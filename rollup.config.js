import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import rollupTypescript from "rollup-plugin-typescript2";
import babel from "@rollup/plugin-babel";
import pkg from "./package.json";
import terser from "@rollup/plugin-terser";
import { DEFAULT_EXTENSIONS } from "@babel/core";
const path = require("path");
const isProduction = process.env.NODE_ENV === "prod";
const config = {
  input: path.resolve(__dirname, "src/index.ts"),
  output: [
    //common.js
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      //es module
      file: pkg.module,
      format: "es",
    },
    {
      //umd
      name: "RollupTsTemplate", //script引入后，导出文件全局名称
      file: pkg.umd,
      format: "umd",
    },
  ],
  plugins: [
    //解析第三方依赖
    resolve(),
    // 识别commonJs模块的三方依赖
    commonjs(),
    //rollup编译ts
    rollupTypescript(),
    //babel配置
    babel({
      babelHelpers: "runtime",
      //不编译三方依赖
      exclude: "node_modules/**",
      //babel默认不解析ts，需要手动添加
      extensions: [...DEFAULT_EXTENSIONS, ".ts"],
    }),
  ],
};
//打包则压缩代码
if (isProduction) {
  config.plugins.push(
    terser({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
      },
    })
  );
}
export default config;
