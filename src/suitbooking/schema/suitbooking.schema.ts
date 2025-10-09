import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { User } from "../../user/schema/user.schema";
import { Measurement } from "../../measurement/schema/measurement.schema";

export type SuitBookingDocument = SuitBooking & Document;

@Schema({ timestamps: true })
export class SuitBooking {

   @Prop({ type: Types.ObjectId, ref: User.name,})
  userId: Types.ObjectId; // Reference to user (User)


  @Prop({ type: Types.ObjectId, ref: User.name,  })
  customerId: Types.ObjectId; // Reference to customer (User)

  @Prop({ type: Types.ObjectId, ref: Measurement.name,  })
  measurementId: Types.ObjectId; // Reference to measurement

  @Prop({ type: Date, })
  bookingDate: Date; // Booking Date

  @Prop({ type: Date,  })
  measurementDate: Date; // Measurement Date

  @Prop({ type: Date, })
  completionDate: Date; // Completion Date

  @Prop({ type: Number,})
  stitchingFee: number; // Stitching Fee

  @Prop({
    type: String,
    default: "Pending",
    enum: ["Pending", "In Progress", "Completed", "Cancelled"],
  })
  status: string; // Booking status

  @Prop({ type: [String], default: [] })
  image: string[]; // Array of image URLs/paths
}

export const SuitBookingSchema = SchemaFactory.createForClass(SuitBooking);
