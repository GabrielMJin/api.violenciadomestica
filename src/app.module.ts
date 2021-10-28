import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DadosModule } from './dados/dados.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://sirjinluffy:A9d8z1fTEidZkrYs@ativ2.pjk5x.mongodb.net/test',
    ),
    DadosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
