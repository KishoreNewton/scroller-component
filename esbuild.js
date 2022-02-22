const esbuild = require("esbuild");

const defaultConfig = {
  entryPoints: ["./src/index.js"],
  bundle: true,
};

esbuild.build({
  ...defaultConfig,
  format: "esm",
  outdir: "./dist/index.mjs",
});

esbuild.build({
  ...defaultConfig,
  format: "cjs",
  outdir: "./dist/index.js",
});
