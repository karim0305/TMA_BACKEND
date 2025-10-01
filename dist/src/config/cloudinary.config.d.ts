import { ConfigService } from '@nestjs/config';
export declare const CloudinaryProvider: {
    provide: string;
    inject: (typeof ConfigService)[];
    useFactory: (configService: ConfigService) => import("cloudinary").ConfigOptions;
};
