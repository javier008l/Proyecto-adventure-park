import {Entity, model, property} from '@loopback/repository';

@model()
export class Parques extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  codigo: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;

  @property({
    type: 'string',
    required: true,
  })
  e-mail: string;

  @property({
    type: 'number',
  })
  numVisitantes?: number;

  @property({
    type: 'string',
    required: true,
  })
  logo: string;

  @property({
    type: 'string',
    required: true,
  })
  mapa: string;

  @property({
    type: 'string',
    required: true,
  })
  eslogan: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;


  constructor(data?: Partial<Parques>) {
    super(data);
  }
}

export interface ParquesRelations {
  // describe navigational properties here
}

export type ParquesWithRelations = Parques & ParquesRelations;
