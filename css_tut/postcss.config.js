import postcssImport from "postcss-import";
import autoprefixer from "autoprefixer";
import postcssPresetEnv from "postcss-preset-env";
import tailwindcssNesting from "@tailwindcss/nesting";
import postcssNesting from "postcss-nesting";
import tailwindcss from "tailwindcss";

export default {
  plugins: [
    postcssImport,
    autoprefixer,
    postcssPresetEnv,
    tailwindcssNesting(postcssNesting),
    tailwindcss,
  ],
};
