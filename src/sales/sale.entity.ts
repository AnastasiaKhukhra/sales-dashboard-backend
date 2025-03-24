import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sale {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  product!: string;

  @Column('decimal')
  amount!: number;

  @Column('date')
  date!: Date;
}
