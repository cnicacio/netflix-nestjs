import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  UsePipes,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { ParticipantsService } from './participants.service';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';

@Controller('participants')
export class ParticipantsController {
  constructor(private readonly participantsService: ParticipantsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createParticipant(@Body() participant: CreateParticipantDto) {
    return this.participantsService.createParticipant(participant);
  }

  @Get()
  @UsePipes(ValidationPipe)
  async readAllParticipants() {
    return this.participantsService.readAllParticipants();
  }

  @Get(':id')
  @UsePipes(ValidationPipe)
  async readOneParticipant(@Param('id', ParseIntPipe) id: number) {
    return this.participantsService.readOneParticipant(id);
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() participant: UpdateParticipantDto,
  ) {
    return this.participantsService.updateParticipant(id, participant);
  }

  @Delete(':id')
  @UsePipes(ValidationPipe)
  async deleteParticipant(@Param('id', ParseIntPipe) id: number) {
    return this.participantsService.deleteParticipant(id);
  }
}
