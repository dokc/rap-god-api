module.exports = (api) => {
  const isTest = api.env("test")
  
  return {
    plugins: [
      [
        "@babel/plugin-transform-runtime",
        {
          absoluteRuntime: false,
          corejs: 2,
          version: "^7.7.4",
        },
      ],
    ],
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            node: "current",
          },
        },
      ],
    ],
  }
}
