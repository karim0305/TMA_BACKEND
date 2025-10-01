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
exports.SuitBookingSchema = exports.SuitBooking = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../../user/schema/user.schema");
const measurement_schema_1 = require("../../measurement/schema/measurement.schema");
let SuitBooking = class SuitBooking {
    customerId;
    measurementId;
    bookingDate;
    measurementDate;
    completionDate;
    stitchingFee;
    status;
    pictures;
};
exports.SuitBooking = SuitBooking;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: user_schema_1.User.name, required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], SuitBooking.prototype, "customerId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: measurement_schema_1.Measurement.name, required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], SuitBooking.prototype, "measurementId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, required: true }),
    __metadata("design:type", Date)
], SuitBooking.prototype, "bookingDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, required: true }),
    __metadata("design:type", Date)
], SuitBooking.prototype, "measurementDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, required: true }),
    __metadata("design:type", Date)
], SuitBooking.prototype, "completionDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], SuitBooking.prototype, "stitchingFee", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        default: "Pending",
        enum: ["Pending", "In Progress", "Completed", "Cancelled"],
    }),
    __metadata("design:type", String)
], SuitBooking.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], SuitBooking.prototype, "pictures", void 0);
exports.SuitBooking = SuitBooking = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], SuitBooking);
exports.SuitBookingSchema = mongoose_1.SchemaFactory.createForClass(SuitBooking);
//# sourceMappingURL=suitbooking.schema.js.map