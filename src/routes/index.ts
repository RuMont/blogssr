import { Request, Response } from "express";

import { IRoute } from "../interfaces/IRoute";

import { MainController } from "../controllers/MainController";

export const routes: Array<IRoute> = [
    {
        url: '/',
        method: "GET",
        callback: (req: Request, res: Response) => MainController.index(req, res)
    },
    {
        url: '/introduccion-a-la-programacion',
        method: 'GET',
        callback: (req: Request, res: Response) => MainController.intro(req, res)
    },
    {
        url: '/interfaz-de-visual-studio',
        method: 'GET',
        callback: (req: Request, res: Response) => MainController.visualStudioUI(req, res)
    },
    {
        url: '/variables-y-constantes',
        method: 'GET',
        callback: (req: Request, res: Response) => MainController.varsAndConsts(req, res)
    },
    {
        url: '/tipos',
        method: 'GET',
        callback: (req: Request, res: Response) => MainController.types(req, res)
    },
    {
        url: '/funciones',
        method: 'GET',
        callback: (req: Request, res: Response) => MainController.functions(req, res)
    },
    {
        url: '/clases',
        method: 'GET',
        callback: (req: Request, res: Response) => MainController.classes(req, res)
    }
]