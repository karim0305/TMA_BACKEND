"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSuitBookingDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateSuitBookingDto {
    customerId;
    measurementId;
    bookingDate;
    measurementDate;
    completionDate;
    stitchingFee;
    status;
    pictures;
}
exports.CreateSuitBookingDto = CreateSuitBookingDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Customer ID (MongoDB ObjectId)",
        example: "652d4f8c8d6a1b2f9f8a7c12",
    }),
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSuitBookingDto.prototype, "customerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Measurement ID (MongoDB ObjectId)",
        example: "653a1f8c9e7b2d3f8c1a9b45",
    }),
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSuitBookingDto.prototype, "measurementId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Booking date (ISO string)",
        example: "2025-09-28T00:00:00.000Z",
    }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], CreateSuitBookingDto.prototype, "bookingDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Measurement date (ISO string)",
        example: "2025-09-30T00:00:00.000Z",
    }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], CreateSuitBookingDto.prototype, "measurementDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Completion date (ISO string)",
        example: "2025-10-05T00:00:00.000Z",
    }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], CreateSuitBookingDto.prototype, "completionDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Stitching fee in PKR",
        example: 5000,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateSuitBookingDto.prototype, "stitchingFee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Status of the booking",
        example: "Pending",
        enum: ["Pending", "In Progress", "Completed", "Cancelled"],
        default: "Pending",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(["Pending", "In Progress", "Completed", "Cancelled"]),
    __metadata("design:type", String)
], CreateSuitBookingDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Multiple picture URLs or file paths",
        example: [
            "uploads/bookings/booking1_pic1.jpg",
            "uploads/bookings/booking1_pic2.jpg",
        ],
        type: [String],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateSuitBookingDto.prototype, "pictures", void 0);
//# sourceMappingURL=create-suitbooking.dto.js.map