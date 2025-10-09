// src/seed.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { User, UserDocument } from './user/schema/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { getModelToken } from '@nestjs/mongoose';

async function seed() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const userModel = app.get<Model<UserDocument>>(getModelToken(User.name));

  const usersToSeed = [
    {
      UserId:'68e3aa100c95f0836b7561cf',
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
    // Check if email or phone already exists
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
