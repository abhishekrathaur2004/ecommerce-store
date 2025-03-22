import { Module } from '@nestjs/common';
import { EnvConfigModule } from '@config/env-config.module';
import { DbModule } from '@db/db.module';
import { ProductModule } from '@product/product.module';

@Module({
  imports: [EnvConfigModule, DbModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
