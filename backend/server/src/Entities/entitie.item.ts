import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:"items"})
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: string;

  @Column()
  details: string;

  @Column('longblob')
  file: Buffer;

  @Column('longblob')
  filepng: Buffer;
}