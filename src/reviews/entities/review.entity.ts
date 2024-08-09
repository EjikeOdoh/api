import { User } from 'src/users/entities/user.entity';
import { ManyToOne, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rating: number;

  @ManyToOne(() => User, (user) => user.reviews)
  user: User;
}
