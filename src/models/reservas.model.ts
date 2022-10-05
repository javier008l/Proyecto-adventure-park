import {Entity, model, property} from '@loopback/repository';

@model()
export class Reservas extends Entity {
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
    type: 'number',
    required: true,
  })
  CantidadEntradas: number;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;


  constructor(data?: Partial<Reservas>) {
    super(data);
  }
}

export interface ReservasRelations {
  // describe navigational properties here
}

export type ReservasWithRelations = Reservas & ReservasRelations;
