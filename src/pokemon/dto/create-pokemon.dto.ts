import {
  IsInt,
  IsPositive,
  IsString,
  MIN,
  Min,
  MinLength,
} from 'class-validator';

export class CreatePokemonDto {
  //isInt, isPositive, min 1
  @IsInt()
  @IsPositive()
  @Min(1)
  no: number;
  @IsString()
  @MinLength(1)
  name: string;
}
