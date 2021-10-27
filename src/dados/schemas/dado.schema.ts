/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DadoDocument = Dado & Document;

@Schema()
export class Dado {
  @Prop()
  municipio_do_fato: string;

  @Prop()
  regiao_geografica: string;

  @Prop()
  natureza: string;

  @Prop()
  data_do_fato: string;

  @Prop()
  ano: string;

  @Prop()
  sexo: string;

  @Prop()
  idade_senasp: string;

  @Prop()
  total_de_envolvidos: string;
}

export const DadoSchema = SchemaFactory.createForClass(Dado);