// Importer det indbyggede Node.js 'http' module.
import http from "node:http";
import { users } from "./data/users.js";
import { posts } from "./data/posts.js";

// Her opretter vi en HTTP-server ved at bruge 'createServer' funktionen.
// Denne funktion tager en såkaldt 'callback' funktion, der bliver kaldt, når der anmodes om en side.

const app = http.createServer((request, response) => {
    // ROUTE: "/" - GET
    if (request.url === "/" && request.method === "GET") {
        // Sæt statuskode og overskrift for responsen
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/plain");
        // Send besked som response
        response.end("Working with HTTP Module and routing");
    }
    // ROUTE: "/users" - GET
    else if (request.url === "/users" && request.method === "GET") {
        // Sæt statuskode og overskrift for responsen
        response.statusCode = 200;
        response.setHeader("Content-Type", "application/json");
        // Send JSON som response
        response.end(JSON.stringify(users));
    }
    // ROUTE: "/posts" - GET
    else if (request.url === "/posts" && request.method === "GET") {
        // Sæt statuskode og overskrift for responsen
        response.statusCode = 200;
        response.setHeader("Content-Type", "application/json");
        // Send JSON som response
        response.end(JSON.stringify(posts));
    }
});

// Her definerer vi portnummeret som serveren skal lytte på, på localhost
const port = 3000;

// Endelig starter vi serveren ved at kalde 'listen' funktionen på server-objektet.
app.listen(port, () => {
    // Når serveren er startet, viser vi en besked i terminalen.
    console.log(`Serveren kører på http://localhost:${port}`);
});
