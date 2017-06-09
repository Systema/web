module.exports = {
  distDir: 'build',
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'emit-file-loader',
          options: {
            name: 'dist/[path][name].[ext]',
          },
        },
        {
          loader: 'babel-loader',
        },
        {
          loader: 'raw-loader',
        },
        {
          loader: 'postcss-loader',
        },
      ],
    });

    return config;
  },
};
