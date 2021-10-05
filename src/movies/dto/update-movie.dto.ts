import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class UpdateMovieDto {
  @IsNumber()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  image: string;

  @IsNumber()
  @IsNotEmpty()
  year: number;

  @IsNumber()
  @IsNotEmpty()
  duration: number;

  @IsOptional()
  @IsNumber({}, { each: true })
  participants?: number[];

  @IsOptional()
  @IsNumber({}, { each: true })
  genres?: number[];
}
