// const is read-only. So defining my DB w/ 'let'
let movies = [
  {
    id: "0",
    name: "Avengers - End game",
    score: 4
  },
  {
    id: "1",
    name: "The Godfather",
    score: 5
  },
  {
    id: "2",
    name: "Pulp Fiction",
    score: 5
  },
  {
    id: "3",
    name: "The Good, the Bad and the Ugly",
    score: 4
  },
  {
    id: "4",
    name: "The Lord of the Rings: The Return of the King",
    score: 4
  },
  {
    id: "5",
    name: "12 Angry Men",
    score: 3
  }
];

// Filter: go through all conditions and spit out what matches with the defined condition
export const getById = id => {
  const filteredMovies = movies.filter(movie => movie.id === String(id));
  return filteredMovies[0];
};

export const getMovies = () => movies;

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== String(id));
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    name,
    score,
    id: `${movies.length}`
  };
  movies.push(newMovie);
  return newMovie;
};
