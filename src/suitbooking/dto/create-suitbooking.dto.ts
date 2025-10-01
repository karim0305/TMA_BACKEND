import {
  IsNotEmpty,
  IsMongoId,
  IsDateString,
  IsNumber,
  IsOptional,
  IsEnum,
  IsArray,
  IsString,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateSuitBookingDto {
  @ApiProperty({
    description: "Customer ID (MongoDB ObjectId)",
    example: "652d4f8c8d6a1b2f9f8a7c12",
  })
  @IsMongoId()
  @IsNotEmpty()
  customerId: string;

  @ApiProperty({
    description: "Measurement ID (MongoDB ObjectId)",
    example: "653a1f8c9e7b2d3f8c1a9b45",
  })
  @IsMongoId()
  @IsNotEmpty()
  measurementId: string;

  @ApiProperty({
    description: "Booking date (ISO string)",
    example: "2025-09-28T00:00:00.000Z",
  })
  @IsDateString()
  @IsNotEmpty()
  bookingDate: Date;

  @ApiProperty({
    description: "Measurement date (ISO string)",
    example: "2025-09-30T00:00:00.000Z",
  })
  @IsDateString()
  @IsNotEmpty()
  measurementDate: Date;

  @ApiProperty({
    description: "Completion date (ISO string)",
    example: "2025-10-05T00:00:00.000Z",
  })
  @IsDateString()
  @IsNotEmpty()
  completionDate: Date;

  @ApiProperty({
    description: "Stitching fee in PKR",
    example: 5000,
  })
  @IsNumber()
  @IsNotEmpty()
  stitchingFee: number;

  @ApiProperty({
    description: "Status of the booking",
    example: "Pending",
    enum: ["Pending", "In Progress", "Completed", "Cancelled"],
    default: "Pending",
  })
  @IsOptional()
  @IsEnum(["Pending", "In Progress", "Completed", "Cancelled"])
  status?: string;

  @ApiProperty({
    description: "Multiple picture URLs or file paths",
    example: [
      "uploads/bookings/booking1_pic1.jpg",
      "uploads/bookings/booking1_pic2.jpg",
    ],
    type: [String],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  pictures?: string[];
}
