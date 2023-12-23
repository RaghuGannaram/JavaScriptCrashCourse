## JavaScript Data Types

### Number

-   In JavaScript, numbers are represented as double-precision 64-bit binary format IEEE 754 values (the same as "double" in languages like C and Java).
-   This gives a range of approximately 5.0 × 10^(-324) (minimum positive subnormal) to 1.7976931348623157 × 10^(308) (maximum finite positive value).
-   The largest exact integral value that can be represented is 2^(53) - 1, or 9007199254740991, which is `Number.MAX_SAFE_INTEGER`.
-   For values beyond this, precision is lost, and operations on such numbers may not behave as expected.

### String

-   Strings in JavaScript are UTF-16 encoded.
-   The maximum length of a string is dependent on the JavaScript engine and available memory.
-   In many browsers, the practical limit is around 2^(28) to 2^(30) elements, which is in the range of 268,435,456 to 1,073,741,824 UTF-16 code units.

### Array

-   The maximum length of an array is constrained by 2^(32) - 1, or 4294967295, due to the way arrays are implemented.
-   This is defined as `Array.MAX_LENGTH`.

### Object

-   Objects in JavaScript don't have a predefined limit on the number of properties.
-   The limit is more about the available memory of the system.

### BigInt

-   `BigInt`, a newer addition to JavaScript, can represent integers with arbitrary precision.
-   There is no theoretical maximum size for `BigInt`.
-   The practical limit is determined by the memory of the system.

# Asynchronous Operations in JavaScript

## Browser JavaScript Environment

### Timers

-   Operations like `setTimeout`, `setInterval`, and `setImmediate` (in some environments).
-   Used for delaying functions or repeatedly executing them.

    ```javascript
    setTimeout(() => console.log("This runs after 1 second"), 1000);
    ```

### Promises and Async/Await

-   Modern way to handle asynchronous code.
-   Used with any of the above asynchronous operations for cleaner and more readable code.

    ```javascript
    async function fetchData() {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log(data);
    }
    fetchData();
    ```

### File Reading (File API)

-   Reading files from the local file system in web applications (e.g., drag-and-drop file uploads).

    ```javascript
    const input = document.querySelector('input[type="file"]');

    input.addEventListener("change", (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            console.log("File content:", e.target.result);
        };
        reader.readAsText(file);
    });
    ```

### HTTP Requests

-   AJAX requests using `XMLHttpRequest` or the `fetch` API.
-   Used for making asynchronous HTTP requests to servers.

    ```javascript
    fetch("https://api.example.com/data")
        .then((response) => response.json())
        .then((data) => console.log(data));
    ```

### IndexedDB/WebSQL

-   Asynchronous APIs for interacting with client-side databases.

    ```javascript
    // Example with IndexedDB
    var request = indexedDB.open("MyTestDatabase");

    request.onsuccess = function (event) {
        // Use event.target.result to do something with the database
    };
    ```

### Web Workers

-   Running scripts in background threads.
-   Used for computations that would otherwise block the UI.

    ```javascript
    const worker = new Worker("worker.js");

    worker.onmessage = function (event) {
        console.log("Message from Worker:", event.data);
    };
    ```

### Event Listeners

-   Responding to user interactions like clicks, keyboard events, etc.
-   The callbacks attached to these events are executed asynchronously.

    ```javascript
    document.getElementById("myButton").addEventListener("click", () => {
        console.log("Button clicked!");
    });
    ```

### Animations (requestAnimationFrame)

-   For smooth animations, allowing the browser to optimize.
    ```javascript
    function animate() {
        console.log("Animating...");
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
    ```

## Node.js Environment

### Timers

-   Similar to browser timers, including `setTimeout`, `setInterval`, and `setImmediate`.

    ```javascript
    setImmediate(() => {
        console.log("This runs immediately but after I/O events");
    });
    ```

### Promises and Async/Await

-   Similar to browser environment, for handling asynchronous operations more efficiently.

    ```javascript
    const fs = require("fs").promises;

    async function readFile() {
        const data = await fs.readFile("example.txt", "utf8");
        console.log(data);
    }
    readFile();
    ```

### File System Operations

-   Reading, writing, and other operations on the file system using modules like `fs`.
-   These operations are typically handled asynchronously to avoid blocking the event loop.

    ```javascript
    const fs = require("fs");

    fs.readFile("example.txt", "utf8", (err, data) => {
        if (err) throw err;
        console.log(data);
    });
    ```

### Network Requests

-   Making HTTP requests or handling HTTP(S) server requests.
-   Operations like `http.createServer` or libraries like `axios` for outbound requests.

    ```javascript
    const http = require("http");

    http.get("http://example.com", (res) => {
        // Handle the response
    });
    ```

### Database Operations

-   Interactions with databases, which are generally handled asynchronously (e.g., MongoDB, MySQL).

    ```javascript
    // MongoDB example
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        // Database operations
        db.close();
    });
    ```

### Streams and Buffers

-   Handling data streams, like reading from or writing to files, network communications, etc.

    ```javascript
    const fs = require("fs");
    const readStream = fs.createReadStream("file.txt");

    readStream.on("data", (chunk) => {
        console.log("New chunk received:", chunk);
    });
    ```

### Child Processes

-   Running external processes in Node.js, handling their execution asynchronously.

    ```javascript
    const { exec } = require("child_process");

    exec("ls", (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
    ```

### Custom Asynchronous Operations

-   Using libraries like `async` or creating custom event-driven asynchronous patterns.

    ```javascript
    function customAsyncOperation(callback) {
        setTimeout(() => {
            callback(null, "Result of custom operation");
        }, 1000);
    }
    customAsyncOperation((err, result) => {
        if (err) throw err;
        console.log(result);
    });
    ```
