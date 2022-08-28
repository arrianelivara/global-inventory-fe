import { authPaths } from "./auth.path";
import { inventoryPaths } from "./inventory.path";

const preparePaths = ({ prefix, paths = {} }) => {
  let newPaths = {};

  for (const [k, path] of Object.entries(paths)) {
    if (typeof path === "function") {
      newPaths[k] = (id) => `/${prefix}/${path(id)}`.replace(/\/+/g, "/");
    } else if (path) {
      newPaths[k] = `/${prefix}/${path}`.replace(/\/+/g, "/");
    } else {
      newPaths[k] = `/${prefix}`.replace(/\/+/g, "/");
    }
  }

  newPaths[prefix.toString().toUpperCase()] = `/${prefix}`;
  return newPaths;
};

const Path = {
  ...preparePaths({ prefix: "auth", paths: authPaths }),
  ...preparePaths({ prefix: "inventory", paths: inventoryPaths }),
  SLASH: "/",
};

export default Path;
