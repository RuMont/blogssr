import { Marked } from "@ts-stack/markdown";
import { createReadStream } from "fs";
import { readFile, writeFile } from "fs/promises";
import * as readline from 'node:readline';
import { getView } from "./local";
import { IDict } from "../interfaces/IDict";
import { SITE_NAME } from "../config/constants";

export class HTMLed {

    private metadata: IDict<string> = {};
    private sanitizedText: string = "";

    constructor(public markdownFilePath: string) { }

    public get Metadata() {
        return this.metadata;
    }

    public get plainText() {
        return this.sanitizedText;
    }

    private set Metadata(data: IDict<string>) {
        this.metadata = data;
    }

    public async generateView(viewName: string) {
        const text = (await readFile(this.markdownFilePath)).toString();
        const lines = text.split('\n');
        let isMetadata = false;
        let sanitizedText: string[] = [];
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
        await this.saveMetadata();
        await writeFile(getView(viewName), `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/css/global.css" />
        <link rel="stylesheet" href="/libs/highlight/styles/atom-one-dark.min.css">
        <script src="/libs/highlight/highlight.min.js"></script>
        <script defer src="/js/basic.js"></script>
        <title>${SITE_NAME} | ${viewName}</title>
    </head>
    <body>
        <button type="button" onclick="history.back()" class="back">Volver</button>
    ${Object.entries(this.Metadata).length ? (
        `<header>
        ${Object.entries(this.Metadata).map(([key, value]) => {
            switch (key) {
                case 'title':
                    return "<h1>"+value+"</h1>\n";
                case 'description':
                    return "<span class='description'>"+value+"</span><br/>";
                case 'pubDate':
                    const time = new Date(value);
                    return '<span>'+time.toLocaleDateString("es-ES")+'</span><br/>';
                default:
                    break;
            }
        }).join('')}
    </header>`): ''}
        <main>
                ${Marked.parse(this.sanitizedText)}
        </main>
    </body>
</html>`);
        return getView(viewName);
    }

    private async saveMetadata(fileText: string = this.markdownFilePath): Promise<IDict<string>> {
        const fileStream = createReadStream(fileText);

        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });
        let metadata = {};
        let isMetadata = false;
        for await (const line of rl) {
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
                metadata = { ...metadata, [key]: value.replace(/"/g, "").trim() };
            }
        }
        this.Metadata = metadata;
        return Object.keys(metadata).length ? metadata : {};
    }
}