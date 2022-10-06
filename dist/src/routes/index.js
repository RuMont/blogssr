"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const MainController_1 = require("../controllers/MainController");
exports.routes = [
    {
        url: '/',
        method: "GET",
        callback: (req, res) => MainController_1.MainController.index(req, res)
    },
    {
        url: '/introduccion-a-la-programacion',
        method: 'GET',
        callback: (req, res) => MainController_1.MainController.intro(req, res)
    },
    {
        url: '/interfaz-de-visual-studio',
        method: 'GET',
        callback: (req, res) => MainController_1.MainController.visualStudioUI(req, res)
    },
    {
        url: '/variables-y-constantes',
        method: 'GET',
        callback: (req, res) => MainController_1.MainController.varsAndConsts(req, res)
    },
    {
        url: '/tipos',
        method: 'GET',
        callback: (req, res) => MainController_1.MainController.types(req, res)
    },
    {
        url: '/funciones',
        method: 'GET',
        callback: (req, res) => MainController_1.MainController.functions(req, res)
    },
    {
        url: '/clases',
        method: 'GET',
        callback: (req, res) => MainController_1.MainController.classes(req, res)
    }
];
