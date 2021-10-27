import { Module } from '@nestjs/common';
import { DadosService } from './dados.service';
import { DadosController } from './dados.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Dado, DadoSchema } from './schemas/dado.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Dado.name, schema: DadoSchema }]),
  ],
  controllers: [DadosController],
  providers: [DadosService],
})
export class DadosModule {}
