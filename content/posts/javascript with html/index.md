---
title: "How to link JavaScript to HTML"
date: "2023-04-24"
template: "post"
draft: false
slug: "/posts/how-to-link-javascript-with-html"
category: "linking"
tags:
  - "JavaScript"
  - "HTML"
description: "Discover the top JavaScript frameworks ranked by GitHub stars, including React, Vue, Angular, and more"
---

HTML and JavaScript are two essential languages for web development. HTML is used to structure and organize web content, while JavaScript is a programming language that enables interactivity and dynamic functionality in web pages.

When HTML and JavaScript are used together, they can create a powerful and dynamic user experience that goes beyond static web pages. By incorporating JavaScript into HTML, developers can create web pages that respond to user input, provide real-time feedback, and dynamically update content without the need for page refreshes.

In this article, we'll explore the steps you need to follow to link external JavaScript to HTML and write JavaScript within your HTML file.

## Linking JavaScript to HTML

Before we dive into the specifics of how to link JavaScript to HTML, let's take a moment to understand what we mean by "linking" in this context. When we talk about linking JavaScript to HTML, we're essentially talking about connecting two separate files so that they work together seamlessly. In this case, the two files are your HTML document and your JavaScript file.

To link JavaScript to HTML, you'll need to follow these steps:

- Create a new JavaScript file. Start by creating a new file with a `.js` extension in your preferred code editor. This will be the file that contains your JavaScript code.

- Write your JavaScript code. For example, you might create a simple function that displays an alert message when a button is clicked:

```javascript
function displayAlert() {
  alert("Hello, world!");
}
```

- Save the JavaScript file.

- Add a `script` tag to your HTML document to link it to your JavaScript file. This tells the browser to load and execute the JavaScript file you've created.

Here's an example of what your HTML code might look like with a `script` tag:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Web Page</title>
  </head>
  <body>
    <h1>Welcome to My Web Page</h1>
    <button onclick="displayAlert()">Click me!</button>
    <script src="myscript.js"></script>
  </body>
</html>
```

In this example, we've added a `script` tag just before the closing `</body>` tag. We've also included the src attribute to specify the location of our JavaScript file. In this case, our JavaScript file is called _myscript.js_ and is located in the same directory as our HTML file.

Once you've linked your JavaScript file to your HTML document, you should test your code to make sure it works as expected.

In this case, if you load your HTML file in a browser and click the **Click me!** button, you should see an alert message that says **Hello, world!**

## Writing JavaScript within HTML

In some cases, you may want to include small snippets of JavaScript code directly in your HTML file. This can be useful for adding simple interactivity to your web page without having to create a separate JavaScript file. Let's learn this with an example:

Following is a simple function that changes the text of a paragraph when a button is clicked:

```javascript
function changeText() {
  document.getElementById("my-paragraph").innerHTML = "New text!";
}
```

Now, wrap your JavaScript function within a `<script>` tag and put it in the HTML document. Here's an example:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Web Page</title>
    <script>
      function changeText() {
        document.getElementById("my-paragraph").innerHTML = "New text!";
      }
    </script>
  </head>
  <body>
    <h1>Welcome to My Web Page</h1>

    <p id="my-paragraph">This is some text.</p>

    <button onclick="changeText()">Click me!</button>
  </body>
</html>
```

In this example, we've added our JavaScript code inside a `<script>` tag in the `<head>` section of our HTML document. We've also added a button that calls the `changeText()` function when clicked.

Now load your HTML file in a browser and click the **Click me!** button, you should see the text in the paragraph change to **New text!**

## Conclusion

Writing JS within HTML and linking JavaScript to HTML are one of the basic pillars of web development. In this article, we've explored both. By following the above told steps, you can create powerful and interactive web pages that respond to user input and provide a seamless user experience.

It's also important to keep up to date with the latest trends and technologies in web development, including new JavaScript features, browser compatibility issues, and security considerations. By staying informed and continuing to learn and grow as a developer, you can ensure that your web projects are both functional and effective.

_Happy Coding!_
