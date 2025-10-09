import { SuitBookingService } from './suitbooking.service';
import { CreateSuitBookingDto } from './dto/create-suitbooking.dto';
import { UpdateSuitbookingDto } from './dto/update-suitbooking.dto';
export declare class SuitBookingController {
    private readonly suitBookingService;
    constructor(suitBookingService: SuitBookingService);
    create(createSuitBookingDto: CreateSuitBookingDto, files?: Express.Multer.File[]): Promise<any>;
    findAll(): Promise<any>;
    findAllWithUser(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateSuitBookingDto: UpdateSuitbookingDto): Promise<{
        success: boolean;
        message: string;
        data: import("mongoose").Document<unknown, {}, import("./schema/suitbooking.schema").SuitBookingDocument, {}, {}> & import("./schema/suitbooking.schema").SuitBooking & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    remove(id: string): Promise<any>;
}
