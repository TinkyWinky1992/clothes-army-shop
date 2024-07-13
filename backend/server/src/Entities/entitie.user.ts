import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Item } from './entitie.item';

@Entity({name:"users"})
export class user {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  encryptedId: string;

  @Column('json', { nullable: true })
  items: Item[];

}