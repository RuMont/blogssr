import { Server } from '../server';

export class Init {
    private server?: Server;

    /**
     * Starts the app
     */
    constructor() {
        this.server = new Server(3000);
        this.server?.listen();
    }

    stop() {
        this.server?.shutdown();
    }
}