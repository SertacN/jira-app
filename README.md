<h1>Jira App Clon</h1>

<p>In this application, I created a file named 'db.json' and ran it as a JSON virtual server. I used this virtual server as the backend, where I can send GET, POST, DELETE, and PUT requests to manage the created tasks.</p>

<h3>To run the application:</h3>

- Run the React application using the command `npm run dev` with Vite.
- Start the virtual JSON server using `json-server --watch data/db.json` .
<p>Note: If the server is not running, it's not possible to create new tasks or view previously created tasks. Remember that it operates on the logic of a backend. It fetches data from the server (through RESTful API) and provides a usage example on the frontend side.</p>
<h3>Used React with Vite</h3>

<h3>What was used:</h3>

- React Hook: useState, useEffect, useContext
- Axios
- JSON Server
- Separate Operator
- Ternary Operator
- Javascript Map and Filter

<h3>Components:</h3>

- TaskAddArea.jsx
- TaskItem.jsx
- TaskList.jsx

<h3>Functions:</h3>

- Create new task from Task form
- Added Tasks in task area
- Can delete and edit task
- Data keep in db.json

<h3>CSS:</h3>
<p>
Custom App.css, index.css
</p>

https://github.com/SertacN
