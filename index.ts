import { Husky, Output } from "husky-routing";

/*
    The Husky class is the entry point of the application.
    Here you can start the server and configure it.
*/
const app = new Husky({
    port: 3000,
    logging: {
        allowError: true,
        allowInfo: true,
        allowHTTP: false,
        allowWS: false
    }
});

/*
    You can add routers to the application by calling the use method on the Husky class.
    For best practices, you should create a separate file for each router.
*/
import indexRouter from "./routes/index.route";
app.use(indexRouter);


/*
    You can start the application by calling the start method.
    In addition, you can pass a callback function that will be called when the server is started.
*/
app.start({
    callback: (port) => {
        Output.info(`Server started on port ${port}`);
    },
});