import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsOptional } from "class-validator";

export class GetProductsQuery{
    @ApiPropertyOptional({description:'Page number'})
    @IsOptional()
    @IsNumber()
    page?:number;

    @ApiPropertyOptional({description:'Limit number'})
    @IsOptional()
    @IsNumber()
    limit?:number;
}