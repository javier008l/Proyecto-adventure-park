import {Entity, model, property} from '@loopback/repository';

@model()
export class Zonas extends Entity {
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
  color: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;


  constructor(data?: Partial<Zonas>) {
    super(data);
  }
}

export interface ZonasRelations {
  // describe navigational properties here
}

export type ZonasWithRelations = Zonas & ZonasRelations;
