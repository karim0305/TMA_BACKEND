import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { SuitBookingService } from './suitbooking.service';
import { CreateSuitBookingDto } from './dto/create-suitbooking.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { multerConfig } from '../config/multer.config';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiConsumes,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('Suit Bookings') // Swagger group
@Controller('suit-bookings')
export class SuitBookingController {
  constructor(private readonly suitBookingService: SuitBookingService) {}

  // ✅ Create booking with multiple images
  @Post()
  @ApiOperation({ summary: 'Create a new suit booking with pictures' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Suit booking payload with optional images',
    type: CreateSuitBookingDto,
  })
  @ApiResponse({
    status: 201,
    description: '✅ Suit booking created successfully',
  })
  @UseInterceptors(FilesInterceptor('pictures', 5, multerConfig)) // up to 5 images
  async create(
    @Body() createSuitBookingDto: CreateSuitBookingDto,
    @UploadedFiles() files?: Express.Multer.File[],
  ) {
    return this.suitBookingService.create(createSuitBookingDto, files);
  }

  // ✅ Get all bookings
  @Get()
  @ApiOperation({ summary: 'Get all suit bookings' })
  @ApiResponse({ status: 200, description: '📋 All bookings fetched' })
  async findAll() {
    return this.suitBookingService.findAll();
  }

  // ✅ Get booking by ID
  @Get(':id')
  @ApiOperation({ summary: 'Get a suit booking by ID' })
  @ApiParam({ name: 'id', description: 'MongoDB ObjectId of the booking' })
  @ApiResponse({ status: 200, description: '✅ Booking fetched successfully' })
  @ApiResponse({ status: 404, description: '❌ Booking not found' })
  async findOne(@Param('id') id: string) {
    return this.suitBookingService.findOne(id);
  }

  // ✅ Delete booking
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a suit booking by ID' })
  @ApiParam({ name: 'id', description: 'MongoDB ObjectId of the booking' })
  @ApiResponse({ status: 200, description: '🗑️ Booking deleted successfully' })
  @ApiResponse({ status: 404, description: '❌ Booking not found' })
  async remove(@Param('id') id: string) {
    return this.suitBookingService.remove(id);
  }
}
