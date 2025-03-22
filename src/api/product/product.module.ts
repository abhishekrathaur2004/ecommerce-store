import { DbModule } from "@db/db.module";
import { Module } from "@nestjs/common";
import { ProductController } from "@product/product.controller";
import { ProductService } from "@product/product.service";

@Module({
    imports:[DbModule],
    controllers:[ProductController],
    providers:[ProductService]
})
export class ProductModule{}