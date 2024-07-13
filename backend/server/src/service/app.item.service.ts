import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from 'src/Entities';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
  ) {}

  async createItem(name: string, price: number, details: string, file: Buffer): Promise<Item> {
    const newItem = this.itemRepository.create({ name, price, details, file });
    return this.itemRepository.save(newItem);
  }


  async getAllItems(): Promise<Item[]> {
    try {
      return await this.itemRepository.find();
    } catch (error) {
      throw new Error('Failed to retrieve items');
    }
  }

  async deleteItem(id: number) {
    try{
      await this.itemRepository.delete(id);
    } catch(error) {
      throw new Error(`Failed To Delete Item with ID ${id}`)
    }
    

  }
}
