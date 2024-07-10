import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MovieDetail from './components/MovieDetails';
import FavoriteMovies from './components/FavouriteMovie';
import AdminView from './components/AdminView';
import MovieProvider from './context/movieContext';
import './index.css';

const App = () => {
    return (
        <MovieProvider>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/movie/:id" component={MovieDetail} />
                    <Route path="/favorites" component={FavoriteMovies} />
                    <Route path="/admin" component={AdminView} />
                </Switch>
            </Router>
        </MovieProvider>
    );
};

export default App;
