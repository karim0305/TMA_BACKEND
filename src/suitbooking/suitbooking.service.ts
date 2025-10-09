import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  SuitBooking,
  SuitBookingDocument,
} from './schema/suitbooking.schema';
import { CreateSuitBookingDto } from './dto/create-suitbooking.dto';
import { UpdateSuitbookingDto } from './dto/update-suitbooking.dto';

@Injectable()
export class SuitBookingService {
  constructor(
    @InjectModel(SuitBooking.name)
    private readonly suitBookingModel: Model<SuitBookingDocument>,
  ) {}

  // ✅ Create booking with uploaded images (Cloudinary via Multer handles upload)
  async create(
    createSuitBookingDto: CreateSuitBookingDto,
    files?: Express.Multer.File[],
  ): Promise<any> {
    try {
      const uploadedUrls: string[] = [];

      if (files && files.length > 0) {
        for (const file of files) {
          uploadedUrls.push(file.path); // file.path is Cloudinary URL
        }
      }

      const newBooking = new this.suitBookingModel({
        ...createSuitBookingDto,
        pictures: uploadedUrls,
      });

      await newBooking.save();

      return {
        success: true,
        message: '✅ Suit booking created successfully',
        data: newBooking,
      };
    } catch (error) {
      throw new BadRequestException({
        success: false,
        message: '❌ Failed to create booking',
        error: error.message,
      });
    }
  }

  // ✅ Get all bookings
  async findAll(): Promise<any> {
    const bookings = await this.suitBookingModel
      .find()
      .populate('customerId', 'name email phone')
      .populate('measurementId')
      .exec();

    return {
      success: true,
      message: '📋 All suit bookings fetched',
      data: bookings,
    };
  }


  async findAllWithUser(): Promise<any> {
  try {
    const bookings = await this.suitBookingModel
      .find()
      .populate('userId', 'name email phone') // 👈 populate user info
      .populate('customerId', 'name email phone') // 👈 already in your original code
      .populate('measurementId', 'measurementDate') // 👈 only bring date field
      .exec();

    return {
      success: true,
      message: '📋 All suit bookings with user and measurement details fetched',
      data: bookings,
    };
  } catch (error) {
    console.error('❌ Error fetching bookings with user info:', error);
    return {
      success: false,
      message: '❌ Failed to fetch bookings with user info',
      error: error.message,
    };
  }
}


  // ✅ Get booking by ID
  async findOne(id: string): Promise<any> {
    const booking = await this.suitBookingModel
      .findById(id)
      .populate('customerId', 'name email phone')
      .populate('measurementId')
      .exec();

    if (!booking) {
      throw new NotFoundException({
        success: false,
        message: `❌ Suit booking with ID ${id} not found`,
      });
    }

    return {
      success: true,
      message: '✅ Suit booking fetched successfully',
      data: booking,
    };
  }

    async update(id: string, updateSuitBookingDto: UpdateSuitbookingDto) {
    const updatedBooking = await this.suitBookingModel.findByIdAndUpdate(
      id,
      { $set: updateSuitBookingDto },
      { new: true },
    );

    if (!updatedBooking) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }

    return {
      success: true,
      message: '✅ Booking updated successfully',
      data: updatedBooking,
    };
  }

  // ✅ Delete booking
  async remove(id: string): Promise<any> {
    const result = await this.suitBookingModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException({
        success: false,
        message: `❌ Suit booking with ID ${id} not found`,
      });
    }
    return {
      success: true,
      message: '🗑️ Suit booking deleted successfully',
    };
  }
}
