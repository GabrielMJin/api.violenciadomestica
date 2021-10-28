import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { DadosService } from './dados.service';
import { CreateDadoDto } from './dto/create-dado.dto';
import { UpdateDadoDto } from './dto/update-dado.dto';

@Controller('dados')
export class DadosController {
  constructor(private readonly dadosService: DadosService) {}

  @Post()
  create(@Body() createDadoDto: CreateDadoDto) {
    return this.dadosService.create(createDadoDto);
  }

  @Get()
  async findAll(@Req() req: Request) {
    const options = {};

    const query = this.dadosService.findAll({});

    const page: number = parseInt(req.query.page as any) || 1;
    const limit = 9;

    const data = await query
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();

    return {
      data,
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dadosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDadoDto: UpdateDadoDto) {
    return this.dadosService.update(id, updateDadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dadosService.remove(id);
  }
}
