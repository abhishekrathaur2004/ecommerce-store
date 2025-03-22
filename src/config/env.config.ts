import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class EnvConfig {
  @IsNotEmpty()
  @IsNumber()
  PORT: number;
  
  @IsNotEmpty()
  @IsString()
  DATABASE_URL: string
}


