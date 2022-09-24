import {Entity, model, property} from '@loopback/repository';

@model()
export class Visitantes extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  primerNombre: string;

  @property({
    type: 'string',
    required: true,
  })
  segundoNombre: string;

  @property({
    type: 'string',
    required: true,
  })
  primerApellido: string;

  @property({
    type: 'string',
    required: true,
  })
  segundoApellido: string;

  @property({
    type: 'number',
    required: true,
  })
  documento: number;

  @property({
    type: 'number',
    required: true,
  })
  celular: number;

  @property({
    type: 'string',
    required: true,
  })
  clave: string;


  constructor(data?: Partial<Visitantes>) {
    super(data);
  }
}

export interface VisitantesRelations {
  // describe navigational properties here
}

export type VisitantesWithRelations = Visitantes & VisitantesRelations;
