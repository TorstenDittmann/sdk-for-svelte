// rollup.config.js
import svelte from "rollup-plugin-svelte";
import sveld from "sveld";

export default {
  input: "src/index.js",
  output: {
    format: "es",
    file: "dist/index.mjs",
  },
  plugins: [svelte(), sveld({
      markdown: true
  })],
};