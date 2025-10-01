import { Document, Types } from "mongoose";
export type MeasurementDocument = Measurement & Document;
export declare class Measurement {
    customerId: Types.ObjectId;
    date: Date;
    Chest: string;
    Waist: string;
    Length: string;
    Hips: string;
    Shoulder: string;
    Sleeve: string;
    Bicep: string;
    Wrist: string;
    Neck: string;
    Armhole: string;
    TrouserWaist: string;
    TrouserLength: string;
    Thigh: string;
    Knee: string;
    Bottom: string;
    Inseam: string;
    Rise: string;
    WaistcoatLength: string;
}
export declare const MeasurementSchema: import("mongoose").Schema<Measurement, import("mongoose").Model<Measurement, any, any, any, Document<unknown, any, Measurement, any, {}> & Measurement & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Measurement, Document<unknown, {}, import("mongoose").FlatRecord<Measurement>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Measurement> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
