import { Module,MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutosController } from './produtos/produtos.controller';
import { ProdutoService } from './produtos/produtos.service';
import { ShoppingController } from './shopping/shopping.controller';
import { ProdutoModule } from './produtos/produtos.module';
Module({
  imports: [
    TypeOrmModule.forRoot(),     
      ProdutoModule
  ],

  controllers: [ProdutosController,ShoppingController],
  providers: [ProdutoService],
})
export class AppModule {
  
  
}
