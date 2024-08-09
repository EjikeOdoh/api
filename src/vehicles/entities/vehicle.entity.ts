import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20 })
  brand: string;

  @Column({ type: 'varchar', length: 20 })
  model: string;

  @Column({ type: 'varchar', length: 20 })
  vin: string;

  @ManyToOne(() => User, (user) => user.vehicles)
  user: User;
}
