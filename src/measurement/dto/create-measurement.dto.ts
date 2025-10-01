import { IsNotEmpty, IsOptional, IsString, IsDateString, IsMongoId } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateMeasurementDto {
  @ApiProperty({
    description: "Customer ID (MongoDB ObjectId)",
    example: "652d4f8c8d6a1b2f9f8a7c12",
  })
  @IsMongoId()
  @IsNotEmpty()
  customerId: string; // Reference to User (customer)

  @ApiProperty({
    description: "Measurement date",
    example: "2025-10-01T10:00:00.000Z",
  })
  @IsDateString()
  @IsNotEmpty()
  date: Date;

  @ApiPropertyOptional({ description: "Chest size", example: "40" })
  @IsOptional()
  @IsString()
  Chest?: string;

  @ApiPropertyOptional({ description: "Waist size", example: "32" })
  @IsOptional()
  @IsString()
  Waist?: string;

  @ApiPropertyOptional({ description: "Length size", example: "42" })
  @IsOptional()
  @IsString()
  Length?: string;

  @ApiPropertyOptional({ description: "Hips size", example: "38" })
  @IsOptional()
  @IsString()
  Hips?: string;

  @ApiPropertyOptional({ description: "Shoulder size", example: "18" })
  @IsOptional()
  @IsString()
  Shoulder?: string;

  @ApiPropertyOptional({ description: "Sleeve length", example: "24" })
  @IsOptional()
  @IsString()
  Sleeve?: string;

  @ApiPropertyOptional({ description: "Bicep size", example: "14" })
  @IsOptional()
  @IsString()
  Bicep?: string;

  @ApiPropertyOptional({ description: "Wrist size", example: "7" })
  @IsOptional()
  @IsString()
  Wrist?: string;

  @ApiPropertyOptional({ description: "Neck size", example: "15" })
  @IsOptional()
  @IsString()
  Neck?: string;

  @ApiPropertyOptional({ description: "Armhole size", example: "17" })
  @IsOptional()
  @IsString()
  Armhole?: string;

  @ApiPropertyOptional({ description: "Trouser waist size", example: "32" })
  @IsOptional()
  @IsString()
  TrouserWaist?: string;

  @ApiPropertyOptional({ description: "Trouser length", example: "40" })
  @IsOptional()
  @IsString()
  TrouserLength?: string;

  @ApiPropertyOptional({ description: "Thigh size", example: "22" })
  @IsOptional()
  @IsString()
  Thigh?: string;

  @ApiPropertyOptional({ description: "Knee size", example: "15" })
  @IsOptional()
  @IsString()
  Knee?: string;

  @ApiPropertyOptional({ description: "Bottom size", example: "14" })
  @IsOptional()
  @IsString()
  Bottom?: string;

  @ApiPropertyOptional({ description: "Inseam length", example: "32" })
  @IsOptional()
  @IsString()
  Inseam?: string;

  @ApiPropertyOptional({ description: "Rise length", example: "11" })
  @IsOptional()
  @IsString()
  Rise?: string;

  @ApiPropertyOptional({ description: "Waistcoat length", example: "24" })
  @IsOptional()
  @IsString()
  WaistcoatLength?: string;
}
