import cors from "cors";
import express from "express";
import http from "http";

export class Server {
    constructor() {
        this.app = express();
        this.httpServer = http.createServer(this.app);
    }

    init = async () => {
        this.app.use(cors());
        this.app.use(express.json());

        this.app.get("/", (req, res) => {
            res.send("Hello, World!");
        });

        return this.httpServer;
    };
}
