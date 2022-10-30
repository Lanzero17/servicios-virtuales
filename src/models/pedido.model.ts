import {Entity, model, property, hasMany, belongsTo} from '@loopback/repository';
import {Servicio} from './servicio.model';
import {Empresa} from './empresa.model';

@model({settings: {strict: false}})
export class Pedido extends Entity {
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
  fechaPedido: string;

  @property({
    type: 'number',
    required: true,
  })
  costoPedido: number;

  @property({
    type: 'string',
    required: true,
  })
  terminos: string;

  @property({
    type: 'string',
    required: true,
  })
  numPedido: string;
  @hasMany(() => Servicio)
  servicios: Servicio[];

  @belongsTo(() => Empresa)
  empresaId: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Pedido>) {
    super(data);
  }
}

export interface PedidoRelations {
  // describe navigational properties here
}

export type PedidoWithRelations = Pedido & PedidoRelations;
