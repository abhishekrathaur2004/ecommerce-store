import { Module } from '@nestjs/common';
import { EnvConfigModule } from '@config/env-config.module';
import { DbModule } from '@db/db.module';
@Module({
  imports: [EnvConfigModule, DbModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
