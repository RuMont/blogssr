"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPost = exports.getView = exports.registerRoutes = void 0;
const process_1 = require("process");
const routes_1 = require("../routes");
const registerRoutes = (router) => {
    routes_1.routes.map(({ url, callback, method }) => {
        switch (method.toUpperCase()) {
            case "GET":
                return router.get(url, (req, res) => callback(req, res));
            case "POST":
                return router.post(url, (req, res) => callback(req, res));
            case "PUT":
                return router.put(url, (req, res) => callback(req, res));
            case "DELETE":
                return router.delete(url, (req, res) => callback(req, res));
            default:
                break;
        }
    });
};
exports.registerRoutes = registerRoutes;
/**
 * Returns the html view file path
 * @param string name of the html file (without .html)
 * @returns html file path from views/
 */
const getView = (string) => {
    return `${(0, process_1.cwd)()}/src/views/${string}.html`;
};
exports.getView = getView;
/**
 * Returns the post file path
 * @param string name of the markdown file
 * @returns markdown filepath inside data/posts
 */
const getPost = (string) => {
    return `${(0, process_1.cwd)()}/src/data/posts/${string}.md`;
};
exports.getPost = getPost;
