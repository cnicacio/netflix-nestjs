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
import { GenresService } from './genres.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Controller('genres')
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createGenre(@Body() genre: CreateGenreDto) {
    return this.genresService.createGenre(genre);
  }

  @Get()
  @UsePipes(ValidationPipe)
  async readAllGenres() {
    return this.genresService.readAllGenres();
  }

  @Get(':id')
  @UsePipes(ValidationPipe)
  async readOneGenre(@Param('id', ParseIntPipe) id: number) {
    return this.genresService.readOneGenre(id);
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  async updateGenre(
    @Param('id', ParseIntPipe) id: number,
    @Body() genre: UpdateGenreDto,
  ) {
    return this.genresService.updateGenre(id, genre);
  }

  @Delete(':id')
  @UsePipes(ValidationPipe)
  async deleteGenre(@Param('id', ParseIntPipe) id: number) {
    return this.genresService.deleteGenre(id);
  }
}
