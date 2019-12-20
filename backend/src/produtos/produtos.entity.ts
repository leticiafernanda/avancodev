import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Produtos {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    nome:string;

    @Column({ length: 100 })
    descrição:string;

    @Column()
    preço:number;
}
