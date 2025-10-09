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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuitBookingController = void 0;
const common_1 = require("@nestjs/common");
const suitbooking_service_1 = require("./suitbooking.service");
const create_suitbooking_dto_1 = require("./dto/create-suitbooking.dto");
const swagger_1 = require("@nestjs/swagger");
const update_suitbooking_dto_1 = require("./dto/update-suitbooking.dto");
let SuitBookingController = class SuitBookingController {
    suitBookingService;
    constructor(suitBookingService) {
        this.suitBookingService = suitBookingService;
    }
    async create(createSuitBookingDto, files) {
        return this.suitBookingService.create(createSuitBookingDto, files);
    }
    async findAll() {
        return this.suitBookingService.findAll();
    }
    async findAllWithUser() {
        return this.suitBookingService.findAllWithUser();
    }
    async findOne(id) {
        return this.suitBookingService.findOne(id);
    }
    update(id, updateSuitBookingDto) {
        return this.suitBookingService.update(id, updateSuitBookingDto);
    }
    async remove(id) {
        return this.suitBookingService.remove(id);
    }
};
exports.SuitBookingController = SuitBookingController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new suit booking with pictures' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        description: 'Suit booking payload with optional images',
        type: create_suitbooking_dto_1.CreateSuitBookingDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: '✅ Suit booking created successfully',
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_suitbooking_dto_1.CreateSuitBookingDto, Array]),
    __metadata("design:returntype", Promise)
], SuitBookingController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all suit bookings' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '📋 All bookings fetched' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SuitBookingController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all suit bookings with name and measurement' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '📋 All bookings fetched' }),
    (0, common_1.Get)('with-user'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SuitBookingController.prototype, "findAllWithUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a suit booking by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'MongoDB ObjectId of the booking' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '✅ Booking fetched successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: '❌ Booking not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SuitBookingController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update suit booking (partial update)' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Booking MongoDB ObjectId' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_suitbooking_dto_1.UpdateSuitbookingDto]),
    __metadata("design:returntype", void 0)
], SuitBookingController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a suit booking by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'MongoDB ObjectId of the booking' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '🗑️ Booking deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: '❌ Booking not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SuitBookingController.prototype, "remove", null);
exports.SuitBookingController = SuitBookingController = __decorate([
    (0, swagger_1.ApiTags)('Suit Bookings'),
    (0, common_1.Controller)('suit-bookings'),
    __metadata("design:paramtypes", [suitbooking_service_1.SuitBookingService])
], SuitBookingController);
//# sourceMappingURL=suitbooking.controller.js.map