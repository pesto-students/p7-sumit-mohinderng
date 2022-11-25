# What is a Web Browser?

A web browser is an application software that lets you access information on the internet. It retrieves information from the web and displays
it on your device. The information is transferred using Hypertext Transfer Protocol.

The main functionality of a browser is to present the web resource you choose, by requesting it from the server and displaying it in the
browser window.The location of the resource is specified by the user using a URI.

# High Level omponents of a browser

1. The User Interface
2. The rendering Engine
3. Networking
4. UI Backend
5. JavaScript Interpreter
6. Data Storage

## 1. The User Interface

The User Interface is the visible part of the browser. This includes the address bar, back/forward button, bookmarking menu, etc. 

## 2. The Rendering Engine

 The Rendering Engine is responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.
 Different browsers use different rendering engines: Internet Explorer uses Trident, Firefox uses Gecko, Safari uses WebKit. Chrome and Opera use Blink.

 The rendering engine will start getting the contents of the required document from the networking layer.It will then start parsing the HTML document and convert elements to DOM nodes in a tree called the "content tree". The engine will parse the style data, both in external CSS files and in style elements. Styling information together with visual instructions in the HTML will be used to create another tree: the render tree.
 The render tree contains rectangles with visual attributes like color and dimensions. The rectangles are in the right order to be displayed on the screen.
 
![Alt text](../../../../../d:/Desktop%20New/Pesto%20Assignments/p7-sumit-mohinderng/Week-1/images/Flow%20Diagram.png)

 ## Parsers & Tree Construction
 Parsing means analyzing and converting a program into an internal format that a runtime environment can run. To render content browser has the HTML and CSS Parsers.

 - HTML Parser : The HTML Parser converts the page content to a DOM tree. DOM is Document Object Model. It is the object presentation of the HTML document and the interface of HTML elements to the outside world like JavaScript.

 When the browser reads the HTML code, whenever it encounters an HTML element like head, div, body, title, etc. it creates a node which is a JavaScript object. All elements are converted to Javascript object. Once the browser has converted the elements to node, it has to createa tree like structure of these node objects. The Browser needs to replicate the nested structure of HTML elements using the node objects it has created.

------------------HTML-----------------------
 <html>
 <head>
 <title>
 Assignment 1
 </title>
 </head>

 <body>
 <div>
 <h1>
 Submit Assignment
 </h1>
 <p>
 This is First Assignment.
 </p>
 </div>
 </body>
 </html>
------------------HTML-------------------------

For example - The DOM Tree for the above HTML looks like Fig 2.

![Alt text](../../../../../d:/Desktop%20New/Pesto%20Assignments/p7-sumit-mohinderng/Week-1/images/Dom%20Tree.png)

- CSS Parser : The CSS Parser converts the page content to CSSOM trees. We use CSS to style HTML elements. Using CSS Selectors we can target DOM elements and set a value to style  property such as background color, font-size, font-type, etc. CSSOM tree is constructed after the DOM tree is constructed. Each node in CSSOM tree contains CSS style information that will be applied to DOM elements that it targets. The CSSOM tree does not contain elements which do not get printed on the screen like <title>,<script>, <link>,etc.

------------------CSS---------------------------
html {
    padding: 0;
    margin: 0;
}

body {
    font-size: 14px;
}

div {
    width: 300px;
    height: 200px;
    color: black;
}

h1{
    color: green;
}
p {
    color: gray;
}
------------------CSS-----------------------------
For example - The DOM Tree for the above CSS looks like Fig 3.

![Alt text](../../../../../d:/Desktop%20New/Pesto%20Assignments/p7-sumit-mohinderng/Week-1/images/CSSOM%20Tree.png)

- Render Tree : Render tree is a tree constructed by combining DOM tree and CSSOM tree. The browser needs to calculate the layout of each visible element and paint them on screen. For that, the browser uses Render Tree.

 ## Script Processor and Order 
 Script Processor executes Javascript code to process an  event. Web is a synchronous model. The scripts are expected to be parsed and executed immediately when the parser reaches the <script> tag. 
 The parsing of the document stops until the script tag has been executed. If the script is external then the resource must first be fetched from the network - this is also done synchronously, and parsing halts until the resource is fetched. One can add the "defer" attribute to a script, in which case it will not halt document parsing and will execute after the document is parsed.


## Layout and Painting
The browser creates the layout of each individual Render Tree node. The layout consists of the size of each node in pixels and the position it will be printed on the screen. This process is called layout since the browser calculates the layout information of each node.

Since elements in the Render-Tree can overlap each other and they can have CSS properties that make them frequently change the look, position, or geometry (such as animations), the browser creates a layer for it.
Creating layers helps the browser efficiently perform painting operations throughout the lifecycle of a web page such as while scrolling or resizing the browser window. Having layers also help the browser correctly draw elements in the stacking order (along the z-axis) as they were intended by the developer.
Now that we have layers, we can combine them and draw them on the screen. But the browser does not draw all the layers in a single go. Each layer is drawn separately first.
Inside each layer, the browser fills the individual pixels for whatever visible property the element has such as border, background color, shadow, text, etc. This process is also called as rasterization. To increase performance, the browser may use different threads to perform rasterization.