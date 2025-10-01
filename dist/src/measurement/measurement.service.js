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
exports.MeasurementService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const measurement_schema_1 = require("./schema/measurement.schema");
let MeasurementService = class MeasurementService {
    measurementModel;
    constructor(measurementModel) {
        this.measurementModel = measurementModel;
    }
    async create(createMeasurementDto) {
        try {
            const measurement = new this.measurementModel(createMeasurementDto);
            const saved = await measurement.save();
            return {
                success: true,
                message: "✅ Measurement created successfully",
                data: saved,
            };
        }
        catch (error) {
            return {
                success: false,
                message: `❌ Failed to create measurement: ${error.message}`,
            };
        }
    }
    async findAll() {
        try {
            const measurements = await this.measurementModel
                .find()
                .populate("customerId", "name email phone")
                .exec();
            return {
                success: true,
                message: "✅ Measurements fetched successfully",
                data: measurements,
            };
        }
        catch (error) {
            return {
                success: false,
                message: `❌ Failed to fetch measurements: ${error.message}`,
            };
        }
    }
    async findOne(id) {
        try {
            const measurement = await this.measurementModel
                .findById(id)
                .populate("customerId", "name email phone")
                .exec();
            if (!measurement) {
                return {
                    success: false,
                    message: `❌ Measurement with ID ${id} not found`,
                };
            }
            return {
                success: true,
                message: "✅ Measurement fetched successfully",
                data: measurement,
            };
        }
        catch (error) {
            return {
                success: false,
                message: `❌ Failed to fetch measurement: ${error.message}`,
            };
        }
    }
    async findByCustomer(customerId) {
        try {
            const measurements = await this.measurementModel
                .find({ customerId })
                .populate("customerId", "name email phone")
                .exec();
            return {
                success: true,
                message: "✅ Customer measurements fetched successfully",
                data: measurements,
            };
        }
        catch (error) {
            return {
                success: false,
                message: `❌ Failed to fetch customer measurements: ${error.message}`,
            };
        }
    }
    async remove(id) {
        try {
            const result = await this.measurementModel.findByIdAndDelete(id).exec();
            if (!result) {
                return {
                    success: false,
                    message: `❌ Measurement with ID ${id} not found`,
                };
            }
            return {
                success: true,
                message: "✅ Measurement deleted successfully",
            };
        }
        catch (error) {
            return {
                success: false,
                message: `❌ Failed to delete measurement: ${error.message}`,
            };
        }
    }
};
exports.MeasurementService = MeasurementService;
exports.MeasurementService = MeasurementService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(measurement_schema_1.Measurement.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MeasurementService);
//# sourceMappingURL=measurement.service.js.map