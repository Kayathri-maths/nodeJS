//1)Explain how does the internet work in your own words.

// 1.User/Client:

// The process starts with a user or client wanting to access a webpage.

//2. http://my-page.com:

// The user/client enters the URL (http://my-page.com) into their browser.

// 3.Domain Lookup (DNS):

// Before sending the request, the browser performs a Domain Name System (DNS) lookup to find the IP address associated with "my-page.com."

// 4.Request:

// The browser sends a request to the server associated with the IP address obtained from the DNS lookup.

// 5.Server:

// The server receives the request and processes it.

//6. Response:

// The server sends back a response, typically containing the requested webpage or information.

// Then, the user's browser receives the response and displays the webpage or content.


//2)What are the core modules of node js?
// Core Modules:
//    Node.js has many built-in modules that are part of the platform and come with Node.js installation. 
//    These modules can be loaded into the program by using the required function.

//3) Explain the use of each one of them in detail.

//  http  --> Launch a server, send requests
//  https --> Launch a SSL server
//  fs    --> used to handle file system
//  path  --> To handle file paths
//  os    --> provides information about the operating system

//4) What are relative path and absolute path? How to define them?

// Relative Path:

// A relative path is specified with respect to the current working directory. It describes the location of a file or directory in relation to your current position in the file system.
// Example: If your current working directory is `/home/user/` and you want to refer to a file in the same directory, you would use a relative path like `./myfile.txt`.
// The `.`represents the current directory.

// Absolute Path:

// An absolute path provides the full path from the root directory to the file or directory. It specifies the exact location of a file or directory in the file system hierarchy.
// Example: An absolute path might look like `/home/user/documents/myfile.txt`, indicating the full path from the root directory.

//5)What does createServer do?

// the createServer function creates an HTTP server,
// and the provided callback function defines how the server responds to incoming requests.

//6)What are anonymous functions?

//       A function without name  is known as anonymous function

//7) What do you think server.listens exactly do?Why do we need it?

// `server.listen` is a crucial step in running a Node.js server.
// It specifies the port and optionally the hostname for the server to listen on, allowing it to handle incoming HTTP requests from clients.
// Without this step, your server would be created but wouldn't actively serve incoming requests.

//8)

const http =require('http');
const server =http.createServer( () => {
    console.log("Kayathri");
})

server.listen(4000);
