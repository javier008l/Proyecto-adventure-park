import {Entity, model, property} from '@loopback/repository';

@model()
export class Departamentos extends Entity {
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


  constructor(data?: Partial<Departamentos>) {
    super(data);
  }
}

export interface DepartamentosRelations {
  // describe navigational properties here
}

export type DepartamentosWithRelations = Departamentos & DepartamentosRelations;
