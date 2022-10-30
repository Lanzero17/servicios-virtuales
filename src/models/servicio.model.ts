import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Pedido} from './pedido.model';

@model({settings: {strict: false}})
export class Servicio extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  numActa: string;

  @property({
    type: 'string',
    required: true,
  })
  Asesor: string;

  @property({
    type: 'string',
    required: true,
  })
  Actividades: string;

  @property({
    type: 'string',
    required: true,
  })
  fechaServicio: string;

  @belongsTo(() => Pedido)
  pedidoId: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Servicio>) {
    super(data);
  }
}

export interface ServicioRelations {
  // describe navigational properties here
}

export type ServicioWithRelations = Servicio & ServicioRelations;
