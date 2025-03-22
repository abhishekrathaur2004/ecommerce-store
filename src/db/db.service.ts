import { EnvConfig } from '@config/env.config';
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';
import { Client } from 'pg';

@Injectable()
export class DbService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    private pgClient: Client;
    constructor(config: ConfigService<EnvConfig>) {
        const dbUrl = config.get<string>('DATABASE_URL');
        console.log('Connecting to PostgreSQL with URL:', dbUrl);
        super({
            datasources: {
                db: {
                    url: dbUrl,
                }
            }
        });
        this.pgClient = new Client({
            connectionString: dbUrl,
        });
    }

    async onModuleInit() {
        await this.$connect();
        await this.pgClient.connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
        await this.pgClient.end();
    }
}
