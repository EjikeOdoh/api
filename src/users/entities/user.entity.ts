import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../dto/create-user.dto';
import { Address } from 'src/address/entities/address.entity';
import { Vehicle } from 'src/vehicles/entities/vehicle.entity';
import { Review } from 'src/reviews/entities/review.entity';
import { Payment } from 'src/payment/entities/payment.entity';
import { Booking } from 'src/bookings/entities/booking.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 25 })
  firstName: string;

  @Column({ type: 'varchar', length: 25 })
  lastName: string;

  @Column({ type: 'varchar', length: 50 })
  email: string;

  @Column()
  phone: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: Role, default: Role.CUSTOMER })
  role: Role;

  @OneToMany(() => Address, (address) => address.user, {
    cascade: true,
    eager: true,
  })
  address: Address[];

  @OneToMany(() => Vehicle, (vehicle) => vehicle.user, {
    cascade: true,
    eager: true,
  })
  vehicles: Vehicle[];

  @OneToMany(() => Review, (review) => review.user, {
    cascade: true,
    eager: false,
  })
  reviews: Review[];

  @OneToMany(() => Payment, (payment) => payment.user, {
    cascade: true,
    eager: false,
  })
  payments: Payment[];

  @OneToMany(() => Booking, (booking) => booking.user, {
    cascade: true,
    eager: false,
  })
  bookings: Booking[];
}
