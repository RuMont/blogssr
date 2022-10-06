"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainController = void 0;
const Controller_1 = require("../classes/Controller");
const local_1 = require("../helpers/local");
const markdownParser_1 = require("../helpers/markdownParser");
class MainController extends Controller_1.Controller {
    constructor() {
        super();
    }
    static index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.sendFile((0, local_1.getView)('index'));
        });
    }
    static intro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = new markdownParser_1.HTMLed((0, local_1.getPost)('introduccion-a-la-programacion-e-instalacion'));
            return res.sendFile(yield post.generateView('introduccion-a-la-programacion-e-instalacion'));
        });
    }
    static visualStudioUI(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = new markdownParser_1.HTMLed((0, local_1.getPost)('interfaz-de-visual-studio'));
            return res.sendFile(yield post.generateView('interfaz-de-visual-studio'));
        });
    }
    static varsAndConsts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = new markdownParser_1.HTMLed((0, local_1.getPost)('variables-y-constantes'));
            return res.sendFile(yield post.generateView('variables-y-constantes'));
        });
    }
    static types(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = new markdownParser_1.HTMLed((0, local_1.getPost)('tipos'));
            return res.sendFile(yield post.generateView('tipos'));
        });
    }
    static functions(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = new markdownParser_1.HTMLed((0, local_1.getPost)('funciones'));
            return res.sendFile(yield post.generateView('funciones'));
        });
    }
    static classes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = new markdownParser_1.HTMLed((0, local_1.getPost)('clases'));
            return res.sendFile(yield post.generateView('clases'));
        });
    }
}
exports.MainController = MainController;
