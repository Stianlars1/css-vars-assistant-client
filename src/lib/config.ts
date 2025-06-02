import { IS_DEV_MODE } from "@/lib/constants";

export const APP_NAME = "CSS Variables Assistant";
export const HOST = IS_DEV_MODE
  ? "http://localhost:3000"
  : "https://www.css-variables-assistant.dev";
export const CURRENT_VERSION = "1.4.0";
