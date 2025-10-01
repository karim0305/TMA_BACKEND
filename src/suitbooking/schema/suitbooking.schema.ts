import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { User } from "../../user/schema/user.schema";
import { Measurement } from "../../measurement/schema/measurement.schema";

export type SuitBookingDocument = SuitBooking & Document;

@Schema({ timestamps: true })
export class SuitBooking {
  @Prop({ type: Types.ObjectId, ref: User.name, required: true })
  customerId: Types.ObjectId; // Reference to customer (User)

  @Prop({ type: Types.ObjectId, ref: Measurement.name, required: true })
  measurementId: Types.ObjectId; // Reference to measurement

  @Prop({ type: Date, required: true })
  bookingDate: Date; // Booking Date

  @Prop({ type: Date, required: true })
  measurementDate: Date; // Measurement Date

  @Prop({ type: Date, required: true })
  completionDate: Date; // Completion Date

  @Prop({ type: Number, required: true })
  stitchingFee: number; // Stitching Fee

  @Prop({
    type: String,
    default: "Pending",
    enum: ["Pending", "In Progress", "Completed", "Cancelled"],
  })
  status: string; // Booking status

  @Prop({ type: [String], default: [] })
  pictures: string[]; // Array of picture URLs/paths
}

export const SuitBookingSchema = SchemaFactory.createForClass(SuitBooking);
