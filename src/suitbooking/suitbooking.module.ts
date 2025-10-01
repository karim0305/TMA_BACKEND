import { Module } from '@nestjs/common';
import { SuitBookingService } from './suitbooking.service';
import { SuitBookingController } from './suitbooking.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SuitBooking, SuitBookingSchema } from './schema/suitbooking.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SuitBooking.name, schema: SuitBookingSchema }, // 👈 Register schema here
    ]),
  ],
  controllers: [SuitBookingController],
  providers: [SuitBookingService],
})
export class SuitbookingModule {}
