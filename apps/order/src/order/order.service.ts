import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './models/dto/create-order.dto';
import { ICreateOrderResponse } from './models/interfaces/create-order-response.interface';

@Injectable()
export class OrderService {
  async createOrder(
    createOrder: CreateOrderDto,
  ): Promise<ICreateOrderResponse> {
    return null;
  }
}
