# Blog Website with Express and EJS

A simple blog website built using **Express.js** and **EJS** for rendering dynamic views. This app allows users to create, view, edit, and delete blog posts with features like UUID-based post IDs for uniqueness.

## Features

### 1. Welcome Page

The application starts with a welcoming page that introduces the user to the blog platform.

![Welcome Page](./screenshots/welcome-page.png)

### 2. All Posts Page

Displays a list of all posts in the blog with their usernames and content.

**Features**:
- View the content of all posts.
- Options to **Edit** and **Delete** each post.

![All Posts Page](./screenshots/all-posts-page.png)

### 3. Add a New Post (Create a Post)

- **Step 1**: Navigates to the page where you can create a new post. A form is displayed asking for a username and content for the post.
- **Step 2**: When the form is submitted, the post is added to the list of posts and stored with a unique UUID for identification.

![Add New Post Page](./screenshots/add-new-post.png)

### 4. Edit a Post

- **Step 1**: Clicking the **Edit** button on a post will navigate the user to the **Edit Page**.
- **Step 2**: The user can modify the content of the post and save the changes. After editing, the post is updated with the new content.

![Edit Post Page](./screenshots/edit-post-page.png)

### 5. Delete a Post

The user can delete a post from the list.

**How it works**:
- When the **Delete** button is pressed, the post is removed from the list, and the user is redirected back to the posts page.

![Delete Post](./screenshots/delete-post.png)

---

markdown
Copy code
## How to Run the Project

### 1. Clone the Repository

Start by cloning the repository to your local machine. Open a terminal and run the following command:

```bash
git clone <your-repository-url>
2. Navigate to the Project Directory
After cloning, navigate into the project directory by running:

bash
Copy code
cd <your-project-folder>
Replace <your-project-folder> with the name of your project folder.

3. Install Dependencies
To install all the necessary dependencies, run:

bash
Copy code
npm install
This will install all the required packages from the package.json file.

4. Set Up Environment Variables (if applicable)
If your project requires environment variables (for example, API keys or database URLs), you need to create a .env file in the root of your project and add the necessary environment variables.

For example:

makefile
Copy code
DATABASE_URL=your-database-url
SECRET_KEY=your-secret-key
Note: This step is optional and only needed if your project has specific environment variables.

5. Start the Development Server
To start the project, run the following command:

bash
Copy code
npm start
This will start your application, and you can access it in your web browser at:

arduino
Copy code
http://localhost:8002
6. Access the Application
Once the server is up and running, open your browser and go to the following URL to view the application:

arduino
Copy code
http://localhost:8002
7. Stop the Server
To stop the server at any time, press Ctrl + C in your terminal where the app is running.

Additional Steps (if applicable)
Running Tests: If your project has unit or integration tests, you can run them with the following command:
bash
Copy code
npm test
Note: This step is optional and depends on whether tests are set up in your project.

Optional Setup for Production: If you're deploying the project for production, follow these additional steps based on your hosting service (e.g., Heroku, 
