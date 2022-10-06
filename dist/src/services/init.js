"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Init = void 0;
const server_1 = require("../server");
class Init {
    /**
     * Starts the app
     */
    constructor() {
        var _a;
        this.server = new server_1.Server(3000);
        (_a = this.server) === null || _a === void 0 ? void 0 : _a.listen();
    }
    stop() {
        var _a;
        (_a = this.server) === null || _a === void 0 ? void 0 : _a.shutdown();
    }
}
exports.Init = Init;
