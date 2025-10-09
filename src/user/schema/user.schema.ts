import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {

  @Prop({ type: Types.ObjectId, ref: User.name, required: false })
  UserId: Types.ObjectId; // Reference to User (user)
  
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

  @Prop({ default: "Customer" })
  role: string; // 

  @Prop({ default: "https://via.placeholder.com/100" })
  image: string; // Profile image

  @Prop({ type: Date, default: Date.now })
  lastLogin: Date; // last login tracking

  @Prop({ required: true, default: "Active" })
  status: string; // Active / Inactive

  @Prop({ default: "123456" })
  password: string; // Hashed password
}

export const UserSchema = SchemaFactory.createForClass(User);
