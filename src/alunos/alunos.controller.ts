import { Body, Controller, HttpCode, HttpStatus, Post, Get, Param, Delete } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';

@Controller('alunos')
export class AlunosController {
    constructor(private readonly alunosService:AlunosService){

    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body()createAlunoDto:CreateAlunoDto){
        return this.alunosService.create(createAlunoDto);
    }
    @Get()
    findAll(){
        return this.alunosService.findAll
    }
    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    remove(@Param('id') id:string){
        return this.alunosService.remove(id);
    }
}
