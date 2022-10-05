import {Entity, model, property} from '@loopback/repository';

@model()
export class PuestosComida extends Entity {
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
  menu: string;


  constructor(data?: Partial<PuestosComida>) {
    super(data);
  }
}

export interface PuestosComidaRelations {
  // describe navigational properties here
}

export type PuestosComidaWithRelations = PuestosComida & PuestosComidaRelations;
