import { Router } from "express";
import { cwd } from "process";
import { routes } from "../routes";

export const registerRoutes = (router: Router) => {
    routes.map(({ url, callback, method }) => {
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

/**
 * Returns the html view file path
 * @param string name of the html file (without .html)
 * @returns html file path from views/
 */
export const getView = (string: string) => {
    return `${cwd()}/src/views/${string}.html`;
}

/**
 * Returns the post file path
 * @param string name of the markdown file
 * @returns markdown filepath inside data/posts
 */
export const getPost = (string: string) => {
    return `${cwd()}/src/data/posts/${string}.md`;
}