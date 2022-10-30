import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Pedido,
  Empresa,
} from '../models';
import {PedidoRepository} from '../repositories';

export class PedidoEmpresaController {
  constructor(
    @repository(PedidoRepository)
    public pedidoRepository: PedidoRepository,
  ) { }

  @get('/pedidos/{id}/empresa', {
    responses: {
      '200': {
        description: 'Empresa belonging to Pedido',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Empresa)},
          },
        },
      },
    },
  })
  async getEmpresa(
    @param.path.string('id') id: typeof Pedido.prototype.id,
  ): Promise<Empresa> {
    return this.pedidoRepository.empresa(id);
  }
}
