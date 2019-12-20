import { Document } from "mysql";

export interface Produto extends Document {
    readonly nome: string;
    readonly descrição: string;
    readonly preço: number;
}