import { Controller, Get, Param, Post, UploadedFile, Body, UseInterceptors, Res, Query, Delete, UploadedFiles } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ItemService } from 'src/service';
import { Express, Response } from 'express'; 
import { Item } from 'src/Entities';

@Controller('items')
export class AppController {
  constructor(private readonly itemService: ItemService ) {}


  
  @Post('upload')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'file', maxCount: 1 },
    { name: 'filepng', maxCount: 1 }
  ]))
  async upload(
    @UploadedFiles() files: { file?: Express.Multer.File[], filepng?: Express.Multer.File[] },
    @Body('name') name: string,
    @Body('price') price: string,
    @Body('details') details: string,
  ) {
    const formattedPrice = `₪${price}`;
    try {
      if (!files.file ||!files.filepng) {
        throw new Error('Both files are required');
      }
      const item = await this.itemService.createItem(
        name,
        formattedPrice,
        details,
        files.file[0].buffer,
        files.filepng[0].buffer
      );
      return item;
    } catch (error) {
      console.log(error);
    }
  }

  @Get('getItem')
  async getItemImage(@Res() res: Response) {
    const items: Item[] = await this.itemService.getAllItems();
    const itemData = items.map(item => ({
      id: item.id,
      name: item.name,
      details: item.details,
      price: item.price,
      image: `data:image/jpeg;base64,${Buffer.from(item.file).toString('base64')}`,
      imagepng: `data:image/jpeg;base64,${Buffer.from(item.filepng).toString('base64')}`,
    }));
    res.json(itemData);
    return res;
  }



  @Delete('delete')
  async deleteUser(@Query('id') id: number) {
    await this.itemService.deleteItem(id);

  }

  
  
}
