import { Module } from '@nestjs/common';
import { ControllerModule } from './controller/controller.module';
import { ServiceModule } from './service/service.module';
import { EntitiesModule } from './entities/entities.module';

@Module({
  imports: [ControllerModule, ServiceModule, EntitiesModule]
})
export class ProdutosModule {}
