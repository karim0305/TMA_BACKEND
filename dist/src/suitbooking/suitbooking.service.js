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
exports.SuitBookingService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const suitbooking_schema_1 = require("./schema/suitbooking.schema");
let SuitBookingService = class SuitBookingService {
    suitBookingModel;
    constructor(suitBookingModel) {
        this.suitBookingModel = suitBookingModel;
    }
    async create(createSuitBookingDto, files) {
        try {
            const uploadedUrls = [];
            if (files && files.length > 0) {
                for (const file of files) {
                    uploadedUrls.push(file.path);
                }
            }
            const newBooking = new this.suitBookingModel({
                ...createSuitBookingDto,
                pictures: uploadedUrls,
            });
            await newBooking.save();
            return {
                success: true,
                message: '✅ Suit booking created successfully',
                data: newBooking,
            };
        }
        catch (error) {
            throw new common_1.BadRequestException({
                success: false,
                message: '❌ Failed to create booking',
                error: error.message,
            });
        }
    }
    async findAll() {
        const bookings = await this.suitBookingModel
            .find()
            .populate('customerId', 'name email phone')
            .populate('measurementId')
            .exec();
        return {
            success: true,
            message: '📋 All suit bookings fetched',
            data: bookings,
        };
    }
    async findOne(id) {
        const booking = await this.suitBookingModel
            .findById(id)
            .populate('customerId', 'name email phone')
            .populate('measurementId')
            .exec();
        if (!booking) {
            throw new common_1.NotFoundException({
                success: false,
                message: `❌ Suit booking with ID ${id} not found`,
            });
        }
        return {
            success: true,
            message: '✅ Suit booking fetched successfully',
            data: booking,
        };
    }
    async remove(id) {
        const result = await this.suitBookingModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException({
                success: false,
                message: `❌ Suit booking with ID ${id} not found`,
            });
        }
        return {
            success: true,
            message: '🗑️ Suit booking deleted successfully',
        };
    }
};
exports.SuitBookingService = SuitBookingService;
exports.SuitBookingService = SuitBookingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(suitbooking_schema_1.SuitBooking.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SuitBookingService);
//# sourceMappingURL=suitbooking.service.js.map