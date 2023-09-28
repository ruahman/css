import postcssImport from "postcss-import";
import autoprefixer from "autoprefixer";
import postcssPresetEnv from "postcss-preset-env";
import postcssNesting from "postcss-nesting";

export default {
  plugins: [postcssImport, autoprefixer, postcssPresetEnv, postcssNesting],
};
