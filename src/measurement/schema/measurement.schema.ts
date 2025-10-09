import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { User } from "../../user/schema/user.schema"; // adjust path if needed

export type MeasurementDocument = Measurement & Document;

@Schema({ timestamps: true })
export class Measurement {
  @Prop({ type: Types.ObjectId, ref: User.name, required: true })
  UserId: Types.ObjectId; // Reference to User (user)


  @Prop({ type: Types.ObjectId, ref: User.name, required: true })
  customerId: Types.ObjectId; // Reference to User (customer)

  @Prop({ type: Date, required: true })
  date: Date;

  @Prop({ type: String })
  Chest: string;

  @Prop({ type: String })
  Waist: string;

  @Prop({ type: String })
  Length: string;

  @Prop({ type: String })
  Hips: string;

  @Prop({ type: String })
  Shoulder: string;

  @Prop({ type: String })
  Sleeve: string;

  @Prop({ type: String })
  Bicep: string;

  @Prop({ type: String })
  Wrist: string;

  @Prop({ type: String })
  Neck: string;

  @Prop({ type: String })
  Armhole: string;

  @Prop({ type: String })
  TrouserWaist: string;

  @Prop({ type: String })
  TrouserLength: string;

  @Prop({ type: String })
  Thigh: string;

  @Prop({ type: String })
  Knee: string;

  @Prop({ type: String })
  Bottom: string;

  @Prop({ type: String })
  Inseam: string;

  @Prop({ type: String })
  Rise: string;

  @Prop({ type: String })
  WaistcoatLength: string;
}

export const MeasurementSchema = SchemaFactory.createForClass(Measurement);
