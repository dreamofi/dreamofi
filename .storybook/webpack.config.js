module.exports = ({ config }) => {
  // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
  config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];
  config.module.rules[0].use[0].loader = require.resolve("babel-loader");
  config.module.rules[0].use[0].options.presets = [
    require.resolve("@babel/preset-react"),
    require.resolve("@babel/preset-env"),
  ];

  config.module.rules.push({
    test: /\.css$/,
    use: [
      {
        loader: "postcss-loader",
        options: {
          sourceMap: true,
          config: {
            path: "./",
          },
        },
      },
    ],
  });

  // config.module.rules[0].use[0].options.plugins = [
  //   // use @babel/plugin-proposal-class-properties for class arrow functions
  //   // require.resolve("@babel/plugin-proposal-class-properties"),
  //   // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
  //   require.resolve("babel-plugin-remove-graphql-queries"),
  // ];

  const fileLoaderRule = config.module.rules.find(
    (rule) => !Array.isArray(rule.test) && rule.test.test(".svg")
  );
  fileLoaderRule.exclude = /\.svg$/;
  config.module.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack", "url-loader"],
  });

  return config;
};
