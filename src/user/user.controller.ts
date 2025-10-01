import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schema/user.schema';
import { multerConfig } from '../config/multer.config';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // ✅ Create user with optional image upload
  @Post()
  @UseInterceptors(FileInterceptor('image', multerConfig))
  async create(
    @Body() createUserDto: CreateUserDto,
    @UploadedFile() file?: Express.Multer.File,
  ): Promise<User> {
    if (file) {
      createUserDto.image = file.path; // Cloudinary URL
    }
    return this.userService.create(createUserDto);
  }

  // ✅ Get all users
  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  // ✅ Get single user by ID
  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  // ✅ Update user with optional image upload
  @Patch(':id')
  @UseInterceptors(FileInterceptor('image', multerConfig))
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @UploadedFile() file?: Express.Multer.File,
  ): Promise<User> {
    if (file) {
      updateUserDto.image = file.path; // replace with new Cloudinary URL
    }
    return this.userService.update(id, updateUserDto);
  }

  // ✅ Delete user
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
