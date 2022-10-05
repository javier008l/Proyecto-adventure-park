import {Entity, model, property} from '@loopback/repository';

@model()
export class Ciudades extends Entity {
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


  constructor(data?: Partial<Ciudades>) {
    super(data);
  }
}

export interface CiudadesRelations {
  // describe navigational properties here
}

export type CiudadesWithRelations = Ciudades & CiudadesRelations;
