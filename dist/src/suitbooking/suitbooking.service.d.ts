import { Model } from 'mongoose';
import { SuitBookingDocument } from './schema/suitbooking.schema';
import { CreateSuitBookingDto } from './dto/create-suitbooking.dto';
export declare class SuitBookingService {
    private readonly suitBookingModel;
    constructor(suitBookingModel: Model<SuitBookingDocument>);
    create(createSuitBookingDto: CreateSuitBookingDto, files?: Express.Multer.File[]): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    remove(id: string): Promise<any>;
}
