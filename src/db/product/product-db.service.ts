import { Injectable } from "@nestjs/common";
import { ProductRepository } from "@db/product/product.repository";

@Injectable()
export class ProductDbService{
    constructor(private readonly productRepository:ProductRepository){}
}