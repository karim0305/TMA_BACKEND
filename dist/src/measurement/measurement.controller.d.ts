import { MeasurementService } from "./measurement.service";
import { CreateMeasurementDto } from "./dto/create-measurement.dto";
export declare class MeasurementController {
    private readonly measurementService;
    constructor(measurementService: MeasurementService);
    create(createMeasurementDto: CreateMeasurementDto): Promise<{
        success: boolean;
        message: string;
        data: import("mongoose").Document<unknown, {}, import("./schema/measurement.schema").MeasurementDocument, {}, {}> & import("./schema/measurement.schema").Measurement & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    } | {
        success: boolean;
        message: string;
        data?: undefined;
    }>;
    findAll(): Promise<{
        success: boolean;
        message: string;
        data: (import("mongoose").Document<unknown, {}, import("./schema/measurement.schema").MeasurementDocument, {}, {}> & import("./schema/measurement.schema").Measurement & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
    } | {
        success: boolean;
        message: string;
        data?: undefined;
    }>;
    findOne(id: string): Promise<{
        success: boolean;
        message: string;
        data?: undefined;
    } | {
        success: boolean;
        message: string;
        data: import("mongoose").Document<unknown, {}, import("./schema/measurement.schema").MeasurementDocument, {}, {}> & import("./schema/measurement.schema").Measurement & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    findByCustomer(customerId: string): Promise<{
        success: boolean;
        message: string;
        data: (import("mongoose").Document<unknown, {}, import("./schema/measurement.schema").MeasurementDocument, {}, {}> & import("./schema/measurement.schema").Measurement & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
    } | {
        success: boolean;
        message: string;
        data?: undefined;
    }>;
    remove(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
