"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const cloudinary_module_1 = require("./config/cloudinary.module");
const auth_module_module_1 = require("./user/auth/auth-module.module");
const user_module_1 = require("./user/user.module");
const measurement_module_1 = require("./measurement/measurement.module");
const suitbooking_module_1 = require("./suitbooking/suitbooking.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                validate: (config) => {
                    if (!config.JWT_SECRET) {
                        throw new Error('JWT_SECRET is required in .env');
                    }
                    if (!config.MONGODB_URI) {
                        throw new Error('MONGODB_URI is required in .env');
                    }
                    if (!config.JWT_EXPIRES_IN) {
                        throw new Error('JWT_EXPIRES_IN is required in .env');
                    }
                    if (!config.CLOUDINARY_CLOUD_NAME) {
                        throw new Error('CLOUDINARY_CLOUD_NAME is required in .env');
                    }
                    if (!config.CLOUDINARY_API_KEY) {
                        throw new Error('CLOUDINARY_API_KEY is required in .env');
                    }
                    if (!config.CLOUDINARY_API_SECRET) {
                        throw new Error('CLOUDINARY_API_SECRET is required in .env');
                    }
                    return config;
                },
            }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    uri: configService.get('MONGODB_URI'),
                }),
            }),
            cloudinary_module_1.CloudinaryModule,
            auth_module_module_1.AuthModule,
            user_module_1.UserModule,
            measurement_module_1.MeasurementModule,
            suitbooking_module_1.SuitbookingModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map