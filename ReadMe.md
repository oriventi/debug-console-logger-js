# Debug Console Logger Js
This repository provides a basic setup to capture `console.log` statements from a React application and redirect them to a Node.js server. This can be particularly useful for debugging, as it allows you to view logs in the Visual Studio Code Debug Console instead of the browser's developer tools.

## Project Structure
- `.vscode/launch.json`: VS Code configuration for starting the development servers.
- `logging.js`: JS File to intercept `console.log` calls in the React app and send them to the Node.js Server.
- `server.js`: node.js server to handle and log requests from the React app.

## Setup Instructions
1. **Install Node.js Dependencies**
```bash
npm install express cors
```
2. **Update your React App**
If your React app is not already in the project, ensure that your `logging.js` is imported at the entry point of your React app (src/index.js or equivalent):
```js
import './logging.js';
```

3. **Configure VS Code**
Ensure that your VS Code is set up with the provided `.vscode/launch.json`. This configuration will start your Node.js Logging Server

4. **React Build Folder**
Make sure your react static files are in the `dist` folder. Otherwise change all occurences in the server.js file

5. **Running the Project**
To start both servers (React and Node.js):
    - Press **`F5`** to start the logging server
    - Run `npm run dev` or similar for your React project 