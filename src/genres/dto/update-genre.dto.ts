import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class UpdateGenreDto {
  @IsNumber()
  @IsOptional()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;
}
export default UpdateGenreDto;
