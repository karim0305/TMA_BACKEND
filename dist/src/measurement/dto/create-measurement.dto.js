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
exports.CreateMeasurementDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateMeasurementDto {
    UserId;
    customerId;
    date;
    Chest;
    Waist;
    Length;
    Hips;
    Shoulder;
    Sleeve;
    Bicep;
    Wrist;
    Neck;
    Armhole;
    TrouserWaist;
    TrouserLength;
    Thigh;
    Knee;
    Bottom;
    Inseam;
    Rise;
    WaistcoatLength;
}
exports.CreateMeasurementDto = CreateMeasurementDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "User ID (MongoDB ObjectId)",
        example: "652d4f8c8d6a1b2f9f8a7c12",
    }),
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMeasurementDto.prototype, "UserId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Customer ID (MongoDB ObjectId)",
        example: "652d4f8c8d6a1b2f9f8a7c12",
    }),
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMeasurementDto.prototype, "customerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Measurement date",
        example: "2025-10-01T10:00:00.000Z",
    }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], CreateMeasurementDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "Chest size", example: "40" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMeasurementDto.prototype, "Chest", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "Waist size", example: "32" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMeasurementDto.prototype, "Waist", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "Length size", example: "42" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMeasurementDto.prototype, "Length", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "Hips size", example: "38" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMeasurementDto.prototype, "Hips", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "Shoulder size", example: "18" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMeasurementDto.prototype, "Shoulder", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "Sleeve length", example: "24" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMeasurementDto.prototype, "Sleeve", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "Bicep size", example: "14" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMeasurementDto.prototype, "Bicep", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "Wrist size", example: "7" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMeasurementDto.prototype, "Wrist", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "Neck size", example: "15" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMeasurementDto.prototype, "Neck", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "Armhole size", example: "17" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMeasurementDto.prototype, "Armhole", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "Trouser waist size", example: "32" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMeasurementDto.prototype, "TrouserWaist", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "Trouser length", example: "40" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMeasurementDto.prototype, "TrouserLength", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "Thigh size", example: "22" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMeasurementDto.prototype, "Thigh", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "Knee size", example: "15" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMeasurementDto.prototype, "Knee", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "Bottom size", example: "14" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMeasurementDto.prototype, "Bottom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "Inseam length", example: "32" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMeasurementDto.prototype, "Inseam", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "Rise length", example: "11" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMeasurementDto.prototype, "Rise", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "Waistcoat length", example: "24" }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMeasurementDto.prototype, "WaistcoatLength", void 0);
//# sourceMappingURL=create-measurement.dto.js.map