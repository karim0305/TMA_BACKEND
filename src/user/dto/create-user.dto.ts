import { 
  IsDate, 
  IsEmail, 
  IsNotEmpty, 
  IsOptional, 
  IsString, 
  MinLength 
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '../enum/user.enum';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @ApiProperty({
    description: 'Full name of the user',
    example: 'Momin Karim',
  })
  @IsNotEmpty({ message: '❌ Name is required' })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Email address of the user',
    example: 'momin@example.com',
  })
  @IsNotEmpty({ message: '❌ Email is required' })
  @IsEmail({}, { message: '❌ Invalid email address' })
  email: string;

  @ApiProperty({
    description: 'Phone number of the user',
    example: '03001234567',
  })
  @IsNotEmpty({ message: '❌ Phone number is required' })
  @IsString()
  phone: string;

  @ApiProperty({
    description: 'CNIC of the user',
    example: '35202-1234567-1',
  })
  @IsNotEmpty({ message: '❌ CNIC is required' })
  @IsString()
  cnic: string;

  @ApiProperty({
    description: 'Residential address of the user',
    example: 'Lahore',
  })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty({
    description: 'Profile image of the user',
    example: 'https://via.placeholder.com/100',
  })
  @IsOptional()
  @IsString()
  image?: string;

  @ApiProperty({
    description: 'Last login of the user',
    example: new Date(),
    default: new Date(),
  })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  lastLogin?: Date;

  @ApiProperty({
    description: 'Status of the user',
    example: 'Active',
    default: 'Active',
  })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiProperty({
    description: 'Password for the user account (min 6 characters)',
    example: 'password123',
    minLength: 6,
    default: '123456',
  })
  @IsNotEmpty({ message: '❌ Password is required' })
  @MinLength(6, { message: '❌ Password must be at least 6 characters' })
  password: string;

  @ApiProperty({
    description: 'Role of the user',
    example: 'Admin',
    enum: UserRole,
    default: UserRole.CUSTOMER,
  })
  @IsNotEmpty({ message: '❌ Role is required' })
  role: UserRole;
}
