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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLed = void 0;
const markdown_1 = require("@ts-stack/markdown");
const fs_1 = require("fs");
const promises_1 = require("fs/promises");
const readline = __importStar(require("node:readline"));
const local_1 = require("./local");
const constants_1 = require("../config/constants");
class HTMLed {
    constructor(markdownFilePath) {
        this.markdownFilePath = markdownFilePath;
        this.metadata = {};
        this.sanitizedText = "";
    }
    get Metadata() {
        return this.metadata;
    }
    get plainText() {
        return this.sanitizedText;
    }
    set Metadata(data) {
        this.metadata = data;
    }
    generateView(viewName) {
        return __awaiter(this, void 0, void 0, function* () {
            const text = (yield (0, promises_1.readFile)(this.markdownFilePath)).toString();
            const lines = text.split('\n');
            let isMetadata = false;
            let sanitizedText = [];
            for (let i = 0; i < lines.length; i++) {
                if (lines[i].includes('---') && !isMetadata) {
                    isMetadata = true;
                    continue;
                }
                if (lines[i].includes('---') && isMetadata) {
                    isMetadata = false;
                    continue;
                }
                if (isMetadata) {
                    continue;
                }
                sanitizedText.push(lines[i]);
            }
            this.sanitizedText = sanitizedText.join('\n');
            yield this.saveMetadata();
            yield (0, promises_1.writeFile)((0, local_1.getView)(viewName), `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/css/global.css" />
        <link rel="stylesheet" href="/libs/highlight/styles/atom-one-dark.min.css">
        <script src="/libs/highlight/highlight.min.js"></script>
        <script defer src="/js/basic.js"></script>
        <title>${constants_1.SITE_NAME} | ${viewName}</title>
    </head>
    <body>
        <button type="button" onclick="history.back()" class="back">Volver</button>
    ${Object.entries(this.Metadata).length ? (`<header>
        ${Object.entries(this.Metadata).map(([key, value]) => {
                switch (key) {
                    case 'title':
                        return "<h1>" + value + "</h1>\n";
                    case 'description':
                        return "<span class='description'>" + value + "</span><br/>";
                    case 'pubDate':
                        const time = new Date(value);
                        return '<span>' + time.toLocaleDateString("es-ES") + '</span><br/>';
                    default:
                        break;
                }
            }).join('')}
    </header>`) : ''}
        <main>
                ${markdown_1.Marked.parse(this.sanitizedText)}
        </main>
    </body>
</html>`);
            return (0, local_1.getView)(viewName);
        });
    }
    saveMetadata(fileText = this.markdownFilePath) {
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function* () {
            const fileStream = (0, fs_1.createReadStream)(fileText);
            const rl = readline.createInterface({
                input: fileStream,
                crlfDelay: Infinity
            });
            let metadata = {};
            let isMetadata = false;
            try {
                for (var rl_1 = __asyncValues(rl), rl_1_1; rl_1_1 = yield rl_1.next(), !rl_1_1.done;) {
                    const line = rl_1_1.value;
                    if (line.includes('---') && !isMetadata) {
                        isMetadata = true;
                        continue;
                    }
                    if (line.includes('---') && isMetadata) {
                        isMetadata = false;
                        break;
                    }
                    if (isMetadata) {
                        const [key, value] = line.trim().split(':');
                        metadata = Object.assign(Object.assign({}, metadata), { [key]: value.replace(/"/g, "").trim() });
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (rl_1_1 && !rl_1_1.done && (_a = rl_1.return)) yield _a.call(rl_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.Metadata = metadata;
            return Object.keys(metadata).length ? metadata : {};
        });
    }
}
exports.HTMLed = HTMLed;
