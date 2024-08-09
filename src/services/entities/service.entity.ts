import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Image } from './image.entity';

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  icon: string;

  @Column({ type: 'text' })
  desc: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  cost: number;

  @OneToMany(() => Image, (image) => image.service, {
    cascade: true,
    eager: true,
  })
  images: Image[];
}
