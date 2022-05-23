import { IResponse } from './response.interface';

export type ICreateOrderResponse = IResponse & {
  id: number;
};
