import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ProductController } from './product.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ProductService',
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:50052',
          package: 'product',
          protoPath: join(__dirname, '../../../proto/src/product.proto'),
        },
      },
    ]),
  ],
  controllers: [ProductController],
})
export class ProductModule {}
