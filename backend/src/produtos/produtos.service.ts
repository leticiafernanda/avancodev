import { Injectable,Inject } from '@nestjs/common';
import { Produto } from './produtos.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produtos } from './produtos.entity';
@Injectable()
export class ProdutoService {

    constructor(@InjectRepository(ProdutoService) private usersRepository: Repository<Produtos>) { }

    async getProduto(produto: Produtos): Promise<Produtos[]> {
        return await this.usersRepository.find();
    }

    async getProdutos(id: number): Promise<Produtos[]> {
        return await this.usersRepository.find({
            select: ["nome", "descrição", "preço"],
            where: [{ "id": id }]
        });
    }

    async updateProduto(produto: Produtos) {
        this.usersRepository.save(produto)
    }

    async deleteProduto(produto: Produtos) {
        this.usersRepository.delete(produto);
    }
}