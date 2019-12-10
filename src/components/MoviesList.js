import React from 'react'
import PropTypes from 'prop-types'
import { findGenres } from '../utils/utils'

export const MoviesList = ({ movies, images, genres }) => {
    const baseUrl = images.base_url;
    const imageSize = 'w185'; // Todo, retrieve this from images object
    return (
        <div className="row">
            {movies.map(movie => (
                <div key={movie.id} className="col s12 m6 l4">
                    <div className="card">
                        <div className="card-image">
                            <img src={baseUrl+imageSize+movie.poster_path} />
                            <span className="card-title">{movie.title}</span>
                        </div>
                        <div className="card-action">
                            {findGenres(movie.genre_ids, genres)}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

MoviesList.propTypes = {
    movies: PropTypes.array.isRequired,
    images: PropTypes.object.isRequired,
    genres: PropTypes.array.isRequired
};