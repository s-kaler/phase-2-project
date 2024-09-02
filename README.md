# phase-2-project

The task of the this project was to create a react app from scratch with multiple components, state management, and clien-side routing.

The actual content of the app was of my own choice, so I created a blog site with simple features. Notable features are the ability to sign up as a new user, log in as an existing user, view other users' profiles and create your own blog posts.

The Components used in this application are:
- BlogPost.js
- Home.js
- Login.js
- NavBar.js
- NewBlog.js
- Profile.js
- SignUp.js

When first launching the app, it will check if the user is logged in. If not, it will automatically navigate to the login page. If the user does not have an account, there is a link to the sign up page. If a new user has signed up, they can navigate back to the login page. Once the user has logged in, they will directed to the home page, where all blog posts are displayed. At the top of the page, there is a navigation bar with links to the home page, current user's profile, and a button to log out. There are links to view each blog post on separate pages.

When a user clicks on a link to a blog post, they can also view the profile of the blog author's profile.  On the profile page, there is a list of that user's own blog posts. The current logged-in user can also click the navigation bar link to their own profile.

If the current user wants to create a new blog post, they can use the form in the user profile. When a new blog is submitted, it will be displayed on the home page and on the user's profile. 

Future features that could be implemented are the ability to view the website as an anonymous user, the ability to edit blog posts after they have been posted, and adding more options to create new blogs with categories, tags, and ways to filter them. Other updates to the app would include having nested components for routing to different pages based on current user profile or current blog, such as editing current blog post. 