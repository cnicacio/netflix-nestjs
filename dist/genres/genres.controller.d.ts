import { GenresService } from './genres.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
export declare class GenresController {
    private readonly genresService;
    constructor(genresService: GenresService);
    createGenre(genre: CreateGenreDto): Promise<import(".prisma/client").Genre>;
    readAllGenres(): Promise<import(".prisma/client").Genre[]>;
    readOneGenre(id: number): Promise<import(".prisma/client").Genre>;
    updateGenre(id: number, genre: UpdateGenreDto): Promise<import(".prisma/client").Genre>;
    deleteGenre(id: number): Promise<import(".prisma/client").Genre>;
}
