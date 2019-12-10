import React from 'react'
import PropTypes from 'prop-types'

export const GenreList = ({ genres, toggleCheckbox }) => (
    <div className="row">
        <h4>Genres</h4>
        {genres.map((genre) => (
            <p key={genre.id} className="col s12 m6 l4">
                <label>
                    <input
                        name="genre"
                        type="checkbox"
                        className="filled-in"
                        onClick={toggleCheckbox}
                        value={genre.id}
                    />
                    <span>{genre.name}</span>
                </label>
            </p>
        ))}
    </div>
);

GenreList.propTypes = {
    genres: PropTypes.array.isRequired,
    toggleCheckbox: PropTypes.func.isRequired
};