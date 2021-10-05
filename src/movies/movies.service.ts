import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  constructor(private readonly prismaService: PrismaService) {}

  async createMovie(movie: CreateMovieDto) {
    const genres = movie.genres?.map((genre) => ({
      id: genre,
    }));

    const participants = movie.participants?.map((participant) => ({
      id: participant,
    }));

    return this.prismaService.movie.create({
      data: {
        name: movie.name,
        image: movie.image,
        year: movie.year,
        duration: movie.duration,
        genre: {
          connect: genres,
        },
        participants: {
          connect: participants,
        },
      },
      include: {
        genre: true,
        participants: true,
      },
    });
  }

  async readAllMovies() {
    return this.prismaService.movie.findMany()
  }

  async readOneMovie(movieId: number) {
    return this.prismaService.movie.findUnique({
      where: {
        id: movieId,
      },
    });
  }

  async updateMovie(id: number, movie: UpdateMovieDto) {
    return await this.prismaService.movie.update({
      data: {
        ...movie,
        id: undefined,
      },
      where: {
        id,
      },
    });
  }

  async deleteMovie(id: number) {
    return this.prismaService.movie.delete({
      where: {
        id,
      },
    });
  }
}
