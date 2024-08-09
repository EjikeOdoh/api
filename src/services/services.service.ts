import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateServiceDto, ImageDTO } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Service } from './entities/service.entity';
import { Repository } from 'typeorm';
import { Image } from './entities/image.entity';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service) private serviceRepository: Repository<Service>,
    @InjectRepository(Image) private imageRepository: Repository<Image>,
  ) {}

  async create(createServiceDto: CreateServiceDto): Promise<Service> {
    const service = this.serviceRepository.create({
      name: createServiceDto.name,
      icon: createServiceDto.icon,
      desc: createServiceDto.desc,
      cost: createServiceDto.cost,
      images: createServiceDto.images.map((imageDto: ImageDTO) =>
        this.imageRepository.create({
          url: imageDto.url,
          caption: imageDto.caption,
        }),
      ),
    });

    return await this.serviceRepository.save(service);
  }

  async findAll(): Promise<Service[]> {
    return await this.serviceRepository.find();
  }

  async findOne(id: number) {
    const service = await this.serviceRepository.findOneBy({ id });

    if (!service) throw new NotFoundException('Service does not exist');

    return service;
  }

  async update(id: number, updateServiceDto: UpdateServiceDto) {
    const service = await this.serviceRepository.findOneBy({ id });

    if (!service) throw new NotFoundException('Service does not exist');

    await this.serviceRepository.update({ id }, updateServiceDto);
    return service;
  }

  async remove(id: number) {
    return await this.serviceRepository.delete(id);
  }
}
