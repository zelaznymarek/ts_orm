import { Module } from '@nestjs/common';
import { AppController, CatController } from './app.controller';
import { AppService, CatService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, CatController],
  providers: [AppService, CatService],
})
export class AppModule {}
