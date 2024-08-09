import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Address } from 'src/address/entities/address.entity';
import { Vehicle } from 'src/vehicles/entities/vehicle.entity';
import { Review } from 'src/reviews/entities/review.entity';
import { Payment } from 'src/payment/entities/payment.entity';
import { Booking } from 'src/bookings/entities/booking.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Address,
      Vehicle,
      Review,
      Payment,
      Booking,
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
