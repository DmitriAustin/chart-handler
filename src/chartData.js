(function () {
  var
  items = {
    pie: {
      0: {
        tabHref: 'simulados',
        container: document.querySelector( '.ava-chart--simulado-acertos' ),
        options: {
          height: 400,
          is3D: true,
          legend:
          {
            position: 'right'
          }
        },
        dataTable: [
          ['Desempenho', 'Simulados'],
          ['Muito bom',     11],
          ['Bom',      2],
          ['Regular',  2],
          ['Ruim', 2],
          ['Muito ruim',    7]
        ],
        filter: {
          modals: [
            {
              id: '#chart-filter-simulado-acertos',
              selects: [
                '.ava-form__select-disciplina',
                '.ava-form__select-habilidade'
              ],
            },
          ],
        },
      },
    },
    bar: {
      0: {
        tabHref: 'aulas',
        container: document.querySelector( '.ava-chart--aula-disciplinas-assistidas' ),
        options: {
          height: 400,
          bars: 'vertical', // Required for Material Bar Charts.
          legend:
          {
            position: 'none'
          }
        },
        dataTable: [
          ["Habilidades", "Aulas"],
          ["Cálculo de porcentagem", 47],
          ["Triângulos", 41],
          ["Resolução de equações", 37],
          ["Probabilidade", 29],
          ['Outras', 13]
        ],
        filter: {
          modals: [
            {
              id: '#chart-filter-aula-disciplinas-assistidas',
              selects: [
                '.ava-form__select-ordem',
              ],
            },
          ],
        },
      },
      1: {
        tabHref: 'provas',
        container: document.querySelector( '.ava-chart--prova-atividades' ),
        options: {
          height: 400,
          bars: 'horizontal', // Required for Material Bar Charts.
          legend:
          {
            position: 'right'
          }
        },
        dataTable: [
          [ 'Provas', 'Aulas', 'Simulados' ],
          [ 'Prova 1 (2014)', 100, 40 ],
          [ 'Prova 2 (2014)', 80, 134 ],
          [ 'Prova 1 (2015)', 112, 66 ],
          [ 'Prova 2 (2015)', 54, 103 ]
        ],
        filter: {
          modals: [
            {
              id: '#chart-filter-prova-atividades',
              selects: [
                '.ava-form__select-disciplina',
                '.ava-form__select-habilidade',
              ],
            },
          ],
        },
      },
    },
    line: {
      0: {
        tabHref: 'visaoGeral',
        container: document.querySelector( '.ava-chart--disciplinas-evolucao' ),
        options: {
          height: 400,
          legend:
          {
            position: 'right'
          }
        },
        rows: [
          [ new Date( 2014, 0 ), 50.8 ],
          [ new Date( 2014, 1 ), 60.9 ],
          [ new Date( 2014, 2 ), 55.4 ],
          [ new Date( 2014, 3 ), 57.8 ],
          [ new Date( 2014, 4 ), 60.9 ],
          [ new Date( 2014, 5 ), 67.8 ],
          [ new Date( 2014, 6 ), 54.9 ],
          [ new Date( 2014, 7 ), 55.4 ],
          [ new Date( 2014, 8 ), 67.8 ],
          [ new Date( 2014, 9 ), 60.9 ],
          [ new Date( 2014, 10 ), 81.0 ],
          [ new Date( 2014, 11 ), 96.0 ],
        ],
        columns: [
        {
          'date': 'Ano'
        },
        {
          'number': 'Matemática'
        }, ],
        filter: {
          modals: [
            {
              id: '#chart-filter-disciplina-evolucao',
              selects: [
                '.ava-form__select-ano-inicio',
                '.ava-form__select-ano-fim'
              ],
            },
          ],
        },
      },
      1: {
        tabHref: 'habilidades',
        container: document.querySelector( '.ava-chart--habilidades-evolucao' ),
        options: {
          height: 400,
          legend:
          {
            position: 'right'
          }
        },
        rows: [
          [ new Date( 2014, 0 ), 37.8, 80.8, 41.8, 69.5, 32.4, 61.9 ],
          [ new Date( 2014, 1 ), 30.9, 69.5, 32.4, 66.9, 42.9, 74.8 ],
          [ new Date( 2014, 2 ), 54.8, 43.9, 73.6, 14.8, 23.9, 83.6 ],
          [ new Date( 2014, 3 ), 25.4, 57, 25.7, 69.5, 32.4, 61.9 ],
          [ new Date( 2014, 4 ), 30.9, 69.5, 32.4, 56.9, 42.9, 54.8 ],
          [ new Date( 2014, 5 ), 37.8, 80.8, 41.8, 69.5, 52.4, 61.9 ],
          [ new Date( 2014, 6 ), 30.9, 69.5, 52.4, 61.9, 17.6, 70.4, ],
          [ new Date( 2014, 7 ), 25.4, 57, 25.7,  54.8, 23.9, 83.6 ],
          [ new Date( 2014, 8 ), 41.8, 25.4, 57, 25.7, 69.5, 62.4, ],
          [ new Date( 2014, 9 ), 71.9, 67.6, 50.4, 36.9, 52.9, 84.8 ],
          [ new Date( 2014, 10 ), 25.4, 57, 25.7, 14.8, 23.9, 73.6 ],
          [ new Date( 2014, 11 ), 37.8, 80.8, 41.8, 45.4, 32.4, 61.9 ],
        ],
        columns: [
        {
          'date': 'Ano'
        },
        {
          'number': 'Teorema do cosseno e seno'
        },
        {
          'number': 'Cálculo de áreas'
        },
        {
          'number': 'Probabilidade'
        },
        {
          'number': 'Triângulos'
        },
        {
          'number': 'Resolução de equações'
        },
        {
          'number': 'Cálculo de porcentagem'
        }, ],
        filter: {
          modals: [
            {
              id: '#chart-filter-habilidade-evolucao',
              selects: [
                '.ava-form__select-disciplina',
                '.ava-form__select-habilidade'
              ],
            },
          ],
        },
      },
    }
  };