import { Post, Controller } from '@nestjs/common';

@Controller('shopping')
export class ShoppingController {
  @Post()
  async addProduto() {
    return 'This is a fake service :D';
  }
}