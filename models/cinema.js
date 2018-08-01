const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getListOfFilmTitles = function () {
  return this.films.map(film => film.title);
};

module.exports = Cinema;