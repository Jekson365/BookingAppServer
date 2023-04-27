import express from 'express'
import { getMovies } from './controllers/get.movie.controller.js'
import { postMovie } from './controllers/post.movie.controller.js';

export const Movie = express.Router()

Movie.get("/", getMovies);
Movie.post("/newmovie", postMovie);