export const findGenres = (genreIds, genres) => {
    var calculatedGenres = [];
    genreIds.forEach(genreId => {
        genres.forEach(genre => {
            if(genreId === genre.id) {
                calculatedGenres = [...calculatedGenres, genre.name];
            }
        });
    });
    return calculatedGenres.join(' | ');
};