import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

import { OrderController } from './order.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'OrderService',
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:50053',
          package: 'order',
          protoPath: join(__dirname, '../../../proto/src/order.proto'),
        },
      },
    ]),
  ],
  controllers: [OrderController],
})
export class OrderModule {}
