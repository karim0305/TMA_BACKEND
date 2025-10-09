import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  UseInterceptors,
  UploadedFiles,
  Patch,
} from '@nestjs/common';
import { SuitBookingService } from './suitbooking.service';
import { CreateSuitBookingDto } from './dto/create-suitbooking.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiConsumes,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';
import { UpdateSuitbookingDto } from './dto/update-suitbooking.dto';

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


 @ApiOperation({ summary: 'Get all suit bookings with name and measurement' })
  @ApiResponse({ status: 200, description: '📋 All bookings fetched' })
   @Get('with-user')
  async findAllWithUser() {
    return this.suitBookingService.findAllWithUser();
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



   @Patch(':id')
  @ApiOperation({ summary: 'Update suit booking (partial update)' })
  @ApiParam({ name: 'id', description: 'Booking MongoDB ObjectId' })
  update(
    @Param('id') id: string,
    @Body() updateSuitBookingDto: UpdateSuitbookingDto,
  ) {
    return this.suitBookingService.update(id, updateSuitBookingDto);
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
