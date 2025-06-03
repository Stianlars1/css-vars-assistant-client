// src/lib/routes.ts
import { HOST } from "@/lib/config";

export const ROUTE_ROOT = "/";
export const ROUTE_CHANGELOG = "/changelog";
export const ROUTE_FEATURES = `${ROUTE_ROOT}#features`;
export const ROUTE_INSTALLATION = `${ROUTE_ROOT}#installation`;
export const ROUTE_SCREENSHOTS = `${ROUTE_ROOT}#screenshots`;

// Host urls
export const changelogUrl = `${HOST}/changelog`;

// External URLs - using real plugin data
export const JETBRAINS_MARKETPLACE_URL =
  "https://plugins.jetbrains.com/plugin/27392-css-variables-assistant";
export const GITHUB_REPO_URL =
  "https://github.com/stianlars1/css-vars-assistant";
export const GITHUB_ISSUES_URL =
  "https://github.com/stianlars1/css-vars-assistant/issues";
export const GITHUB_DOCS_URL =
  "https://github.com/stianlars1/css-vars-assistant#readme";
export const GITHUB_DISCUSSIONS_URL =
  "https://github.com/stianlars1/css-vars-assistant/discussions";
