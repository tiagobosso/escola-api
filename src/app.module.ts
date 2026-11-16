import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunosModule } from './alunos/alunos.module';
import { ProdutosModule } from './produtos/produtos.module';
import { ControllerModule } from './controller/controller.module';

@Module({
  imports: [AlunosModule, ProdutosModule, ControllerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
