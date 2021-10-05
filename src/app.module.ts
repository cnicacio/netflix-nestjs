import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { GenresModule } from './genres/genres.module';
import { ParticipantsModule } from './participants/participants.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, MoviesModule, GenresModule, ParticipantsModule],
})
export class AppModule {}
