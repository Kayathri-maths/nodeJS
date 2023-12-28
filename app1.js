//1)Explain the nodejs event driven architecture.
//The key concept in event-driven architecture is the event loop, which is a mechanism for managing the flow of events between components.
// In an event-driven system, the event loop is responsible for distributing events to the appropriate components and ensuring that they're processed in the correct order.

//2)How can it basically scale to handle 1000 of requests a sec. What helps node JS even though it is single threaded?
// Node.js achieves scalability through its event-driven, non-blocking I/O model, efficient event loop, and the ability to run multiple processes.
// This allows it to handle a large number of concurrent connections and requests, making it suitable for high-performance applications with thousands of requests per second.

//3)What does process.exit do?

//The process. exit() method is used to end the process which is running at the same time with an exit code in NodeJS.

//4)What does req.url , req.header and req.method contain?

//req.url:
// Contains the path and query parameters of the requested URL.

// req.headers:
// Holds information about the request, like the type of browser being used.

// req.method:
// Indicates the type of request, such as GET or POST.

const http=require('http');

const server= http.createServer( (req,res) => {
    console.log(req.url,req.method,req.headers);
     res.setHeader('Content-Type','text/html');
     res.write('<html>');
     res.write('<head><title>My First Page</title></head>');
     res.write('<body><h1>Welcome to my Node Js project</h1></body>');
     res.write('</html>');
     

     const url=req.url;

     if(url==='/home'){
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1> Welcome home</h1></body>');
        res.write('</html>');
      
     }

     
     if(url==='/node'){
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1> Welcome to my Node Js project</h1></body>');
        res.write('</html>');
        
     }

     
     if(url==='/about'){
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1> Welcome to About Us page</h1></body>');
        res.write('</html>');
        res.end();
     }
})


server.listen(3000);