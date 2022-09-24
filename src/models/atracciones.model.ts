import {Entity, model, property} from '@loopback/repository';

@model()
export class Atracciones extends Entity {
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
  imagen: string;

  @property({
    type: 'string',
    required: true,
  })
  estructura: string;

  @property({
    type: 'string',
    required: true,
  })
  enlace: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;


  constructor(data?: Partial<Atracciones>) {
    super(data);
  }
}

export interface AtraccionesRelations {
  // describe navigational properties here
}

export type AtraccionesWithRelations = Atracciones & AtraccionesRelations;
