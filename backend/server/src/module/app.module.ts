import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/controller';
import { ItemService } from 'src/service';
import { ItemModule } from './app.item.module';
import { Item, user } from 'src/Entities';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username: 'root',
    password:'admin',
    database:'shop_database',
    entities:[Item, user],
    synchronize:true,
  }),
    ItemModule,
  ]

})
export class AppModule {}
