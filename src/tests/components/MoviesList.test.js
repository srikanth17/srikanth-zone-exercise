import React from 'react'
import { shallow } from 'enzyme'
import { MoviesList } from '../../components/MoviesList'

let movies, images, genres, wrapper;

beforeEach(() => {
    movies = [{
        id: 1,
        title: 'Title1',
        genre_ids: [1, 2],
        poster_path: '/abc'
    }, {
        id: 2,
        title: 'Title2',
        genre_ids: [3, 4],
        poster_path: '/def'
    }];
    images = {
        base_url: 'www.example.com/'
    };
    genres = [{
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
    wrapper = shallow(<MoviesList movies={movies} images={images} genres={genres}/>);
});

test('should render MoviesList correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should find the correct src prop', () => {
    expect(wrapper.find('img').at(0).prop('src')).toBe('www.example.com/w185/abc');
});