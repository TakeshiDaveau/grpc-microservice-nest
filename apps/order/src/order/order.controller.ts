import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CreateOrderDto } from './models/dto/create-order.dto';
import { ICreateOrderResponse } from './models/interfaces/create-order-response.interface';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  @Inject(OrderService)
  private readonly orderService: OrderService;

  @GrpcMethod('OrderService', 'CreateOrder')
  private async createOrder(
    payload: CreateOrderDto,
  ): Promise<ICreateOrderResponse> {
    return this.orderService.createOrder(payload);
  }
}
