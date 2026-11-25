export default {
  global: {
    Name: 'Gestión y evaluación del plan de contingencia',
    Description:
      'Este componente aborda la implementación de los componentes de gestión del riesgo de violencia contra el personal sanitario mediante herramientas para el análisis del riesgo, la aplicación de medidas de prevención y mitigación, las rutas de respuesta y el plan de contingencia. Además, integra su evaluación mediante el ciclo PHVA y la definición de acciones preventivas, correctivas y de mejora.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Aplicación de herramientas de gestión',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Análisis del contexto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Identificación de vulnerabilidades',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Análisis y valoración del riesgo',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Medidas de prevención y mitigación',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Rutas de respuesta',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Aplicación mediante casos',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Implementación del plan de contingencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Aplicación del plan de contingencia',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Adaptación según el contexto',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Articulación de medidas y rutas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Simulación de una respuesta segura',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Evaluación del plan de contingencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Verificación del plan de contingencia',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Aplicación del ciclo PHVA',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Hallazgos y oportunidades de mejora',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Acciones de intervención y mejora',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Informe de evaluación y seguimiento',
            hash: 't_3_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/material.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Acción correctiva',
      significado:
        'Acción orientada a intervenir una dificultad o desviación identificada durante la aplicación del plan de contingencia, con el propósito de corregir la condición encontrada y evitar su repetición.',
    },
    {
      termino: 'Acción de mejora',
      significado:
        'Acción dirigida a fortalecer u optimizar el funcionamiento del plan de contingencia a partir de los resultados de su evaluación, los cambios del contexto o las oportunidades de fortalecimiento identificadas.',
    },
    {
      termino: 'Acción preventiva',
      significado:
        'Acción orientada a intervenir anticipadamente condiciones que pueden generar dificultades o afectar la aplicación del plan de contingencia.',
    },
    {
      termino: 'Adaptación del plan de contingencia',
      significado:
        'Ajuste de las medidas previstas en el plan de contingencia de acuerdo con los cambios identificados en el contexto, las amenazas, las vulnerabilidades o las capacidades disponibles.',
    },
    {
      termino: 'Análisis del contexto',
      significado:
        'Proceso de reconocimiento de las condiciones internas y externas que pueden influir en la aparición, incremento o modificación del riesgo de violencia contra el personal sanitario.',
    },
    {
      termino: 'Análisis del riesgo',
      significado:
        'Proceso mediante el cual se relacionan las amenazas, vulnerabilidades, factores protectores, capacidades y posibles consecuencias para comprender las características del riesgo en un escenario determinado.',
    },
    {
      termino: 'Capacidad de respuesta',
      significado:
        'Conjunto de recursos, conocimientos y mecanismos de coordinación disponibles para actuar frente a una situación que requiere protección y apoyo.',
    },
    {
      termino: 'Ciclo PHVA',
      significado:
        'Metodología de mejora continua compuesta por las etapas Planear, Hacer, Verificar y Actuar, utilizada para revisar la implementación del plan de contingencia y orientar los ajustes necesarios.',
    },
    {
      termino: 'Corrección',
      significado:
        'Acción que resuelve una dificultad o incumplimiento puntual, sin que necesariamente elimine su causa.',
    },
    {
      termino: 'Criterio de verificación',
      significado:
        'Condición o requisito de referencia que permite comprobar si una medida se aplicó y produjo el resultado esperado.',
    },
    {
      termino: 'Eficacia',
      significado:
        'Grado en que una acción alcanza el resultado previsto, comprobado mediante evidencias pertinentes.',
    },
    {
      termino: 'Evaluación del plan de contingencia',
      significado:
        'Proceso mediante el cual se analiza si las medidas previstas y aplicadas responden a las condiciones de riesgo identificadas y a las características del contexto.',
    },
    {
      termino: 'Evidencia',
      significado:
        'Información o registro verificable que sustenta un resultado, un hallazgo o una conclusión.',
    },
    {
      termino: 'Hallazgo',
      significado:
        'Resultado obtenido durante la verificación que permite identificar aspectos que funcionan adecuadamente, dificultades o condiciones susceptibles de fortalecimiento.',
    },
    {
      termino: 'Implementación',
      significado:
        'Puesta en práctica de las medidas y acciones previstas para gestionar el riesgo de violencia de acuerdo con las condiciones del contexto.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'Proceso permanente de revisión, ajuste y fortalecimiento de las medidas establecidas a partir de los resultados obtenidos durante su implementación y evaluación.',
    },
    {
      termino: 'Plan de contingencia',
      significado:
        'Herramienta que organiza y articula las medidas previstas para actuar frente a situaciones de riesgo que puedan afectar la seguridad del personal sanitario.',
    },
    {
      termino: 'Reevaluación del riesgo',
      significado:
        'Revisión de la valoración realizada cuando cambian las amenazas, vulnerabilidades, capacidades o condiciones del contexto.',
    },
    {
      termino: 'Ruta de respuesta',
      significado:
        'Conjunto organizado de acciones y mecanismos establecidos para orientar la actuación frente a una situación que pueda comprometer la seguridad del personal sanitario.',
    },
    {
      termino: 'Simulación de mesa',
      significado:
        'Ejercicio controlado en el que los participantes analizan un escenario ficticio y describen sus decisiones y actuaciones, sin reproducir físicamente una situación peligrosa.',
    },
    {
      termino: 'Verificación',
      significado:
        'Proceso de contraste entre lo planificado, lo ejecutado y los resultados obtenidos durante la aplicación del plan de contingencia.',
    },
  ],
  referencias: [
    {
      referencia:
        'Comité Internacional de la Cruz Roja. (s. f.). Protección de la asistencia de salud. Recuperado el 9 de noviembre de 2026, de https://www.icrc.org/es/law-and-policy/protection-health-care',
      link: 'https://www.icrc.org/es/law-and-policy/protection-health-care',
    },
    {
      referencia:
        'Comité Internacional de la Cruz Roja. (2020, 11 de junio). Proteger la asistencia de salud: recomendaciones básicas.',
      link: 'https://www.icrc.org/es/publication/proteger-la-asistencia-de-salud-recomendaciones-basicas',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2012a, 24 de abril). Ley 1523 de 2012, por la cual se adopta la política nacional de gestión del riesgo de desastres y se establece el Sistema Nacional de Gestión del Riesgo de Desastres y se dictan otras disposiciones. Diario Oficial, 48.411.',
      link: 'https://normograma.mintic.gov.co/mintic/compilacion/docs/ley_1523_2012.htm',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2012b, 11 de julio). Ley 1562 de 2012, por la cual se modifica el Sistema de Riesgos Laborales y se dictan otras disposiciones en materia de Salud Ocupacional. Diario Oficial, 48.488.',
      link: 'https://normograma.mintic.gov.co/mintic/compilacion/docs/ley_1562_2012.htm',
    },
    {
      referencia:
        'International Organization for Standardization. (2018). Risk management—Guidelines (ISO Standard No. 31000:2018).',
      link: 'https://www.iso.org/standard/31000',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2012, 28 de diciembre). Resolución 4481 de 2012, por la cual se adopta el Manual de Misión Médica y se establecen normas relacionadas con la señalización y divulgación de su emblema. Diario Oficial, 48.676.',
      link: 'https://normograma.supersalud.gov.co/compilacion/docs/resolucion_minsaludps_4481_2012.htm',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2015, 26 de mayo). Decreto 1072 de 2015, por medio del cual se expide el Decreto Único Reglamentario del Sector Trabajo. Diario Oficial, 49.523.',
      link: 'https://cancilleria.gov.co/normograma/compilacion/docs/decreto_1072_2015.htm',
    },
    {
      referencia:
        'Organización Internacional del Trabajo, Consejo Internacional de Enfermeras, Organización Mundial de la Salud, & Internacional de Servicios Públicos. (2002). Directrices marco para afrontar la violencia laboral en el sector de la salud. Oficina Internacional del Trabajo.',
      link: 'https://www.ilo.org/sites/default/files/wcmsp5/groups/public/@ed_dialogue/@sector/documents/publication/wcms_160911.pdf',
    },
    {
      referencia:
        'Organización Internacional del Trabajo, Consejo Internacional de Enfermeras, Organización Mundial de la Salud, & Internacional de Servicios Públicos. (2005). Framework guidelines for addressing workplace violence in the health sector: The training manual. International Labour Office.',
      link: 'https://www.ilo.org/resource/training-material/framework-guidelines-addressing-workplace-violence-health-sector-training',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Luis Gabriel Urueta',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
