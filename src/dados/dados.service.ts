import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDadoDto } from './dto/create-dado.dto';
import { UpdateDadoDto } from './dto/update-dado.dto';
import { Dado, DadoDocument } from './schemas/dado.schema';

@Injectable()
export class DadosService {
  constructor(@InjectModel(Dado.name) private dadoModel: Model<DadoDocument>) {}

  create(createDadoDto: CreateDadoDto) {
    const dado = new this.dadoModel(createDadoDto);
    return dado.save();
  }

  findAll() {
    return this.dadoModel.find();
  }

  findOne(id: string) {
    return this.dadoModel.findById(id);
  }

  update(id: string, updateDadoDto: UpdateDadoDto) {
    return this.dadoModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateDadoDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.dadoModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
