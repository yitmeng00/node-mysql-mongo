import { Server } from "./index.js";
import dotenv from "dotenv";

dotenv.config();

const server = new Server();
const port = process.env.PORT || 8080;

const app = await server.init();

const httpServer = app.listen(port, () => {
    console.log(`Server up and running on port ${port}`);
});

process.on("SIGINT", function () {
    httpServer.close(() => {
        console.log("Server closed");
        process.exit(0);
    });
});
