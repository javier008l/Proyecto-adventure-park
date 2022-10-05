import {Entity, model, property} from '@loopback/repository';

@model()
export class PlanesAtracciones extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;


  constructor(data?: Partial<PlanesAtracciones>) {
    super(data);
  }
}

export interface PlanesAtraccionesRelations {
  // describe navigational properties here
}

export type PlanesAtraccionesWithRelations = PlanesAtracciones & PlanesAtraccionesRelations;
