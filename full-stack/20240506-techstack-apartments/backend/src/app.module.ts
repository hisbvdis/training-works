import { Module } from '@nestjs/common';
import { ApartmentsController } from './apartments/apartments.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, ApartmentsController],
  providers: [AppService],
})
export class AppModule {}
