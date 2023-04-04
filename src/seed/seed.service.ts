import { Injectable } from '@nestjs/common';

import { PokeResponse } from './interfaces/poke-response.interface';
import { PokemonService } from '../pokemon/pokemon.service';
import { CreatePokemonDto } from '../pokemon/dto/create-pokemon.dto';
import { AxiosAdapter } from '../common/adapters/axios.adapter';

@Injectable()
export class SeedService {
 
  constructor(private pokemonService: PokemonService, private readonly http: AxiosAdapter) { }

  async executeSeed(amount: number = 650) {
    const data = await this.http.get<PokeResponse>(`https://pokeapi.co/api/v2/pokemon?limit=${amount}`);


    const pokemonBatch: CreatePokemonDto[] = data.results.map(
      ({ name, url }) => {
        const segments = url.split('/');
        const no: number = +segments[segments.length - 2];
        return { name, no };
      },
    );

    await this.pokemonService.batchCreate(pokemonBatch);

    return `Seed exectuded. Added ${amount} entries to the database.`;
  }
}
