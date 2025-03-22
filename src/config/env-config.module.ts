import { Module } from "@nestjs/common";
import { ConfigModule, registerAs } from "@nestjs/config";
import { EnvConfig } from "@config/env.config";
import * as Joi from 'joi';

const envConfig = registerAs(
    'env',
    () =>
        ({
            PORT: parseInt(process.env.PORT || '3000', 10),
            DATABASE_URL: process.env.DATABASE_URL,
        }) as EnvConfig);

const validationSchema = Joi.object({
    PORT: Joi.number().port().required(),
    DATABASE_URL: Joi.string().uri().required(),
});

@Module({
    imports: [ConfigModule.forRoot({
        isGlobal: true,
        load: [envConfig],
        validationSchema,
    })],
    exports: [ConfigModule],
})
export class EnvConfigModule { }