import { ParticipantsService } from './participants.service';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
export declare class ParticipantsController {
    private readonly participantsService;
    constructor(participantsService: ParticipantsService);
    createParticipant(participant: CreateParticipantDto): Promise<import(".prisma/client").Participant>;
    readAllParticipants(): Promise<import(".prisma/client").Participant[]>;
    readOneParticipant(id: number): Promise<import(".prisma/client").Participant>;
    update(id: number, participant: UpdateParticipantDto): Promise<import(".prisma/client").Participant>;
    deleteParticipant(id: number): Promise<import(".prisma/client").Participant>;
}
