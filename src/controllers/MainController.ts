import { Request, Response } from "express";
import { Controller } from "../classes/Controller";
import { getPost, getView } from "../helpers/local";
import { HTMLed } from "../helpers/markdownParser";

export class MainController extends Controller {

    constructor() {
        super()
    }

    public static async index(req: Request, res: Response) {
        return res.sendFile(getView('index'));
    }

    public static async intro(req: Request, res: Response) {
        const post = new HTMLed(getPost('introduccion-a-la-programacion-e-instalacion'));
        return res.sendFile(await post.generateView('introduccion-a-la-programacion-e-instalacion'));
    }

    public static async visualStudioUI(req: Request, res:Response) {
        const post = new HTMLed(getPost('interfaz-de-visual-studio'));
        return res.sendFile(await post.generateView('interfaz-de-visual-studio'));
    }

    public static async varsAndConsts(req: Request, res:Response) {
        const post = new HTMLed(getPost('variables-y-constantes'));
        return res.sendFile(await post.generateView('variables-y-constantes'));
    }

    public static async types(req: Request, res:Response) {
        const post = new HTMLed(getPost('tipos'));
        return res.sendFile(await post.generateView('tipos'));
    }

    public static async functions(req: Request, res:Response) {
        const post = new HTMLed(getPost('funciones'));
        return res.sendFile(await post.generateView('funciones'));
    }

    public static async classes(req: Request, res:Response) {
        const post = new HTMLed(getPost('clases'));
        return res.sendFile(await post.generateView('clases'));
    }
}