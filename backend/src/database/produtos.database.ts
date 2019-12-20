import { Schema } from "mysql";

export const ProdutoSchema = new Schema({
    name: String,
    descrição: String,
    preço: Number,
    
});
