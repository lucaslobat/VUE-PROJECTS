import { config, getJson } from "serpapi";

config.api_key = "5572b53c08aefc7afb90329d683c97766daa7b5ba794571918e807fa0f93494c";
config.timeout = 60000;

console.log(await getJson({ engine: "google", q: "coffee" })); // uses the API key defined in the config