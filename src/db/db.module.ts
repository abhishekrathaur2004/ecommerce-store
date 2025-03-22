import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DbService } from '@db/db.service';
import { ProductDbService } from './product/product-db.service';
import { ProductRepository } from './product/product.repository';
@Global()
@Module({
    imports:[
        ConfigModule
    ],
    providers: [DbService, ProductDbService,ProductRepository],
    exports: [DbService,ProductDbService],
})
export class DbModule {}
