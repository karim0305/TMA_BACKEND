import { Model } from "mongoose";
import { Measurement, MeasurementDocument } from "./schema/measurement.schema";
import { CreateMeasurementDto } from "./dto/create-measurement.dto";
export declare class MeasurementService {
    private measurementModel;
    constructor(measurementModel: Model<MeasurementDocument>);
    create(createMeasurementDto: CreateMeasurementDto): Promise<{
        success: boolean;
        message: string;
        data: import("mongoose").Document<unknown, {}, MeasurementDocument, {}, {}> & Measurement & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
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
        data: (import("mongoose").Document<unknown, {}, MeasurementDocument, {}, {}> & Measurement & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
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
        data: import("mongoose").Document<unknown, {}, MeasurementDocument, {}, {}> & Measurement & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
    }>;
    findByCustomer(customerId: string): Promise<{
        success: boolean;
        message: string;
        data: (import("mongoose").Document<unknown, {}, MeasurementDocument, {}, {}> & Measurement & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
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
