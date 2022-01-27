  # Shortly URL shortening API 
  A URL shortening landing page using React and shrtcode API.
  
  ## Overview 
  This is a project suggestion from [Frontent Mentor](https://www.frontendmentor.io/). It was a solitary project that allowed me implement an API and build something with           several real-world use cases. It was a one-month project.
  
  Shortly is a url-shortening application which allowed me to use React and SCSS on the frontend while connecting it to the shrtcode API, which I enjoyed doing. I also liked         converting the design files into a nice responsive landing page, which help me to hone in my UX skills while thinking in components. I also enjoyed diving into some new         aspects of JavaScript that I hadn't implemented before. 
  
  (https://competent-dubinsky-bb338a.netlify.app/)
  
  ## Motivation
  Build a React application to show the following:
  - my area of interest in the industry
  - my technical skill set
  - my web design interest
  
  ## Technologies Used
  - HTML
  - CSS
  - JavaScript (ES6)
  - SCSS
  - Git
  - GitHub
  - React
  - React Hooks (useState, useRef)
  - RegExp
  - shrtcode API
  - React spinners
  - 
  ## Folder Structure
    |-📁public
    |-📁src
      |-📁components
      |-📁images
      |-📁styles (sass)
      |-📁util
      |-📃App.js
      |-📃index.js
    |-📃.babelrc
    |-📃.gitignore
    |-📃README.md
    |-📃package.json
    |-📃package-lock.json
    |-📃style-guide.md
  
  ## Approach
   I started out mobile-first with the UI, intuitively splitting each piece of UI into components and then went on to the desktop view, achieving a responsive landing page with    zero functionality so far. The form being the core of the application, I validated for empty and then invalid submissions, alongside approprite error messages.      Keep in mind that a url is expected. I validated the link with Regex while keeping track of the input with useState() and useRef(). When the input is valid, the url is sent      with a waiting time of 15 seconds and the spinner is set in action. If the shortening is successfull, the shortened link and its original counterpart will render just below      the form. Otherwise, an error message is shown.
   
   ## Thanks
   Thanks for reading this far...🎉
