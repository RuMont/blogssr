"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importStar(require("express"));
const path_1 = __importDefault(require("path"));
const local_1 = require("./helpers/local");
class Server {
    constructor(port) {
        this.port = port;
        this.express = (0, express_1.default)();
        this.express.use((0, express_1.json)());
        this.express.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
        const router = (0, express_1.Router)();
        this.express.use(router);
        (0, local_1.registerRoutes)(router);
        // 404 handler
        this.express.use((req, res) => {
            res.status(404).sendFile((0, local_1.getView)('404'));
        });
    }
    /**
     * Initializes the http server
     */
    listen() {
        this.serverInstance = this.express.listen(this.port, () => __awaiter(this, void 0, void 0, function* () {
            console.log(`Server running on http://localhost:${this.port}`);
        }));
    }
    /**
     * Shutdowns the server process
     */
    shutdown() {
        if (this.serverInstance) {
            this.serverInstance.close(err => err && console.log(err.message));
        }
    }
}
exports.Server = Server;
