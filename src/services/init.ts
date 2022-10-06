import { Server } from '../server';

export class Init {
    private server?: Server;

    /**
     * Starts the app
     */
    constructor() {
        this.server = new Server(0);
        this.server?.listen();
    }

    stop() {
        this.server?.shutdown();
    }
}