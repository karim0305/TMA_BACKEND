import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MeasurementService } from "./measurement.service";
import { MeasurementController } from "./measurement.controller";
import { Measurement, MeasurementSchema } from "./schema/measurement.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Measurement.name, schema: MeasurementSchema }])],
  controllers: [MeasurementController],
  providers: [MeasurementService],
})
export class MeasurementModule {}
