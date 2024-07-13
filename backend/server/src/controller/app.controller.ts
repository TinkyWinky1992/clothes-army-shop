import { Controller, Get, Param, Post, UploadedFile, Body, UseInterceptors, Res, Query, Delete } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ItemService } from 'src/service';
import { Express, Response } from 'express'; 
import { Item } from 'src/Entities';

@Controller('items')
export class AppController {
  constructor(private readonly itemService: ItemService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body('name') name: string,
    @Body('price') price: string,
    @Body('details') details: string,
  ) {
    const item = await this.itemService.createItem(name, parseFloat(price), details, file.buffer);
    return item;
  }

  @Get('getItem')
  async getItemImage(@Res() res: Response) {
    const items: Item[] = await this.itemService.getAllItems();
    const itemData = items.map(item => ({
      id: item.id,
      name: item.name,
      details: item.details,
      price: item.price,
      image: `data:image/jpeg;base64,${btoa(String.fromCharCode(...new Uint8Array(item.file)))}`,
    }));
    res.json(itemData);
    return res;
  }



  @Delete('delete')
  async deleteUser(@Query('id') id: number) {
    await this.itemService.deleteItem(id);

  }

  
  
}
