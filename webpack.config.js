const path = require("path");

module.exports = {
  entry: './lib/index.tsx',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'index.js',
    library: 'plant-fiber-ui',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  mode: 'production',
  externals: [
    "react",
    "react-dom",
    "three",
    "react-three-fiber",
    "react-xr"
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(less|css)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
};
