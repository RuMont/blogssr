import express, { json, Router } from "express";
import * as http from "http";
import path from "path";

import { getView, registerRoutes } from "./helpers/local";

export class Server {
    private express: express.Express;
    private serverInstance?: http.Server;

    constructor(private port: number) {
        this.express = express();
        this.express.use(json());
        this.express.use(express.static(path.join(__dirname, 'public')));

        console.log(__dirname)

        const router = Router();
        this.express.use(router);
        registerRoutes(router);

        // 404 handler
        this.express.use((req, res) => {
            res.status(404).sendFile(getView('404'));
        });
    }

    /**
     * Initializes the http server
     */
    listen() {
        this.serverInstance = this.express.listen(this.port, async () => {
            console.log(`Server running on port ${(this.serverInstance!.address() as any).port}`);
        });
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