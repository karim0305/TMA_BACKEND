import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string; // Name

  @Prop({ required: true, unique: true, lowercase: true })
  email: string; // Email

  @Prop({ required: true })
  phone: string; // Phone

  @Prop({ required: true, unique: true })
  cnic: string; // CNIC

  @Prop()
  address: string; // Address

  @Prop({ default: "customer" })
  role: string; // Role (Super Admin, Teacher, Student etc.)

  @Prop({ default: "https://via.placeholder.com/100" })
  image: string; // Profile image

  @Prop({ type: Date, default: Date.now })
  lastLogin: Date; // last login tracking

  @Prop({ required: true, default: "Active" })
  status: string; // Active / Inactive

  @Prop({ required: true, default: "123456" })
  password: string; // Hashed password
}

export const UserSchema = SchemaFactory.createForClass(User);
