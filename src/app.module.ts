import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    PokemonModule,
    //Conexión a base de datos
    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),
    CommonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
