import { IsString, IsNumber } from 'class-validator';

export class ImageDTO {
  @IsString()
  url: string;

  @IsString()
  caption: string;
}

export class CreateServiceDto {
  @IsString()
  name: string;

  @IsString()
  icon?: string;

  @IsString()
  desc: string;

  @IsNumber()
  cost: number;

  images: ImageDTO[];
}
