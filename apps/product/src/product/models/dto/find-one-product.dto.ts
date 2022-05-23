import { IsNotEmpty, IsNumber } from 'class-validator';

export class FindOneProductDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
