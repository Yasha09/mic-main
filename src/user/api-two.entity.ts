import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserP {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
