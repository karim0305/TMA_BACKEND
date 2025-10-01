import { PartialType } from '@nestjs/swagger';
import { CreateSuitBookingDto } from './create-suitbooking.dto';

export class UpdateSuitbookingDto extends PartialType(CreateSuitBookingDto) {}
