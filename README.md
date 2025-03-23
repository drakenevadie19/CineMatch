<h1>CineMatch</h1>

<p>CineMatch = Combination between "Cinema" and "Match" to highlight movie recommendations.</p>

<h2>Descriptions</h2>
<ul>
    <li>CineMatch is a smart movie discovery app that helps users find the perfect film based on their watch history and preferences.</li>
    <li>It offers personalized recommendations, making exploring and enjoying new movies tailored to your taste easier.</li>
    <li>Whether you're in the mood for a blockbuster hit or a hidden gem, CineMatch ensures you never run out of great movies to watch.</li>
</ul>
    
<h2>Responsibilities</h2>

- Utilizing GraphQL to minimize redundant data transferring between front-end and back-end. There are currently 2 fields using GraphQL: 
    - Query: Get the list of all movies stored in the MongoDB Database, and bind those data to Front-end to display through Apollo Client.
    - Mutation: Add a new movie to the database, also through Apollo Client, and update the list of available movies dynamically. 
- Visitors can: 
    - Recommended movies (based on selected/viewed movies)
    - Highest rating movies (Prioritize movies visistor did not watch)
    - Recently released movies 
    - Your recent viewed movies 
- Storing a list of movies, and achieving them when needed through Mongoose tool and MongoDB. 
- Using MERN Stacks (MongoDB, Express.js, React.js, and Node.js) to host all website services.
- Loading data from: https://github.com/drakenevadie19/movie-channel-data

<h2>TechStack</h2>

- Front-End: 
    - JavaScript, React.js, Redux, HTML + CSS, Apollo Client
- Back-end: 
    - GraphQL 
    - Main server: JavaScript, Express.js, Node.js, CORS, JSON Server
    - Recommendation model: Flask, Python
- Database: 
    - MongoDB with Mongoose, MongoDB Atlas hosting
    - PostgreSQL, Railway
