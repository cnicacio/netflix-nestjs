import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ValidationPipe,
  UsePipes,
  ParseIntPipe,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createMovie(@Body() movie: CreateMovieDto) {
    return this.moviesService.createMovie(movie);
  }

  @Get()
  @UsePipes(ValidationPipe)
  async readAllMovies() {
    return this.moviesService.readAllMovies();
  }

  @Get(':id')
  @UsePipes(ValidationPipe)
  async readOneMovie(@Param('id') id: number) {
    return this.moviesService.readOneMovie(id);
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  async updateMovie(
    @Param('id', ParseIntPipe) id: number,
    @Body() movie: UpdateMovieDto,
  ) {
    return this.moviesService.updateMovie(id, movie);
  }

  @Delete(':id')
  @UsePipes(ValidationPipe)
  async deleteMovie(@Param('id') id: number) {
    return this.moviesService.deleteMovie(id);
  }
}
