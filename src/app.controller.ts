import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { AppService, CatService } from './app.service';
import { CreateCatDto } from './dto/cat.dto'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query('abc') q: string): string {
    return 'Query was: ' + q;
  }
}


@Controller('cats')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get()
  async findAll() {
    return this.catService.findAll();
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catService.create({name: createCatDto.name, meow: () => `${createCatDto.sound}!!!`});
  }


  @Get('meow')
  async meowAll() {
    this.catService.meowAll();
  }
}
