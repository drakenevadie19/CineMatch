<h1>CineMatch</h1>

<p>CineMatch = Combination between "Cinema" and "Match" to highlight movie recommendations.</p>

<h2>Descriptions</h2>
<ul>
    <li>CineMatch is a smart movie discovery app that helps users find the perfect film based on their watch history and preferences.</li>
    <li>It offers personalized recommendations, making exploring and enjoying new movies tailored to your taste easier.</li>
    <li>Whether you're in the mood for a blockbuster hit or a hidden gem, CineMatch ensures you never run out of great movies to watch.</li>
</ul>
    
<h2>Responsibilities</h2>

- Utilizing GraphQL to minimize redundant data transferring between front-end and back-end. There are currently 2 fields using GraphQL (https://graphql.org/community/tools-and-libraries/?tags=javascript_server#javascript): 
    - Query: Get the list of all movies stored in the MongoDB Database, and bind those data to Front-end to display through Apollo Client (https://www.apollographql.com/docs/react/data/queries/).
    - Mutation: Add a new movie to the database, also through Apollo Client (https://www.apollographql.com/docs/react/data/mutations), and update the list of available movies dynamically. 
- Dividing into 2 dashboards for ordinary visitors and admin.
    - Visitors can: 
        - View best rating movies
        - Comment on each movie based on experiences (Login required)
    - Admin can:
        - Managing movies in the database (Adding new movies, delete movie(s), and modifying details of movies)
- Storing a list of movies, and achieving them when needed through Mongoose tool and MongoDB. 
- Using MERN Stacks (MongoDB, Express.js, React.js, and Node.js) to host all website services.
- Loading data from: https://github.com/drakenevadie19/movie-channel-data

<h2>TechStack</h2>

- Front-End: 
    - React.js
    - Redux
    - HTML + CSS
    - JavaScript
    - Apollo Client
- Back-end: 
    - GraphQL 
    - Express.js
    - Node.js
    - CORS
    - JSON Server
- Database: 
    - Mongo DB
    - Mongoose 
    - MongoDB Atlas hosting
