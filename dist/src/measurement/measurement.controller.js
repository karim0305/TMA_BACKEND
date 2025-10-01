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
exports.MeasurementController = void 0;
const common_1 = require("@nestjs/common");
const measurement_service_1 = require("./measurement.service");
const create_measurement_dto_1 = require("./dto/create-measurement.dto");
const swagger_1 = require("@nestjs/swagger");
let MeasurementController = class MeasurementController {
    measurementService;
    constructor(measurementService) {
        this.measurementService = measurementService;
    }
    async create(createMeasurementDto) {
        return this.measurementService.create(createMeasurementDto);
    }
    async findAll() {
        return this.measurementService.findAll();
    }
    async findOne(id) {
        return this.measurementService.findOne(id);
    }
    async findByCustomer(customerId) {
        return this.measurementService.findByCustomer(customerId);
    }
    async remove(id) {
        return this.measurementService.remove(id);
    }
};
exports.MeasurementController = MeasurementController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: "Create a new measurement" }),
    (0, swagger_1.ApiBody)({ type: create_measurement_dto_1.CreateMeasurementDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Measurement created successfully" }),
    (0, swagger_1.ApiResponse)({ status: 400, description: "Invalid input data" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_measurement_dto_1.CreateMeasurementDto]),
    __metadata("design:returntype", Promise)
], MeasurementController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "Get all measurements" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "List of measurements" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MeasurementController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Get measurement by ID" }),
    (0, swagger_1.ApiParam)({ name: "id", type: String, description: "Measurement ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Measurement found" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Measurement not found" }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MeasurementController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)("customer/:customerId"),
    (0, swagger_1.ApiOperation)({ summary: "Get measurements by customer ID" }),
    (0, swagger_1.ApiParam)({ name: "customerId", type: String, description: "Customer ID (User ObjectId)" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "List of measurements for customer" }),
    __param(0, (0, common_1.Param)("customerId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MeasurementController.prototype, "findByCustomer", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Delete measurement by ID" }),
    (0, swagger_1.ApiParam)({ name: "id", type: String, description: "Measurement ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Measurement deleted successfully" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Measurement not found" }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MeasurementController.prototype, "remove", null);
exports.MeasurementController = MeasurementController = __decorate([
    (0, swagger_1.ApiTags)("Measurements"),
    (0, common_1.Controller)("measurements"),
    __metadata("design:paramtypes", [measurement_service_1.MeasurementService])
], MeasurementController);
//# sourceMappingURL=measurement.controller.js.map