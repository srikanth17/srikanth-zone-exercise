import React from 'react'
import { shallow } from 'enzyme'
import { GenreList } from '../../components/GenreList'

let genres, toggleCheckbox, wrapper;

beforeEach(() => {
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
    toggleCheckbox = jest.fn();
    wrapper = shallow(<GenreList genres={genres} toggleCheckbox={toggleCheckbox}/>);
});

test('should render GenreList correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call toggleCheckbox prop', () => {
    wrapper.find('input').at(0).simulate('click');
    expect(toggleCheckbox).toHaveBeenCalled();
});