import { Router } from "husky-routing";

/*
    You can add router to the application by creating a new Router.
    The first parameter is the router path.
    The router supports function nesting.
*/
const router = new Router("/");

/*
    You can add routes to the router by calling the get method.
    The first parameter is the route path. Please note that this path is relative to the router path.
    The second parameter is the route handler.
    The route handler is a function that takes two parameters:
        - req: The request object.
        - params: The route parameters.
    The route handler must return a Response or a Promise<Response> object.
*/
router.get("/", (req) => {
    return new Response("Hello World!");
});

router.get("/name/:name", (req, params) => {
    return new Response(`Hello ${params.name}!`);
});

export default router;