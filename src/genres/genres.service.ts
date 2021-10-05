import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Injectable()
export class GenresService {
  constructor(private readonly prismaService: PrismaService) {}
  async createGenre(genre: CreateGenreDto) {
    return this.prismaService.genre.create({
      data: genre,
    });
  }

  async readAllGenres() {
    return this.prismaService.genre.findMany();
  }

  async readOneGenre(id: number) {
    const genre = await this.prismaService.genre.findUnique({
      where: {
        id,
      },
    });

    return genre;
  }

  async updateGenre(id: number, genre: UpdateGenreDto) {
    return await this.prismaService.genre.update({
      data: {
        ...genre,
        id: undefined,
      },
      where: {
        id,
      },
    });
  }

  async deleteGenre(id: number) {
    return this.prismaService.genre.delete({
      where: {
        id,
      },
    });
  }
}
