---
title: "How to run JavaScript in Visual Studio Code?"
date: "2023-04-12"
template: "post"
draft: false
slug: "/posts/how-to-run-javascript-in-visual-studio-code"
category: "javascript"
tags:
  - "Visual Studio Code"
  - "JavaScript"
  - "Programming"
  - "VS Code"

description: ""
---

**TLDR**: *This article guides you through running and debugging JavaScript in Visual Studio Code (VSCode). We cover installing Visual Studio Code, Node.js, and the Code Runner extension, as well as creating, running, and debugging JavaScript files. By following this tutorial, you'll be able to develop JavaScript projects more efficiently in VSCode.*

In this article, we will explore how to run JavaScript in [Visual Studio Code](https://code.visualstudio.com/) (VSCode), a powerful and versatile code editor developed by Microsoft.

JavaScript is a popular programming language for web development, and VSCode provides excellent support for it, including features such as syntax highlighting, code completion, and debugging.

By the end of this tutorial, you will be able to run and debug JavaScript code in Visual Studio Code efficiently.

## Prerequisites

Before we begin, ensure that you have the following installed on your system:

- Visual Studio Code
- Node.js

If you don't have these installed, don't worry – we will cover the installation process in the next section.

## Installation and Configuration

### 1. Installing Visual Studio Code

To install Visual Studio Code, head to the official website at https://code.visualstudio.com/ and download the appropriate version for your operating system. Follow the installation prompts and complete the setup.

### 2. Installing Node.js

Node.js is an open-source, cross-platform runtime environment that allows you to run JavaScript outside of a web browser.

To install Node.js, visit the official website at https://nodejs.org/ and download the recommended version for your operating system. Run the installer and follow the on-screen instructions.

### 3. Installing Code Runner Extension

[Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) is a popular extension for VSCode that allows you to run code snippets or code files in multiple programming languages, including JavaScript. To install Code Runner, follow these steps:

- Open Visual Studio Code.

- Click on the Extensions view icon on the Sidebar or press Ctrl+Shift+X.

- In the Extensions search bar, type "Code Runner" and press Enter.

- Find the Code Runner extension by Jun Han and click the Install button(or install by the above link).

- Once the installation is complete, you will see a "Run Code" button in the top-right corner of the VSCode window.

### 4. Running JavaScript in Visual Studio Code

#### 1. Creating a JavaScript File

To create a new JavaScript file in Visual Studio Code, follow these steps:

- Open Visual Studio Code.

- Click on the File menu and select New File or press Ctrl+N.

- Save the file with a .js extension, e.g., example.js, by clicking on the File menu and selecting Save As or pressing Ctrl+Shift+S.
Now you can write your JavaScript code in the newly created file.

#### 2. Running the JavaScript File

Once you have written your JavaScript code, you can run it using the Code Runner extension. To do this, follow these steps:

- Open the JavaScript file in Visual Studio Code.

- Click the "Run Code" button in the top-right corner of the window or press Ctrl+Alt+N.

- The output of your code will be displayed in the Output panel at the bottom of the window.

### 5. Debugging JavaScript in Visual Studio Code

Visual Studio Code also provides a powerful debugger for JavaScript, which can be very useful for finding and fixing errors in your code. In this section, we will cover how to set up and use the debugger for JavaScript in Visual Studio Code.

#### 1. Setting up the Debugger

To set up the debugger for your JavaScript project, follow these steps:

- Open your JavaScript file in Visual Studio Code.

- Click on the Run view icon in the Sidebar or press Ctrl+Shift+D.

- In the Run view, click on the "create a launch.json file" link.

- In the "Select Environment" dropdown menu, choose "Node.js".

- Save the generated launch.json file in the .vscode folder of your project.

This will create a new configuration file called launch.json with the necessary settings for debugging JavaScript in Visual Studio Code using Node.js.

#### 2. Adding Breakpoints and Inspecting Variables

Now that the debugger is set up, you can add breakpoints to your code to pause its execution and inspect the values of variables at specific points.

To add a breakpoint, follow these steps:

- Open your JavaScript file in Visual Studio Code.

- Click in the left margin next to the line number where you want to add a breakpoint. A red dot will appear, indicating the breakpoint.

To start debugging, follow these steps:

1. Click on the Run view icon in the Sidebar or press Ctrl+Shift+D.

2. Click the green "Run" button or press F5.

The debugger will start, and your code will execute until it reaches the breakpoint. At this point, the debugger will pause, and you can inspect the values of variables in the "Variables" section of the Run view.

You can also use the debugging controls in the top of the window to step through your code, resume execution, or stop debugging. The most commonly used debugging controls are:

- **Step Over (F10)**: Executes the current line of code and moves to the next one.

- **Step Into (F11)**: Steps into the function called on the current line of code.

- **Step Out (Shift+F11)**: Steps out of the current function and back to the calling line of code.

- **Continue (F5)**: Resumes execution of the code until the next breakpoint or until the program ends.

- **Stop (Shift+F5)**: Stops the debugger and terminates the running process.

## Conclusion

In this article, we have discussed how to run JavaScript in Visual Studio Code and covered the installation and configuration of Visual Studio Code, Node.js, and the Code Runner extension. We also explored how to create, run, and debug JavaScript files in Visual Studio Code.

If you have sincerely followed this tutorial, you should now be able to run and debug JavaScript code efficiently in Visual Studio Code, allowing you to develop your projects faster and with fewer errors.

*Happy coding!*





