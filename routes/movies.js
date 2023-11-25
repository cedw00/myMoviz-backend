var express = require('express');
var router = express.Router();

router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`)
    .then(response => response.json())
    .then(movies => {
        const moviesData = [];
        for (let i = 0; i < movies.results.length; i++) {
            moviesData.push({
                overview: movies.results[i].overview,
                title: movies.results[i].title,
                vote_average: movies.results[i].vote_average,
                vote_count: movies.results[i].vote_count,
                poster_path: movies.results[i].poster_path
            });
        }
        res.json({ result: true, movies: moviesData });
    })
})

module.exports = router;