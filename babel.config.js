module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
      },
    ],
  ],
  plugins: ["@babel/plugin-transform-runtime"], //与babelHelpers配合使用，表示是构建一个js包
};
