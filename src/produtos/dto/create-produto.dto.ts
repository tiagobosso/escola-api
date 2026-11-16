import {IsString, IsNotEmpty,} from 'class-validator';

export class CreateProdutoDto{
    @IsString()
    @IsNotEmpty({message: 'Nome é obrigatorio'})
    nome:string
    
    @IsPreco({},{message: 'informe um preço valido'})
    preco:string;

    @IsString()
    @IsNotEmpty({message: 'validade é obrigatoria'})
    validade:string;

    @IsString()
    @IsOptional()
    dataNascimento?:string;
}