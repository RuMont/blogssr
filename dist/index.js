"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const init_1 = require("./src/services/init");
try {
    new init_1.Init();
}
catch (err) {
    console.log(err);
    process.exit(1);
}
process.on('uncaughtException', err => {
    console.log('uncaughtException', err);
    process.exit(1);
});
