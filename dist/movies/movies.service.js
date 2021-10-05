"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let MoviesService = class MoviesService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async createMovie(movie) {
        var _a, _b;
        const genres = (_a = movie.genres) === null || _a === void 0 ? void 0 : _a.map((genre) => ({
            id: genre,
        }));
        const participants = (_b = movie.participants) === null || _b === void 0 ? void 0 : _b.map((participant) => ({
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
        return this.prismaService.movie.findMany();
    }
    async readOneMovie(movieId) {
        return this.prismaService.movie.findUnique({
            where: {
                id: movieId,
            },
        });
    }
    async updateMovie(id, movie) {
        return await this.prismaService.movie.update({
            data: Object.assign(Object.assign({}, movie), { id: undefined }),
            where: {
                id,
            },
        });
    }
    async deleteMovie(id) {
        return this.prismaService.movie.delete({
            where: {
                id,
            },
        });
    }
};
MoviesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MoviesService);
exports.MoviesService = MoviesService;
//# sourceMappingURL=movies.service.js.map