import { ProductDbService } from "@db/product/product-db.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductService{
    constructor(private readonly productDbService:ProductDbService){}

    async getAllproducts(){}
}