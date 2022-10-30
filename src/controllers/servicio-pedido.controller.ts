import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Servicio,
  Pedido,
} from '../models';
import {ServicioRepository} from '../repositories';

export class ServicioPedidoController {
  constructor(
    @repository(ServicioRepository)
    public servicioRepository: ServicioRepository,
  ) { }

  @get('/servicios/{id}/pedido', {
    responses: {
      '200': {
        description: 'Pedido belonging to Servicio',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Pedido)},
          },
        },
      },
    },
  })
  async getPedido(
    @param.path.string('id') id: typeof Servicio.prototype.id,
  ): Promise<Pedido> {
    return this.servicioRepository.pedido(id);
  }
}
