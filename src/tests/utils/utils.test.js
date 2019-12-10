import { findGenres } from '../../utils/utils'

test('should return correct genres', () => {
    const genreIds = [1, 2, 3];
    const genres = [{
        id: 1,
        name: "Action"
    }, {
        id: 2,
        name: "Adventure"
    }, {
        id: 3,
        name: "Animation"
    }, {
        id: 4,
        name: "Comedy"
    }, {
        id: 5,
        name: "Crime"
    }];

    const result = findGenres(genreIds, genres);
    expect(result).toBe('Action | Adventure | Animation');
});