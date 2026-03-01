/**
 * Applied Programming for AI Summary — inline markdown content.
 * Compiled from lecture slides and practical guides for the VU Applied Programming for AI course.
 */
export const appliedProgrammingSummary = `
# Applied Programming for AI -- Comprehensive Summary

This summary covers the core topics of the Applied Programming for AI course at VU Amsterdam: Git version control, Test-Driven Development (TDD), Web Communication and RESTful APIs, Flask web development, frontend basics (HTML, CSS, JavaScript), and project structure.

---

## 1. Git and Version Control

### 1.1 What Is Git?

- **Git** is a **distributed version control system** used for tracking code changes, collaboration, and backup
- Git is an **industry standard** -- an important skill in software engineering
- Open source code is often shared through **GitHub** (a platform that hosts Git repositories)
- Your Git history serves as a **journal of your work** -- cooperation and progress become clear through commit history
- Important: **Git is not the same as GitHub**. Git is the version control tool; GitHub is a hosting platform for Git repositories

### 1.2 Key Concepts

**Repository**
- A project folder managed by Git
- Tracks all changes to files over time
- Contains the entire history of the project
- Can be **local** (on your machine) or **remote** (on platforms like GitHub)
- Every team member will have a local repository of their own and one shared remote repository

**Commits**
- A snapshot of your files at a specific point in time
- A way to save your progress with a message describing the change
- Recorded history of what changed, who changed it, and when
- Think of it as "a save point in a video game -- you can always go back to it"

**File States in Git**

Files in a Git repository move through four states:

| State | Description |
|-------|-------------|
| **Untracked** | New file not yet tracked by Git |
| **Unmodified** | Tracked file with no changes since the last commit |
| **Modified** | Tracked file that has been edited |
| **Staged** | Modified file marked for the next commit |

The flow: Untracked -> (git add) -> Staged -> (git commit) -> Unmodified -> (edit file) -> Modified -> (git add) -> Staged

**Branches**
- A parallel version of your codebase
- Lets you work on features, fixes, or experiments without changing the main code
- Can be merged back into the main line when ready
- Each repository can have its own branches
- You will do most of your work in your personal branches
- Important: remote branches and your local branches are not the same

**Merging**
- The process of combining changes from one branch into another
- Typically done when a feature is ready to be added back to the main branch
- Git tries to auto-resolve differences, but sometimes you will need to help (merge conflicts)

### 1.3 Basic Git Commands

**Initial Setup**

    git config --global user.name "Your Name"
    git config --global user.email "Your Email"

**Creating a Repository**

    git init          # Turn a folder into a git tracked repository
    git clone [url]   # Copy a remote repository to your machine

**Adding and Committing**

    git add [files]             # Stage new files or modified files
    git commit -m "message"     # Create a new commit with a descriptive message

Commits always need a message. Write meaningful messages that describe the feature or bug you were working on.

**Pushing and Pulling**

    git push [remote] [branch]  # Update the remote branch with your local commits
    git fetch [remote]          # Download the state of the remote (does not change your files)
    git pull [remote] [branch]  # Merge the remote branch into your current branch

If you cloned your repository, the remote repository is called **origin**.

**Branch Commands**

    git branch [name]       # Create a branch with a certain name
    git switch [name]       # Switch to work in a certain branch
    git switch -c [name]    # Create AND switch to the branch
    git merge [branch]      # Merge the target branch into the current branch

**Other Useful Commands**

    git status      # Check the state of your files
    git log         # View commit history
    git diff        # See changes between commits or working directory

### 1.4 Project Branching Strategy

The recommended branch structure for your project:

- **main branch**: always contains a working version of the project
- **dev branch**: for the team to collaborate on releases to main
- **Personal remote branches**: for each team member
  - Push your work daily to your personal branch
  - You can have multiple personal branches for each feature

### 1.5 Essential Project Files

- **README.md**: introduction to the project plus installation instructions
- **requirements.txt**: lists all Python dependencies (generated with pip freeze > requirements.txt)
- **.gitignore**: specifies files and folders Git should ignore (e.g., virtual environments, compiled files, secrets)

### 1.6 Common Pitfalls

| Pitfall | Advice |
|---------|--------|
| **Working together on the same computer** | Fine, but note it in commit messages; make sure everyone also has personal contributions |
| **Meaningless commit messages** | Think of which feature or bug you were working on; do not commit everything in one go |
| **Committing to the wrong branch** | If still local, you can reset; if pushed to remote, make a new commit to revert the changes |

---

## 2. Test-Driven Development (TDD)

### 2.1 What Is TDD?

Test-Driven Development is a software development methodology where you write tests **before** writing the actual implementation code. The mantra of TDD is **"Red, Green, Refactor"**.

### 2.2 The Red-Green-Refactor Cycle

| Phase | Action |
|-------|--------|
| **RED** | Write a test that fails (because the feature does not exist yet) |
| **GREEN** | Write the minimum code needed to make the test pass |
| **REFACTOR** | Clean up and improve the code while ensuring all tests still pass |
| **REPEAT** | Start the cycle again for the next feature |

### 2.3 Why TDD Matters

- Many companies employ some form of TDD (often not as strict)
- It makes you **think about what you want to do before writing code** -- this is the most important skill
- Forces clear requirement analysis before implementation
- Produces a comprehensive test suite as a side effect
- Helps catch bugs early in development

### 2.4 From Requirements to Tests

The TDD process starts by analyzing a requirement and breaking it down into technical details that can be tested.

**Example: "The user needs to be able to log in"**

Questions to ask:
- Does this imply that users can create accounts?
- How do we know that the user is logged in?
- Should users be able to logout?

Technical implications to test:
1. Sending correct credentials will return an access token
2. Incorrect credentials will return an error
3. Missing credentials will return a different error
4. The access token enables access to protected routes
5. Requests without a token or with an invalid token are blocked
6. A request to log out with a valid token will disable the token

### 2.5 Pytest Fundamentals

**Pytest** is the recommended testing framework for Python in this course.

**Fixtures** -- reusable setup components for tests:

    import pytest
    import json

    @pytest.fixture
    def app():
        # Possible setup here
        app = create_app({'TESTING': True})
        yield app
        # Possible teardown here

    @pytest.fixture
    def client(app):
        return app.test_client()

    @pytest.fixture
    def test_user():
        return {
            'username': 'testuser',
            'password': 'testpass123'
        }

**Writing a Test Function:**

    def test_login_success(client, test_user):
        """Test successful login"""
        # First register the user
        client.post('/api/auth/register', json=test_user)

        # Then try to login
        response = client.post('/api/auth/login',
            json=test_user
        )

        assert response.status_code == 200
        data = json.loads(response.data)
        assert 'access_token' in data

### 2.6 TDD Workflow for the Project

The course requires a strict TDD approach for backend development:

1. **Implement the test(s)** for the specific feature
2. **Commit the test** once you finish the test definition
3. **Implement the desired feature** until all tests for that feature pass
4. **Refactor your code** to improve quality

### 2.7 Test Organization Best Practices

- Name test files with the prefix test_ (e.g., test_auth.py, test_routes.py)
- Name test functions with the prefix test_ (e.g., test_login_success)
- Use descriptive names that explain what is being tested
- Group related tests in the same file
- Use fixtures to avoid repetition and share setup between tests
- Test both the happy path (correct behavior) and edge cases (errors, missing data)
- Each test should be independent and not rely on the state left by another test

### 2.8 Common Assertions

    assert response.status_code == 200       # Check HTTP status
    assert response.status_code == 404       # Check not found
    assert 'key' in data                     # Check key exists
    assert data['name'] == 'Alice'           # Check exact value
    assert len(results) == 3                 # Check length
    assert isinstance(data, list)            # Check type

---

## 3. Web Communication and RESTful APIs

### 3.1 APIs (Application Programming Interfaces)

- An **API** is a set of rules and protocols that allow different software applications to communicate
- APIs can be **local** (within a system) or **remote** (across networks)
- They can be **language-specific** (e.g., Python APIs) or **platform-independent** (e.g., RESTful web APIs)

### 3.2 REST (Representational State Transfer)

REST is a loose set of rules with the following core principles:

| Principle | Description |
|-----------|-------------|
| **Client-Server Architecture** | Client and server are separate, decoupled systems that communicate over HTTP |
| **Stateless** | Every request contains all the information needed to process it; the server does not store session state between requests |
| **Uniform Interface** | Resources are accessed through URLs, and interactions use standard HTTP methods |

An API that adheres to these rules is called **RESTful**.

### 3.3 Client-Server Architecture

1. **Client Requests Data** -- sends an HTTP request
2. **Server Processes the Request** -- retrieves data or performs logic
3. **Server Sends a Response** -- returns data (often in JSON format)
4. **Decoupled and Scalable** -- clients and servers work independently

### 3.4 Statelessness

- The communication between client and server is stateless
- Every message must contain all necessary information
- The server does not remember previous requests
- Example: instead of saying "Give me a pizza" and then "Taleggio salsiccia" in a second message, a stateless request would be: "Give me a large taleggio salsiccia pizza" -- all at once

### 3.5 HTTP Methods and CRUD Operations

HTTP methods map to **CRUD** (Create, Read, Update, Delete) operations:

| HTTP Method | CRUD Operation | Description | Example |
|-------------|---------------|-------------|---------|
| **GET** | Read | Retrieve data | GET /api/recipes -- get all recipes |
| **POST** | Create | Create new data | POST /api/recipes -- create a new recipe |
| **PUT** | Update | Update existing data | PUT /api/recipes/1 -- update recipe with id 1 |
| **DELETE** | Delete | Remove data | DELETE /api/recipes/1 -- delete recipe with id 1 |

### 3.6 HTTP Status Codes

| Code | Category | Meaning |
|------|----------|---------|
| **200** | Success | OK -- the request was successful |
| **201** | Success | Created -- a new resource was successfully created |
| **204** | Success | No Content -- successful but no body returned |
| **400** | Client Error | Bad Request -- the request was malformed |
| **401** | Client Error | Unauthorized -- authentication is required |
| **403** | Client Error | Forbidden -- you do not have permission |
| **404** | Client Error | Not Found -- the resource does not exist |
| **405** | Client Error | Method Not Allowed -- wrong HTTP method used |
| **500** | Server Error | Internal Server Error -- something went wrong on the server |

### 3.7 JSON (JavaScript Object Notation)

- A **text-based data format** that both humans and computers can read easily
- Very similar to Python dictionaries
- **Objects** are represented by curly braces {} and contain key-value pairs
- **Arrays** are represented by square brackets [] and contain ordered lists of values

**Example JSON file (example.json):**

    {
        "name": "Alice",
        "age": 30,
        "is_student": false,
        "courses": ["Math", "Science"],
        "address": {
            "city": "Amsterdam",
            "zip": "1012AB"
        }
    }

**Reading JSON in Python:**

    import json

    # Load JSON from file
    with open('example.json', 'r') as f:
        data = json.load(f)

    # Equivalent Python dictionary
    python_dict = {
        "name": "Alice",
        "age": 30,
        "is_student": False,
        "courses": ["Math", "Science"],
        "address": {
            "city": "Amsterdam",
            "zip": "1012AB"
        }
    }

### 3.8 RESTful API Design Best Practices

- Use **nouns** for resource URLs (e.g., /api/recipes, not /api/getRecipes)
- Use **plural names** for collections (e.g., /api/users, not /api/user)
- Use HTTP methods to indicate the action (GET, POST, PUT, DELETE)
- Use path parameters for specific resources (e.g., /api/recipes/42)
- Use query parameters for filtering (e.g., /api/recipes?cuisine=Italian&max_time=30)
- Return appropriate HTTP status codes
- Return data in JSON format

---

## 4. Flask Web Development

### 4.1 What Is Flask?

- Flask is a lightweight Python **web framework** for building web applications and APIs
- It is a **micro-framework** -- provides only the essentials, with extensions for additional features
- Used in this course for building the backend server

### 4.2 Minimal Flask Application

    from flask import Flask, jsonify, request

    app = Flask(__name__)

    @app.route('/')
    def home():
        return jsonify({"message": "Hello, World!"})

    if __name__ == '__main__':
        app.run(debug=True)

### 4.3 Defining Routes

Routes map URLs to Python functions using decorators:

    @app.route('/api/recipes', methods=['GET'])
    def get_recipes():
        # Return all recipes
        return jsonify(recipes), 200

    @app.route('/api/recipes/<int:recipe_id>', methods=['GET'])
    def get_recipe(recipe_id):
        # Return a specific recipe by ID
        recipe = find_recipe(recipe_id)
        if recipe:
            return jsonify(recipe), 200
        return jsonify({"error": "Recipe not found"}), 404

    @app.route('/api/recipes', methods=['POST'])
    def create_recipe():
        data = request.get_json()
        # Validate and create the recipe
        new_recipe = {
            "id": generate_id(),
            "name": data["name"],
            "ingredients": data["ingredients"]
        }
        recipes.append(new_recipe)
        return jsonify(new_recipe), 201

    @app.route('/api/recipes/<int:recipe_id>', methods=['PUT'])
    def update_recipe(recipe_id):
        data = request.get_json()
        recipe = find_recipe(recipe_id)
        if recipe:
            recipe.update(data)
            return jsonify(recipe), 200
        return jsonify({"error": "Recipe not found"}), 404

    @app.route('/api/recipes/<int:recipe_id>', methods=['DELETE'])
    def delete_recipe(recipe_id):
        recipe = find_recipe(recipe_id)
        if recipe:
            recipes.remove(recipe)
            return jsonify({"message": "Deleted"}), 200
        return jsonify({"error": "Recipe not found"}), 404

### 4.4 Request Handling

    # Get JSON data from request body
    data = request.get_json()

    # Get query parameters
    cuisine = request.args.get('cuisine')
    max_time = request.args.get('max_time', type=int)

    # Get URL parameters (defined in route)
    @app.route('/api/recipes/<int:recipe_id>')
    def get_recipe(recipe_id):
        pass

### 4.5 Flask Application Factory Pattern

    def create_app(config=None):
        app = Flask(__name__)

        if config:
            app.config.update(config)

        # Register routes, blueprints, etc.
        return app

This pattern is essential for testing because it allows creating a test instance:

    @pytest.fixture
    def app():
        app = create_app({'TESTING': True})
        yield app

### 4.6 Flask Project Structure

A typical Flask project for this course:

    project/
    +-- app/
    |   +-- __init__.py          # Application factory
    |   +-- routes/
    |   |   +-- __init__.py
    |   |   +-- recipes.py       # Recipe route handlers
    |   |   +-- auth.py          # Authentication routes
    |   +-- models/
    |   |   +-- __init__.py
    |   |   +-- recipe.py        # Recipe data model
    |   +-- services/
    |       +-- __init__.py
    |       +-- external_api.py  # Third-party API integration
    +-- tests/
    |   +-- __init__.py
    |   +-- conftest.py          # Shared fixtures
    |   +-- test_recipes.py      # Recipe endpoint tests
    |   +-- test_auth.py         # Auth endpoint tests
    +-- requirements.txt
    +-- README.md
    +-- .gitignore
    +-- run.py                   # Entry point

### 4.7 Testing Flask Applications

Flask provides a **test client** that simulates HTTP requests without running a live server:

    @pytest.fixture
    def client(app):
        return app.test_client()

    def test_get_recipes(client):
        response = client.get('/api/recipes')
        assert response.status_code == 200
        data = json.loads(response.data)
        assert isinstance(data, list)

    def test_create_recipe(client):
        new_recipe = {
            "name": "Pasta",
            "ingredients": ["pasta", "tomato sauce"]
        }
        response = client.post('/api/recipes',
            json=new_recipe
        )
        assert response.status_code == 201
        data = json.loads(response.data)
        assert data['name'] == 'Pasta'

### 4.8 Environment Variables and Configuration

    import os

    # Get environment variable
    api_key = os.environ.get('API_KEY')

    # Use in Flask config
    app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'default-key')

### 4.9 Interacting with External APIs

The project must interact with external APIs. Use the **requests** library in Python:

    import requests

    def get_external_data(query):
        url = "https://api.example.com/data"
        params = {"q": query, "key": os.environ.get('API_KEY')}
        response = requests.get(url, params=params)

        if response.status_code == 200:
            return response.json()
        return None

### 4.10 Data Cleaning

The backend API must **enrich** data retrieved from external sources before sending it to the frontend. This includes:
- Filtering out irrelevant fields
- Formatting data consistently
- Handling missing values
- Combining data from multiple sources

---

## 5. Frontend Basics (HTML, CSS, JavaScript)

### 5.1 HTML (HyperText Markup Language)

HTML provides the **structure** of a web page using elements enclosed in tags.

**Basic HTML Document Structure:**

    <!DOCTYPE html>
    <html>
    <head>
        <title>My Page</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <h1 id="name">Your Name</h1>

        <h2>Hobbies</h2>
        <ul class="hobbies">
            <li>Reading</li>
            <li><em>Cooking</em></li>
            <li>Coding</li>
        </ul>

        <h2>Education</h2>
        <p id="education">I am a student at VU Amsterdam.</p>

        <h2>Favorite Quote</h2>
        <blockquote id="quote">
            "The only way to do great work is to love what you do."
        </blockquote>

        <img id="profile-pic" src="profile.jpg" alt="Profile photo">
        <a href="https://www.vu.nl">Visit VU Amsterdam</a>

        <button id="alert-btn" onclick="showMessage()">Click me!</button>

        <script>
            function showMessage() {
                alert("Hello from JavaScript!");
            }
        </script>
    </body>
    </html>

**Common HTML Tags:**

| Tag | Purpose |
|-----|---------|
| h1 to h6 | Headings (h1 largest, h6 smallest) |
| p | Paragraph |
| a | Hyperlink (href attribute for URL) |
| img | Image (src attribute for source, alt for description) |
| ul / ol | Unordered / ordered list |
| li | List item |
| div | Block-level container |
| span | Inline container |
| button | Clickable button |
| blockquote | Block quotation |
| strong / b | Bold text |
| em / i | Italic text |
| table, tr, td, th | Table elements |

### 5.2 CSS (Cascading Style Sheets)

CSS controls the **visual presentation** of HTML elements.

**Selectors:**

    /* Element selector */
    body {
        background-color: #ffe4e1;
    }

    /* ID selector */
    #name {
        color: #008080;
        text-align: center;
        font-weight: bold;
    }

    /* Class selector */
    .hobbies {
        color: teal;
    }

    /* Image styling */
    #profile-pic {
        max-width: 200px;
        max-height: 200px;
        border: 3px solid black;
    }

    /* Button styling */
    #alert-btn {
        background-color: red;
        color: white;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
    }

**Key CSS Properties:**

| Property | Description | Example |
|----------|-------------|---------|
| color | Text color | color: blue; |
| background-color | Background color | background-color: #ffe4e1; |
| font-size | Size of text | font-size: 16px; |
| font-weight | Bold or normal | font-weight: bold; |
| text-align | Horizontal alignment | text-align: center; |
| margin | Space outside element | margin: 10px; |
| padding | Space inside element | padding: 20px; |
| border | Border around element | border: 3px solid black; |
| max-width | Maximum width | max-width: 200px; |

**Responsive Design:** develop a responsive user interface that adapts to various screen sizes and devices.

### 5.3 JavaScript Basics

JavaScript adds **interactivity** to web pages and communicates with APIs.

**Basic Interaction:**

    function showMessage() {
        alert("Hello from JavaScript!");
    }

**Fetching Data from an API:**

    // Using the Fetch API to communicate with your Flask backend
    fetch('/api/recipes')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Update the page with received data
        })
        .catch(error => console.error('Error:', error));

    // POST request to create data
    fetch('/api/recipes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'New Recipe',
            ingredients: ['item1', 'item2']
        })
    })
    .then(response => response.json())
    .then(data => console.log('Created:', data));

### 5.4 Bootstrap

Bootstrap is a CSS framework that provides ready-made components and a responsive grid system. It can be leveraged for efficiency in building the frontend.

---

## 6. Project Architecture and Structure

### 6.1 Architecture Overview

The system must include at least one web server to handle backend and frontend operations. The frontend and the backend **must be split into different applications**.

- **Frontend**: responsible for user interaction and visualization of services (HTML, CSS, JavaScript)
- **Backend**: responsible for implementing the logic, persistency, and communication with third-party services (Python/Flask)
- **Communication**: all communication between frontend and backend occurs via RESTful services

### 6.2 Backend Requirements

| Requirement | Description |
|-------------|-------------|
| **Data Structures** | Define your own data structures to model the application domain |
| **CRUD Operations** | Users must be able to Create, Read, Update, and Delete data entities |
| **Persistence** | Use persistent storage mechanisms; allow users to load existing data |
| **Query Service** | Offer at least three different filters for refining search queries |
| **Data Cleaning** | Enrich data retrieved from external sources before sending to frontend |
| **External API** | Interact with at least one external API for additional functionality or data |
| **Docstrings** | All functions and classes must have docstrings |
| **Type Hints** | All functions must have type hints for parameters and return values |

### 6.3 Frontend Requirements

| Requirement | Description |
|-------------|-------------|
| **Landing Page** | Visually appealing overview of the application's purpose and features |
| **CRUD Operations** | Perform Create, Read, Update, and Delete from the UI |
| **Search Page** | At least three different filters for refining searches |
| **Detail Result Page** | Comprehensive information about a selected item |
| **Visualization** | Present data in an intuitive and visual manner (support zooming, sorting) |

### 6.4 UI Design Standards

- **Consistent Template**: avoid collage-like layouts; maintain design consistency
- **User Interface Feedback**: provide timely and clear feedback for user interactions (especially error handling)
- **Responsiveness**: adapt to various screen sizes and devices
- **UI Alignment**: ensure proper alignment of UI elements
- **Color Palette**: use a proper color palette (e.g., from Adobe Color) for visual harmony

### 6.5 Virtual Environments

Students must create a virtual environment for their projects:

    # Create a virtual environment
    virtualenv .venv

    # Activate it
    source .venv/bin/activate      # macOS/Linux
    .venv\\Scripts\\activate         # Windows

    # Install dependencies
    pip install flask pytest requests

    # Generate requirements file
    pip freeze > requirements.txt

---

## 7. Practical Development Skills

### 7.1 Development Workflow

1. **Analyze requirements** -- break down user stories into technical specifications
2. **Write tests first** (TDD) -- define what success looks like before coding
3. **Implement the feature** -- write the minimum code to make tests pass
4. **Refactor** -- improve code quality while keeping tests green
5. **Commit and push** -- use meaningful commit messages; push daily to your branch
6. **Create pull requests** -- merge features from personal branches into dev/main

### 7.2 Code Quality Requirements

- All functions and classes must have **docstrings**
- All functions must have **type hints** for parameters and return values
- Write meaningful **commit messages** that describe what feature or bug you worked on
- Do not commit everything in one go -- make separate, focused commits

**Example function with docstring and type hints:**

    def get_recipe_by_id(recipe_id: int) -> dict:
        """
        Retrieve a recipe by its unique identifier.

        Args:
            recipe_id: The unique ID of the recipe to retrieve.

        Returns:
            A dictionary containing the recipe data, or None if not found.
        """
        for recipe in recipes:
            if recipe['id'] == recipe_id:
                return recipe
        return None

### 7.3 Tools

| Tool | Purpose |
|------|---------|
| **Git / GitHub** | Version control and collaboration |
| **Postman** | Test and explore APIs by sending HTTP requests manually |
| **RapidAPI** | Discover and connect to third-party APIs |
| **pytest** | Run automated tests |
| **Flask** | Build the backend web server |
| **Bootstrap** | Speed up frontend development with pre-built components |

### 7.4 Debugging Tips

- Use **print statements** or a **debugger** to trace issues
- Check the **HTTP status code** in API responses to understand errors
- Read error messages carefully -- they often point to the exact problem
- Use the browser's **developer tools** (F12) to inspect network requests and console errors
- Test API endpoints with **Postman** before connecting them to the frontend

### 7.5 Project Deliverables

| Week | Deliverable |
|------|-------------|
| **1** | Join a group, submit project proposal, create README |
| **2** | Adjust proposal based on feedback, develop backend + tests |
| **3** | Create frontend (GenAI allowed), connect backend and frontend via REST API |
| **4** | Write peer review, coding interview |

### 7.6 Assessment Breakdown

| Component | Weight |
|-----------|--------|
| Implementation (Frontend + Backend + Communication) | 60% |
| Degree of Participation (Attendance + Git Activity) | 20% |
| Generative AI Report | 10% |
| Final Demo Presentation | 10% |
| Project Proposal | Pass/Fail |
| Coding Interview | Pass/Fail (must pass to pass the course) |

---

## 8. Quick Reference: Command Cheat Sheet

### Git Commands

    git init                        # Initialize a new repository
    git clone [url]                 # Clone a remote repository
    git status                      # Check file states
    git add [file]                  # Stage changes
    git commit -m "message"         # Commit staged changes
    git push origin [branch]        # Push to remote
    git pull origin [branch]        # Pull from remote
    git branch [name]               # Create a branch
    git switch [name]               # Switch to a branch
    git switch -c [name]            # Create and switch
    git merge [branch]              # Merge a branch into current
    git log                         # View commit history
    git fetch origin                # Download remote state

### Python / Flask

    pip install flask               # Install Flask
    pip install pytest              # Install pytest
    pip freeze > requirements.txt   # Save dependencies
    python run.py                   # Run Flask application
    pytest                          # Run all tests
    pytest tests/test_recipes.py    # Run specific test file
    pytest -v                       # Verbose test output

### Virtual Environment

    virtualenv .venv                # Create virtual environment
    source .venv/bin/activate       # Activate (macOS/Linux)
    deactivate                      # Deactivate environment
`;
