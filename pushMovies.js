const movieClass = require('./movieClass')

const pushMovies = (chosenCity_Movie) => {
    const movieArr = [];
    // for(let i=0; i<chosenCity_Movie.results.length; i++){
    //     movieArr.push(new movieClass(chosenCity_Movie, [i]))
    // }
    // chosenCity_Movie.results.length === 0 ?  movieArr = {'No movies'} : 
    // return movieArr

    if(chosenCity_Movie.results.length !== 0){
        for(let i=0; i<chosenCity_Movie.results.length; i++){
            movieArr.push(new movieClass(chosenCity_Movie, [i]))
        }
    }else{
        movieArr.push({error: 'No movies'})
    }
    return movieArr
}

module.exports = pushMovies;