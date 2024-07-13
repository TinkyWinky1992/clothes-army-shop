import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item, user } from 'src/Entities';
import { AppController } from 'src/controller';
import { ItemService } from 'src/service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ Item, user]),
  ],
  controllers: [AppController],
  providers: [ItemService],
})
export class ItemModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes('items/upload');

  }
}