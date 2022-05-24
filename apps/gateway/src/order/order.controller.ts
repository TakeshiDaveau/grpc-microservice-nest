import { Controller, Inject, Post, OnModuleInit, Body } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import {
  CreateOrderRequest,
  CreateOrderResponse,
  OrderServiceClient,
} from './order.pb';

@Controller('order')
export class OrderController implements OnModuleInit {
  private svc: OrderServiceClient;

  @Inject('OrderService')
  private readonly client: ClientGrpc;

  public onModuleInit(): void {
    this.svc = this.client.getService<OrderServiceClient>('OrderService');
  }

  @Post()
  private async createOrder(
    @Body() body: CreateOrderRequest,
  ): Promise<Observable<CreateOrderResponse>> {
    return this.svc.createOrder(body);
  }
}
