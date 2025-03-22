import { Controller, Get, HttpStatus, Query } from "@nestjs/common";
import { ProductService } from "@product/product.service";
import { RouteNames } from "@common/routes-name";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { GetProductsQuery } from "./dto/get-product-query.dto";

@ApiTags(RouteNames.PRODUCT)
@Controller(RouteNames.PRODUCT)
export class ProductController{
    constructor(private readonly productService:ProductService){}

    @Get()
    @ApiOperation({summary:'Get all products'})
    @ApiResponse({status:HttpStatus.OK,description:'Get all products successfully'})
    @ApiResponse({status:HttpStatus.INTERNAL_SERVER_ERROR,description:'Internal server error'})
    async getProducts(@Query() query:GetProductsQuery){
        return this.productService.getAllproducts();            
    }
}