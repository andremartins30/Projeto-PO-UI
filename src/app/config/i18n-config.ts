import { PoI18nConfig } from '@po-ui/ng-components';

export const i18nConfig: PoI18nConfig = {
    default: {
        language: 'pt-BR',
        context: 'general',
        cache: true
    },
    contexts: {
        general: {
            'pt-BR': {
                // Traduções obrigatórias
                'noData': 'Nenhum registro encontrado',
                'loadMoreData': 'Carregar mais resultados',
                'search': 'Pesquisar',
                'pageFirst': 'Primeira página',
                'pageLast': 'Última página',

                // Traduções específicas da tabela
                'poTable': {
                    'tableMessageNoData': 'Nenhum dado encontrado',
                    'tableLoadingData': 'Carregando...',
                    'tableLoadMoreData': 'Carregar mais resultados'
                }
            }
        }
    }
};