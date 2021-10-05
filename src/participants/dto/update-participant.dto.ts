import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class UpdateParticipantDto {
  @IsNumber()
  @IsOptional()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  function: string;
}
export default UpdateParticipantDto;
