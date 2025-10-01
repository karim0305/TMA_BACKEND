import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schema/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  // ✅ Create new user with checks
  async create(createUserDto: CreateUserDto): Promise<User> {
    // Check for missing required fields (manual check in case class-validator missed something)
    const emptyFields = Object.entries(createUserDto)
      .filter(([_, value]) => value === undefined || value === null || value === '')
      .map(([key]) => key);

    if (emptyFields.length) {
      throw new BadRequestException({
        message: '❌ Required fields missing',
        fields: emptyFields,
      });
    }

    // Check for duplicate email
    const existingEmail = await this.userModel
      .findOne({ email: createUserDto.email })
      .exec();
    if (existingEmail) {
      throw new BadRequestException({
        message: '❌ Email already exists',
        field: 'email',
      });
    }

    // Check for duplicate phone
    const existingPhone = await this.userModel
      .findOne({ phone: createUserDto.phone })
      .exec();
    if (existingPhone) {
      throw new BadRequestException({
        message: '❌ Phone number already exists',
        field: 'phone',
      });
    }

    // Check for duplicate CNIC
    const existingCnic = await this.userModel
      .findOne({ cnic: createUserDto.cnic })
      .exec();
    if (existingCnic) {
      throw new BadRequestException({
        message: '❌ CNIC already exists',
        field: 'cnic',
      });
    }

    try {
      // Hash password before saving
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(
        createUserDto.password,
        saltRounds,
      );

      const createdUser = new this.userModel({
        ...createUserDto,
        password: hashedPassword,
      });

      return await createdUser.save();
    } catch (error) {
      throw new BadRequestException({
        message: '❌ Failed to create user',
        error: error.message,
      });
    }
  }

  // ✅ Get all users
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  // ✅ Get single user by ID
  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException({
        message: '❌ User not found',
        field: 'id',
      });
    }
    return user;
  }

  // ✅ Update user by ID
  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    // Prevent duplicate email
    if (updateUserDto.email) {
      const existingUser = await this.userModel
        .findOne({ email: updateUserDto.email })
        .exec();
      if (existingUser && existingUser.id !== id) {
        throw new BadRequestException({
          message: '❌ Email already exists',
          field: 'email',
        });
      }
    }

    // Prevent duplicate phone
    if (updateUserDto.phone) {
      const existingUser = await this.userModel
        .findOne({ phone: updateUserDto.phone })
        .exec();
      if (existingUser && existingUser.id !== id) {
        throw new BadRequestException({
          message: '❌ Phone already exists',
          field: 'phone',
        });
      }
    }

    // Prevent duplicate CNIC
    if (updateUserDto.cnic) {
      const existingUser = await this.userModel
        .findOne({ cnic: updateUserDto.cnic })
        .exec();
      if (existingUser && existingUser.id !== id) {
        throw new BadRequestException({
          message: '❌ CNIC already exists',
          field: 'cnic',
        });
      }
    }

    // If password is being updated → hash it
    if (updateUserDto.password) {
      const saltRounds = 10;
      updateUserDto.password = await bcrypt.hash(
        updateUserDto.password,
        saltRounds,
      );
    }

    const updatedUser = await this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();

    if (!updatedUser) {
      throw new NotFoundException({
        message: '❌ User not found',
        field: 'id',
      });
    }

    return updatedUser;
  }

  // ✅ Delete user by ID
  async remove(id: string): Promise<{ message: string }> {
    const result = await this.userModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException({
        message: '❌ User not found',
        field: 'id',
      });
    }
    return { message: '✅ User deleted successfully' };
  }
}
