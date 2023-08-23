// Importer det indbyggede Node.js 'http' module.
import http from "node:http";
import fs from "fs/promises";

// Her opretter vi en HTTP-server ved at bruge 'createServer' funktionen.
// Denne funktion tager en såkaldt 'callback' funktion, der bliver kaldt, når der anmodes om en side.

const app = http.createServer(async (request, response) => {
    // ROUTE: "/" - GET
    if (request.url === "/" && request.method === "GET") {
        const folderPath = "./data";

        console.log(await fs.readdir(folderPath));

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
        const json = await fs.readFile("data/posts.json");
        // Send JSON som response
        response.end(json);
    }

    // ROUTE: "/users" - POST
    else if (request.url === "/users" && request.method === "POST") {
        const user = {
            id: new Date().getTime(),
            image: "https://share.cederdorff.com/images/petl.jpg",
            mail: "tester@kea.dk",
            name: "Tester User",
            title: "Senior Tester"
        };
        // Læs fra JSON
        const json = await fs.readFile("data/users.json");
        console.log(json);
        // Parse til JavaScript
        const users = JSON.parse(json);
        console.log(users);
        // Tilføj "user" til "users"
        users.push(user);
        // Konverter users til JSON igen
        const usersJSON = JSON.stringify(users);
        // Skriv til JSON-fil
        await fs.writeFile("data/users.json", usersJSON);
        // sæt statuskode og header
        response.statusCode = 200;
        response.setHeader("Content-Type", "application/json");
        // send users
        response.end(usersJSON);
    }
});

// Her definerer vi portnummeret som serveren skal lytte på, på localhost
const port = 3000;

// Endelig starter vi serveren ved at kalde 'listen' funktionen på server-objektet.
app.listen(port, () => {
    // Når serveren er startet, viser vi en besked i terminalen.
    console.log(`Serveren kører på http://localhost:${port}`);
});

async function getRequestData(request) {
    return new Promise((resolve, reject) => {
        let body = "";
        req.on("data", chunk => (body += chunk));
        req.on("end", () => resolve(body));
        req.on("error", reject);
    });
}
