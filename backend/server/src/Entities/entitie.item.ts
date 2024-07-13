import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:"items"})
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  
  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @Column()
  details: string;

  @Column('longblob')
  file: Buffer;
}