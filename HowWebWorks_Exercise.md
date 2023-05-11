# How Web Works Exercise

## Part One: Solidify Terminology

> - What is HTTP?

    HTTP stands for Hypertext Transfer Protocol. It is an application-layer protocol that enables the communication and transfer of data over the internet. HTTP is the foundation of data communication for the World Wide Web.

> - What is a URL?

    A URL (Uniform Resource Locator) is a reference or address used to locate resources on the internet. It is the standard way to specify the location of a web page, file, or any other resource that can be accessed through a network.

> - What is DNS?

    DNS stands for Domain Name System. It is a decentralized hierarchical naming system that translates human-readable domain names into IP addresses, which are numerical identifiers used by computers to communicate over networks.

> - What is a query string?

    A query string is a component of a URL (Uniform Resource Locator) that allows data to be passed to a web server as part of a request. It is commonly used to send parameters or additional information to a web application or API.

> - What are two HTTP verbs and how are they different?

    Two commonly used HTTP verbs are GET and POST. These verbs indicate the intended action to be performed on a resource identified by a URL. GET is used to retrieve data or resources from a server. It is a safe and idempotent method, meaning that it should not modify the server's state or have any side effects. POST is used to submit data to be processed by the server, typically resulting in the creation or modification of a resource on the server. It is not idempotent, meaning that multiple identical POST requests may have different effects each time.

> - What is an HTTP request?

    An HTTP request is a message sent by a client (usually a web browser or an application) to a server, requesting a specific action to be performed. It is a fundamental component of the Hypertext Transfer Protocol (HTTP), which governs communication between clients and servers on the web.

> - What is an HTTP response?

    An HTTP response is a message sent by a server to a client in response to an HTTP request. It contains the requested resource, along with other information and status codes to provide feedback on the outcome of the request. When a client sends an HTTP request to a server, the server processes the request and generates an HTTP response, which is then sent back to the client.

> - What is an HTTP header? Give a couple examples of request and response headers you have seen.

    HTTP headers are additional pieces of information sent along with an HTTP request or response. They provide metadata about the request or response, enabling clients and servers to exchange information, control behavior, and convey specific instructions or requirements. Headers consist of key-value pairs separated by a colon (:).

    Here are a couple of examples of commonly seen request and response headers:

    User-Agent: The User-Agent header provides information about the client making the request, typically indicating the web browser or application name and version.

    Accept: The Accept header specifies the content types that the client is willing to accept in the response. It helps the server understand the preferred data format for the client.

    Response Headers:

    Content-Type: The Content-Type header indicates the media type of the response body. It informs the client about the format of the data being sent.

    Cache-Control: The Cache-Control header defines caching directives to control how the response should be cached by the client or intermediate caches. It specifies caching behaviors such as expiration time, validation, and privacy.

> - What are the processes that happen when you type “<http://somesite.com/some/page.html”> into a browser?

    1. DNS Resolution: The browser first needs to resolve the domain name "somesite.com" to an IP address. It sends a DNS (Domain Name System) request to a DNS resolver or uses the cached DNS response if available. The resolver resolves the domain name to the corresponding IP address.

    2. TCP Connection: Once the IP address is obtained, the browser establishes a TCP (Transmission Control Protocol) connection with the web server hosting the site. It initiates a three-way handshake to establish the connection.

    3. HTTP Request: Once the TCP connection is established, the browser sends an HTTP GET request to the server for the specific resource "some/page.html". The request includes the HTTP method (GET), the requested resource path, and other headers, such as User-Agent, Accept, and Referer.

    4. Server Processing: The web server receives the HTTP request and processes it. It identifies the requested resource based on the provided URL and any additional parameters, headers, or cookies. The server may perform server-side operations, fetch data from databases, or execute scripts to generate the response.

    5. HTTP Response: The web server generates an HTTP response containing the requested resource, along with headers and a status code. The response includes a status line (HTTP version, status code, and description), headers (e.g., Content-Type, Content-Length), and the response body (the actual content of the requested page).

    6. Data Transfer: The server sends the HTTP response back to the browser over the established TCP connection. The response is broken into smaller packets and transmitted over the network.

    7. Rendering: The browser receives the response and begins processing it. If the response contains HTML, the browser parses the HTML document, retrieves additional resources (CSS, JavaScript, images) referenced within the HTML, and starts rendering the page structure.

    8. Resource Retrieval: As the browser encounters external resources (CSS, JavaScript, images, etc.) in the HTML, it sends additional HTTP requests to the server to fetch those resources. The process continues for each resource, and the browser starts rendering them as they arrive.

    9. Page Rendering: Once all the resources are retrieved and processed, the browser combines them and completes the rendering of the web page. The page becomes interactive, and any embedded scripts are executed.

## What is a URL?

> - Using curl, make a GET request to the icanhazdadjoke.com API to find all jokes involving the word “pirate”.

    curl -H "Accept: application/json" "https://icanhazdadjoke.com/search?term=pirate"

> - Use dig to find what the IP address is for icanhazdadjoke.com

    dig +short icanhazdadjoke.com

> - Make a simple web page and serve it using python3 -m http.server. Visit the page in a browser.

     mkdir `folder name` && cd `folder name`
     touch index.html
     python3 -m http.server
     Ctrl+c
