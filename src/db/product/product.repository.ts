import { Injectable } from "@nestjs/common";
import { DbService } from "@db/db.service";

@Injectable()
export class ProductRepository{
    constructor(private readonly dbService:DbService){}
}