export declare class CreateSuitBookingDto {
    userId: string;
    customerId: string;
    measurementId: string;
    bookingDate: Date;
    measurementDate: Date;
    completionDate: Date;
    stitchingFee: number;
    status?: string;
    image?: string[];
}
