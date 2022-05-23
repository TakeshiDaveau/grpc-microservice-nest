import { IsNotEmpty, IsNumber } from 'class-validator';

export class DecreaseProductDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
