import React from 'react'
import axios from 'axios'
import { intersection } from 'lodash'
import Header from './Header'
import { GenreList } from './GenreList'
import { MoviesList } from './MoviesList'

class App extends React.Component {
    state = {
        range: 3,
        movies: { data: { results: [] }},
        nowPlaying: { data: { results: [] }},
        genres: { data: { genres: [] }},
        image: { data: { images: {} }},
        selected: []
    };
    componentDidMount() {
        const API_KEY = '00393c8e8abcc530b2d0516bc3304e54';
        axios.all([
            axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-UK&page=1`),
            axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-UK`),
            axios.get(`https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`)
        ])
            .then(axios.spread((nowPlaying, genres, image) => {
                this.setState({
                    nowPlaying,
                    genres,
                    image
                }, () => {
                    this.setState({
                        movies: JSON.parse(JSON.stringify(this.state.nowPlaying)) // deep copying                        
                    });
                });
            }));
    }

    addRange = () => {
        this.setState({
            range: this.state.range+0.5
        }, this.fetchUpdatedMovies);
    };

    minusRange = () => {
        this.setState({
            range: this.state.range-0.5
        }, this.fetchUpdatedMovies);
    };

    resetRange = () => {
        this.setState({
            range: 3
        }, this.fetchUpdatedMovies);
    };

    // filter and update the movies depending upon user actions
    fetchUpdatedMovies = () => {
        const { nowPlaying, selected, range } = this.state;
        const newMovies = nowPlaying;
        newMovies.data.results = nowPlaying.data.results.filter(movie => {
            return movie.vote_average >= range && intersection(movie.genre_ids, selected).length === selected.length;
        });
        this.setState({
            movies: newMovies
        });
    };

    // handles genre selections
    toggleCheckbox = e => {
        if(this.state.selected.includes(parseInt(e.target.value))) {
            const index = this.state.selected.indexOf(parseInt(e.target.value));
            const newSelected = this.state.selected;
            if(index > -1) {
                newSelected.splice(index, 1);
                this.setState({
                    selected: newSelected
                }, this.fetchUpdatedMovies);
            }
        } else {
            this.setState({
                selected: [...this.state.selected, parseInt(e.target.value)]
            }, this.fetchUpdatedMovies);
        }
    };    

    render () {        
        const {
            range,
            genres,
            movies,
            image,
        } = this.state;
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h4>Range: {range}</h4>
                            <a className="waves-effect waves-light btn-small" onClick={this.addRange}>Increment</a>
                            <a className="waves-effect waves-light btn-small" onClick={this.minusRange}>Decrement</a>
                            <a className="waves-effect waves-light btn-small" onClick={this.resetRange}>Default</a>
                        </div>
                        <div className="col s12">                            
                            <GenreList
                                genres={genres.data.genres}
                                toggleCheckbox={this.toggleCheckbox}
                            />                                                            
                            <MoviesList
                                movies={movies.data.results}
                                images={image.data.images}
                                genres={genres.data.genres}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;