import { SuitBookingService } from './suitbooking.service';
import { CreateSuitBookingDto } from './dto/create-suitbooking.dto';
export declare class SuitBookingController {
    private readonly suitBookingService;
    constructor(suitBookingService: SuitBookingService);
    create(createSuitBookingDto: CreateSuitBookingDto, files?: Express.Multer.File[]): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    remove(id: string): Promise<any>;
}
