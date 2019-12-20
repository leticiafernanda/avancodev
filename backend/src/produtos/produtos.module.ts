import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { Produtos } from './produtos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Produtos])],
  providers: [ProdutoService],
  controllers: [ProdutosController],
})

export class ProdutoModule { }