import { Model } from 'mongoose';
import { SuitBooking, SuitBookingDocument } from './schema/suitbooking.schema';
import { CreateSuitBookingDto } from './dto/create-suitbooking.dto';
import { UpdateSuitbookingDto } from './dto/update-suitbooking.dto';
export declare class SuitBookingService {
    private readonly suitBookingModel;
    constructor(suitBookingModel: Model<SuitBookingDocument>);
    create(createSuitBookingDto: CreateSuitBookingDto, files?: Express.Multer.File[]): Promise<any>;
    findAll(): Promise<any>;
    findAllWithUser(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateSuitBookingDto: UpdateSuitbookingDto): Promise<{
        success: boolean;
        message: string;
        data: import("mongoose").Document<unknown, {}, SuitBookingDocument, {}, {}> & SuitBooking & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    remove(id: string): Promise<any>;
}
