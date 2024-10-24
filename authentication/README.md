# step 1: install cleark package (npm i @clerk/next.js)

# step 2: configure your .env.local file with the clerk keys. - you can find your keys in the API keys section on clerk site.

# step 3: configure your middleware file

- save your middleware.js in src
- copy middleware template from docs --> https://clerk.com/docs/references/nextjs/clerk-middleware

# step 4: Add the clerk provider to our app

- the clerkProvider goes in the app layout.js so our whole app has access to clerk
- wrap all your DOM elements with the <Clerkprovider>

# step 5: set up protected and public routes

- if route is protected we need to be authenticated to see the content
- if a route is public, you can access the content without authentication
- to decide:

  - what content do i want to protect?
  - what is the user experience like?
    - example: if i protect the home page and the post page then i need a sign up login page to greet the user
    - example: you can have your home page public and add a login element for your users to authenticate themselves
    - example: both home and posts might be public but the user needs to authenticate to be able to create new data

- to set up protected routes you need to configure your middleware

# step 6: create sign-in and sgin-up pages

- we need new route folders and a catch-all dynamic route [[...sign-in]] [[...sing-up]]
- the pages are nested into dynamic pages
- Import the SignIN and SignUp components and add them to your respective pages

# step 7: set up a redirect to the home page once signed in

- set up a redirect in the .env.local file

# step 8: Add more clerk components

- UserButton,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,

- auth --> to collect userId
