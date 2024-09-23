import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './entity/cats.entity';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  // @Get()
  // findOne(@Param('id') id: number): Promise<Cat> {
  //   return this.catsService.findOne(id);
  // }

  @Post()
  create(@Body() cat: Cat) {
    return this.catsService.create(cat);
  }

  @Delete(':id')
  remote(@Param('id') id: number) {
    this.catsService.remove(id);
  }
}
