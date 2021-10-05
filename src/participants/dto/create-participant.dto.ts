import { IsString, IsNotEmpty } from 'class-validator';

export class CreateParticipantDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  function: string;
}
export default CreateParticipantDto;
