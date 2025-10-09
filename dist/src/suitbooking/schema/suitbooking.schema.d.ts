import { Document, Types } from "mongoose";
export type SuitBookingDocument = SuitBooking & Document;
export declare class SuitBooking {
    userId: Types.ObjectId;
    customerId: Types.ObjectId;
    measurementId: Types.ObjectId;
    bookingDate: Date;
    measurementDate: Date;
    completionDate: Date;
    stitchingFee: number;
    status: string;
    image: string[];
}
export declare const SuitBookingSchema: import("mongoose").Schema<SuitBooking, import("mongoose").Model<SuitBooking, any, any, any, Document<unknown, any, SuitBooking, any, {}> & SuitBooking & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SuitBooking, Document<unknown, {}, import("mongoose").FlatRecord<SuitBooking>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<SuitBooking> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
