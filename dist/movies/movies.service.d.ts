import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
export declare class MoviesService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    createMovie(movie: CreateMovieDto): Promise<import(".prisma/client").Movie & {
        participants: import(".prisma/client").Participant[];
        genre: import(".prisma/client").Genre[];
    }>;
    readAllMovies(): Promise<import(".prisma/client").Movie[]>;
    readOneMovie(movieId: number): Promise<import(".prisma/client").Movie>;
    updateMovie(id: number, movie: UpdateMovieDto): Promise<import(".prisma/client").Movie>;
    deleteMovie(id: number): Promise<import(".prisma/client").Movie>;
}
