/* eslint-disable prettier/prettier */
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DataFactory, Seeder } from 'nestjs-seeder';
import { Dado, DadoDocument } from './schemas/dado.schema';

export class DadosSeeder implements Seeder {
    constructor(@InjectModel(Dado.name) private dadoModel: Model<DadoDocument>) {}

    drop(): Promise<any> {
        return this.dadoModel.deleteMany({}) as any;
    }

    seed(): Promise<any> {
        const dados: any = DataFactory.createForClass(Dado).generate(50);

        return this.dadoModel.insertMany(dados);
    }
}
