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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("./schema/user.schema");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    userModel;
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(createUserDto) {
        Object.keys(createUserDto).forEach((key) => {
            if (createUserDto[key] === '') {
                delete createUserDto[key];
            }
        });
        const optionalFields = ['role', 'image', 'lastLogin', 'status', 'password'];
        const emptyFields = Object.entries(createUserDto)
            .filter(([key, value]) => !optionalFields.includes(key) &&
            (value === undefined || value === null || value === ''))
            .map(([key]) => key);
        if (emptyFields.length) {
            throw new common_1.BadRequestException({
                message: '❌ Required fields missing',
                fields: emptyFields,
            });
        }
        const existingEmail = await this.userModel.findOne({ email: createUserDto.email });
        if (existingEmail)
            throw new common_1.BadRequestException({ message: '❌ Email already exists', field: 'email' });
        const existingPhone = await this.userModel.findOne({ phone: createUserDto.phone });
        if (existingPhone)
            throw new common_1.BadRequestException({ message: '❌ Phone already exists', field: 'phone' });
        const existingCnic = await this.userModel.findOne({ cnic: createUserDto.cnic });
        if (existingCnic)
            throw new common_1.BadRequestException({ message: '❌ CNIC already exists', field: 'cnic' });
        try {
            let passwordToHash = createUserDto.password;
            if (!passwordToHash || passwordToHash.trim() === '') {
                passwordToHash = '123456';
            }
            const hashedPassword = await bcrypt.hash(passwordToHash, 10);
            const createdUser = new this.userModel({
                ...createUserDto,
                password: hashedPassword,
            });
            return await createdUser.save();
        }
        catch (error) {
            throw new common_1.BadRequestException({
                message: '❌ Failed to create user',
                error: error.message,
            });
        }
    }
    async findAll() {
        return this.userModel.find().exec();
    }
    async findOne(id) {
        const user = await this.userModel.findById(id).exec();
        if (!user) {
            throw new common_1.NotFoundException({ message: '❌ User not found', field: 'id' });
        }
        return user;
    }
    async update(id, updateUserDto) {
        if (updateUserDto.password) {
            updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
        }
        const updatedUser = await this.userModel
            .findByIdAndUpdate(id, updateUserDto, { new: true })
            .exec();
        if (!updatedUser) {
            throw new common_1.NotFoundException({ message: '❌ User not found', field: 'id' });
        }
        return updatedUser;
    }
    async remove(id) {
        const result = await this.userModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException({ message: '❌ User not found', field: 'id' });
        }
        return { message: '✅ User deleted successfully' };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
//# sourceMappingURL=user.service.js.map