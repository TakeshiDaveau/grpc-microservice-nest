import { Controller, HttpStatus } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CreateProductDto } from './models/dto/create-product.dto';
import { DecreaseProductDto } from './models/dto/decrease-product.dto';
import { FindOneProductDto } from './models/dto/find-one-product.dto';
import { ICreateProductResponse } from './models/interfaces/create-product-response.interface';
import { IDecreaseProductResponse } from './models/interfaces/decrease-product.interface';
import { IFindOneProductResponse } from './models/interfaces/find-one-product-response.interface';

const PRODUCT_SERVICE_NAME = 'ProductService';

@Controller('product')
export class ProductController {
  @GrpcMethod(PRODUCT_SERVICE_NAME, 'CreateProduct')
  private async createProduct(
    payload: CreateProductDto,
  ): Promise<ICreateProductResponse> {
    return { id: 1234567, error: null, status: HttpStatus.OK };
  }

  @GrpcMethod(PRODUCT_SERVICE_NAME, 'FindOne')
  private async findOne(
    payload: FindOneProductDto,
  ): Promise<IFindOneProductResponse> {
    return {
      data: { id: 1234567, ...payload },
      error: null,
      status: HttpStatus.OK,
    };
  }

  @GrpcMethod(PRODUCT_SERVICE_NAME, 'DecreaseStock')
  private async decreaseStock(
    payload: DecreaseProductDto,
  ): Promise<IDecreaseProductResponse> {
    return { error: null, status: HttpStatus.OK };
  }
}
