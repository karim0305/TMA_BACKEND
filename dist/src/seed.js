"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const user_schema_1 = require("./user/schema/user.schema");
const bcrypt = require("bcrypt");
const mongoose_1 = require("@nestjs/mongoose");
async function seed() {
    const app = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
    const userModel = app.get((0, mongoose_1.getModelToken)(user_schema_1.User.name));
    const usersToSeed = [
        {
            UserId: '68e3aa100c95f0836b7561cf',
            name: 'Super Admin',
            email: 'admin@example.com',
            phone: '0000000000',
            cnic: '00000-0000000-0',
            address: 'Head Office',
            role: 'Admin',
            image: 'https://via.placeholder.com/100',
            password: 'admin123',
        },
    ];
    for (const u of usersToSeed) {
        const existingUser = await userModel.findOne({
            $or: [{ email: u.email }, { phone: u.phone }],
        });
        if (existingUser) {
            console.log(`✅ User already exists with email or phone: ${existingUser.email} / ${existingUser.phone}`);
            continue;
        }
        const hashedPassword = await bcrypt.hash(u.password, 10);
        await userModel.create({
            ...u,
            password: hashedPassword,
            status: 'Active',
            lastLogin: new Date(),
        });
        console.log(`🎉 User created: ${u.email} / ${u.password}`);
    }
    await app.close();
}
seed();
//# sourceMappingURL=seed.js.map