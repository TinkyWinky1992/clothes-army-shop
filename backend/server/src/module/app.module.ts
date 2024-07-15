import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/controller';
import { ItemService } from 'src/service';
import { ItemModule } from './app.item.module';
import { Item } from 'src/Entities';
import { join } from 'path';
@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username: 'root',
    password:'admin',
    database:'shop_database',
    entities: [Item],
    migrations: [join(__dirname, 'backend/shop_database_items.sql')],
    synchronize:true,
  }),
    ItemModule,
  ]

})
export class AppModule {}
