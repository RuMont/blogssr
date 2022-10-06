import express, { json, Router } from "express";
import * as http from "http";
import path from "path";

import { getView, registerRoutes } from "./helpers/local";

export class Server {
    private express: express.Express;
    private port: number;
    private serverInstance?: http.Server;

    constructor(port: number) {
        this.port = port;
        this.express = express();
        this.express.use(json());
        this.express.use(express.static(path.join(__dirname, 'public')));

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
            console.log(`Server running on http://localhost:${this.port}`);
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