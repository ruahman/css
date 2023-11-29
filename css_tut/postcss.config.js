import autoprefixer from "autoprefixer";
import postcssPresetEnv from "postcss-preset-env";
import postcssMixins from "postcss-mixins";
import postcssImport from "postcss-import";

// setup the plugins you want to use
export default {
  plugins: [
    autoprefixer, // auto prefex vender css rules
    postcssPresetEnv({ stage: 2 }), // add polyfills for modern css features
    postcssMixins, // allow mixins
    postcssImport, //  allow importing css files
  ],
};
