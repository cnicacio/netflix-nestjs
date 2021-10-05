import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';

@Injectable()
export class ParticipantsService {
  constructor(private readonly prismaService: PrismaService) {}
  async createParticipant(participant: CreateParticipantDto) {
    return this.prismaService.participant.create({
      data: participant,
    });
  }

  async readAllParticipants() {
    return this.prismaService.participant.findMany();
  }

  async readOneParticipant(id: number) {
    const participant = await this.prismaService.participant.findUnique({
      where: {
        id,
      },
    });

    return participant;
  }

  async updateParticipant(id: number, participant: UpdateParticipantDto) {
    return await this.prismaService.participant.update({
      data: {
        ...participant,
        id: undefined,
      },
      where: {
        id,
      },
    });
  }

  async deleteParticipant(id: number) {
    return this.prismaService.participant.delete({
      where: {
        id,
      },
    });
  }
}
