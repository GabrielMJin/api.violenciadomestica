import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DadosModule } from './dados/dados.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://sirjinluffy:biebie08@ativ2.pjk5x.mongodb.net/test',
    ),
    DadosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
