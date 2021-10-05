import { PrismaService } from 'src/prisma/prisma.service';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
export declare class ParticipantsService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    createParticipant(participant: CreateParticipantDto): Promise<import(".prisma/client").Participant>;
    readAllParticipants(): Promise<import(".prisma/client").Participant[]>;
    readOneParticipant(id: number): Promise<import(".prisma/client").Participant>;
    updateParticipant(id: number, participant: UpdateParticipantDto): Promise<import(".prisma/client").Participant>;
    deleteParticipant(id: number): Promise<import(".prisma/client").Participant>;
}
