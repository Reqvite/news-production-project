import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import { BuildOptions } from "config/build/types/config";

export function buildPlugins({ paths }: BuildOptions): WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin(),
  ];
}
