import { Controller, UsePipes,Post, Res, HttpStatus, Body, Get, Param, NotFoundException, Delete, Query, Put, UseInterceptors } from '@nestjs/common';
import { ProdutoService } from './produtos.service';
import { Produto } from './produtos.interface';
import { ValidationPipe } from '../validador.pipe';
import { CreateProdutoDTO } from './createproduto.dto';
import { Produtos } from './produtos.entity';
@Controller('Produtos')
export class ProdutosController {

    constructor(private service: ProdutoService) { }

    @Get(':id')
    get(@Param() params) {
        return this.service.getProduto(params.id);
    }

    @Post()
    create(@Body() produto: Produtos) {
        return this.service.getProduto(produto);
    }

    @Put()
    update(@Body() produto: Produtos) {
        return this.service.updateProduto(produto);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteProduto(params.id);
    }
}

