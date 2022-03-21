module.exports = {
  makers: [
    {
      name: "@electron-forge/maker-zip",
    },
  ],
  packagerConfig: {},
  plugins: [
    [
      "@electron-forge/plugin-webpack",
      {
        mainConfig: "./web/electron/webpack.main.config.js",
        renderer: {
          config: "./web/electron/webpack.renderer.config.js",
          nodeIntegration: true,
          entryPoints: [
            {
              html: "./web/index.html",
              js: "./web/electron/src/renderer.ts",
              preload: {
                js: "./web/electron/preload.ts",
              },
              name: "main_window",
            },
          ],
        },
      },
    ],
  ],
};
