<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Evaluación del plan de contingencia
    
    .bg-full-width.bg-fondo-1
      .px-lg-0.py-lg-0.px-0.py-0
        img(src="@/assets/curso/tema3/img01.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-5
        .col-lg-10(data-aos="fade-right")
          p.banner-text La evaluación permite establecer si las disposiciones del plan de contingencia responden a las condiciones de riesgo y si las medidas aplicadas contribuyen a la protección del personal sanitario. Se fundamenta en el contraste entre lo previsto, lo ejecutado y los resultados comprobados. <br>La existencia del documento, la realización de una capacitación o la activación de un canal no demuestran, por sí solas, que la respuesta sea adecuada. Es necesario revisar cómo funcionaron las acciones, qué dificultades se presentaron y qué condiciones influyeron en los resultados. 

      .container
        .row.align-items-center.bg-color-06.mb-3.p-3.br-15
          .col-lg-12
            p.mb-0 La simulación del capítulo anterior aporta información para este proceso. El equipo reconoció el cambio en la situación y utilizó el canal alternativo, pero la recepción del aviso se confirmó después de un segundo intento. Ambos resultados deben examinarse para reconocer capacidades y aspectos que requieren intervención.

      separador
    
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.1 Verificación del plan de contingencia

      p.mb-0 La verificación consiste en revisar evidencias y contrastarlas con criterios previamente establecidos. Permite determinar qué disposiciones se aplicaron, cómo se ejecutaron y qué resultados pueden demostrarse.
      p.mb-4 Los siguientes elementos organizan esta revisión.

    .row.mb-lg-3.mb-3.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema3/img02.png", data-aos="zoom-in").mx-auto.w-md-75
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-02" data-aos="zoom-in").mb-0
          .tarjeta(titulo="Criterios de verificación")
            .row.mb-0.justify-content-center.align-items-center.ms-lg-5
              .col-auto.mb-0.mb-lg-0.order-2
                figure
                  img.d-none.d-lg-flex(src="@/assets/curso/tema3/img03.png", data-aos="zoom-in")
              .col-lg.order-1.mb-4.mb-lg-0
                p.mb-2(data-aos="fade-right") Los criterios expresan lo que se espera comprobar. Deben relacionarse con el escenario y con las disposiciones del plan. Por ejemplo, para revisar la comunicación no basta con verificar que exista un teléfono.
                p.mb-0 También puede comprobarse si el personal conoce el canal, si el aviso llega al responsable y si su recepción se confirma según el procedimiento establecido.

          .tarjeta(titulo="Evidencias disponibles")
            .row.mb-0.justify-content-center.align-items-center.ms-lg-5
              .col-auto.mb-0.mb-lg-0.order-2
                figure
                  img.d-none.d-lg-flex(src="@/assets/curso/tema3/img04.png", data-aos="zoom-in")
              .col-lg.order-1.mb-4.mb-lg-0
                p.mb-2(data-aos="fade-right") Las evidencias sustentan las conclusiones. Pueden incluir registros de observación, resultados de pruebas, comunicaciones documentadas, versiones del plan y constancias de las acciones realizadas.
                p.mb-2 Una declaración sobre lo ocurrido puede aportar información, pero necesita analizarse junto con los demás soportes disponibles.
                p.mb-0 La ausencia de registro tampoco demuestra automáticamente que una acción no se realizó; puede indicar que su ejecución no es verificable.

          .tarjeta(titulo="Resultados observados")
            .row.mb-0.justify-content-center.align-items-center.ms-lg-5
              .col-auto.mb-0.mb-lg-0.order-2
                figure
                  img.d-none.d-lg-flex(src="@/assets/curso/tema3/img05.png", data-aos="zoom-in")
              .col-lg.order-1.mb-4.mb-lg-0
                p.mb-2(data-aos="fade-right") La revisión diferencia las acciones comprobadas, las que no se observaron y aquellas sobre las cuales no existe información suficiente.
                p.mb-0 En la simulación, el uso del canal alternativo fue observado. La confirmación del primer aviso no se produjo; la recepción se confirmó después del segundo intento. Esta descripción resulta más precisa que afirmar, de manera general, que “la comunicación funcionó”.

          .tarjeta(titulo="Alcance de las conclusiones")
            .row.mb-0.justify-content-center.align-items-center.ms-lg-5
              .col-auto.mb-0.mb-lg-0.order-2
                figure
                  img.d-none.d-lg-flex(src="@/assets/curso/tema3/img06.png", data-aos="zoom-in")
              .col-lg.order-1.mb-4.mb-lg-0
                p.mb-2(data-aos="fade-right") Los resultados deben interpretarse según las condiciones en las que fueron obtenidos. Una prueba controlada permite revisar determinados procedimientos, pero no reproduce todas las circunstancias de un evento real.
                p.mb-0 Por ello, la evaluación debe indicar qué se comprobó y qué permanece pendiente. También debe proteger la información personal y restringir la circulación de datos sensibles a quienes los necesitan para gestionar la situación.


    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Aplicación del ciclo PHVA

    .bloque-texto-g.bg-color-05.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/img07.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El ciclo PHVA permite relacionar la planeación, la ejecución, la revisión de resultados y las acciones de mejora.<br>Su aplicación mantiene el plan vinculado con las condiciones del contexto y las capacidades disponibles.

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-10
        TabsC.color-primario.mb-0
          .py-3.py-md-4.px-5(titulo="Planear")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-9.mb-4.mb-lg-0
                p.mb-3 Comprende la definición de objetivos, medidas, responsabilidades, recursos y criterios para comprobar los resultados. En el caso desarrollado, la planeación contempla un canal principal, uno alternativo y responsables de apoyo. También debe establecer cómo se confirma la recepción de una alerta y qué sucede cuando el responsable no está disponible.
                p.mb-0 Los criterios deben definirse antes de comprobar el funcionamiento de las medidas, evitando presentar como requisito previo una condición establecida después del ejercicio.
              .col-lg-3.col-md-8
                figure
                  img(src='@/assets/curso/tema3/img08.png', alt='', style="max-width: 150px").mx-auto

          .py-3.py-md-4.px-5(titulo="Hacer")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-9.mb-4.mb-lg-0
                p.mb-3 Consiste en ejecutar las disposiciones previstas y registrar las actuaciones relevantes. Durante la simulación, el equipo reconoce el anuncio de agresión, prioriza la protección y utiliza el canal alternativo. La observación documenta estas acciones y las dificultades presentadas.
                p.mb-0 El registro distingue los hechos del escenario ficticio de las actuaciones realizadas por los participantes.
              .col-lg-3.col-md-8
                figure
                  img(src='@/assets/curso/tema3/img09.png', alt='', style="max-width: 150px").mx-auto

          .py-3.py-md-4.px-5(titulo="Verificar")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-9.mb-4.mb-lg-0
                p.mb-3 Contrasta las evidencias con los criterios y examina las diferencias entre lo previsto y lo ejecutado. La revisión identifica que el aviso llegó, pero su recepción se confirmó después de un segundo intento. También reconoce que el equipo pudo utilizar una alternativa cuando falló el medio principal.
                p.mb-0 Esta fase analiza tanto los logros como las dificultades y las condiciones que contribuyeron a cada resultado.
              .col-lg-3.col-md-8
                figure
                  img(src='@/assets/curso/tema3/img10.png', alt='', style="max-width: 150px").mx-auto

          .py-3.py-md-4.px-5(titulo="Actuar")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-9.mb-4.mb-lg-0
                p.mb-3 Comprende las decisiones y acciones derivadas de los hallazgos. Puede incluir ajustes en las responsabilidades, intervención sobre recursos, actualización de procedimientos y nuevas comprobaciones. En el caso, la institución precisa quién confirma las alertas cuando el responsable principal está ocupado. Después comunica el cambio y comprueba su aplicación.
                p.mb-0 Los resultados de esa verificación alimentan nuevamente la planeación. El ciclo continúa cuando aparecen nuevas condiciones, se modifican los recursos o se identifican oportunidades de fortalecimiento.
              .col-lg-3.col-md-8
                figure
                  img(src='@/assets/curso/tema3/img11.png', alt='', style="max-width: 150px").mx-auto

    separador
    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Hallazgos y oportunidades de mejora

    p.mb-0 Un hallazgo es el resultado de comparar la evidencia con un criterio. Puede mostrar una condición adecuada, una dificultad o un aspecto que requiere mayor información.
    p.mb-4 Su formulación debe describir lo encontrado y explicar su relevancia para el funcionamiento del plan.



    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema3/img12.png", data-aos="zoom-in", alt="")
      .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Descripción sustentada").align-content-center
            p.mb-3 Un hallazgo relaciona el criterio, la evidencia y la diferencia identificada. En la simulación, el plan preveía recibir las solicitudes de apoyo. El registro muestra que la recepción del aviso se confirmó después de un segundo intento. La revisión de las funciones evidencia que no se había definido quién confirmaba cuando el responsable principal atendía otra comunicación.
            p.mb-0 Esta información permite identificar una dificultad de coordinación y orientar su análisis.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Análisis de las causas").align-content-center
            p.mb-3 La descripción de una dificultad no explica necesariamente por qué ocurrió. El análisis debe examinar las condiciones organizacionales, los procedimientos, los recursos y la preparación. Por ejemplo, señalar que “faltó atención” no demuestra la causa de una confirmación tardía. Es necesario revisar la asignación de funciones, la disponibilidad del responsable y las alternativas previstas.
            p.mb-0 Las causas propuestas deben contrastarse con evidencias. Si aún no se han comprobado, se presentan como aspectos pendientes de análisis.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Priorización de los hallazgos").align-content-center
            p.mb-3 La prioridad considera el efecto de la condición encontrada sobre la protección y la respuesta. Una dificultad que puede impedir la solicitud de ayuda requiere atención antes de una nueva exposición.
            p.mb-0 Los ajustes de presentación documental pueden ser útiles, pero no deben desplazar la intervención sobre fallas que comprometen el funcionamiento de los apoyos.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Oportunidades de fortalecimiento").align-content-center
            p.mb-3 La mejora también puede identificarse cuando una medida funciona. Una práctica comprobada puede simplificarse, hacerse más accesible o extenderse a otros escenarios después de revisar su pertinencia.
            p.mb-0 Reconocer una oportunidad no implica modificar todo el plan. La intervención debe guardar relación con una necesidad y un resultado esperado.

    separador
    
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Acciones de intervención y mejora

    .bloque-texto-g.bg-color-05.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/img13.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las acciones responden a los hallazgos y a las causas analizadas. Su clasificación depende del propósito: atender una situación puntual, evitar su repetición, anticipar una dificultad o fortalecer el funcionamiento del plan.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 4.
          span Acciones para mejorar el plan
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th Tipo de intervención
                th Propósito
                th Ejemplo en el caso
            tbody
              tr
                td Corrección
                td Resolver la situación puntual encontrada.
                td Confirmar la recepción del aviso pendiente y coordinar el apoyo durante el ejercicio.
              tr
                td Acción correctiva
                td Intervenir la causa de una dificultad ocurrida para evitar su repetición.
                td Definir el reemplazo del responsable y el mecanismo de confirmación, después de comprobar la falta de esa asignación.
              tr
                td Acción preventiva
                td Intervenir una causa potencial antes de que produzca una dificultad.
                td Revisar otros equipos para identificar y resolver vacíos similares antes de sus actividades.
              tr
                td Acción de mejora
                td Fortalecer una práctica o capacidad existente.
                td Organizar la información de contacto para facilitar su consulta y mantenerla actualizada.

    .bloque-texto-g.bg-color-05.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/img14.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La corrección no sustituye la acción correctiva. Repetir un aviso puede permitir atender una necesidad inmediata, pero deja pendiente la condición que dificultó su recepción o confirmación.<br>Las acciones requieren responsables, plazos, evidencias de ejecución y comprobación de su eficacia. En el marco del SG-SST, estos elementos se relacionan con las disposiciones sobre acciones preventivas, correctivas y mejora continua del Decreto 1072 de 2015.
    
    .row.mb-4.justify-content-center.align-items-center
      .col-lg-10
        TabsC.color-primario.mb-0
          .py-3.py-md-4.px-5(titulo="Responsables y plazos")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-9.mb-4.mb-lg-0
                p.mb-3 La responsabilidad debe asignarse a una función con capacidad para ejecutar la acción. Cuando participan varias dependencias, se precisa quién coordina y quién aporta los recursos.
                p.mb-0 El plazo indica cuándo debe estar cumplida la medida. Las expresiones “próximamente” o “cuando sea posible” dificultan el seguimiento; se requiere una fecha o un compromiso temporal verificable.
              .col-lg-3.col-md-8
                figure
                  img(src='@/assets/curso/tema3/img15.png', alt='', style="max-width: 150px").mx-auto

          .py-3.py-md-4.px-5(titulo="Ejecución y eficacia")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-9.mb-4.mb-lg-0
                p.mb-3 La ejecución demuestra que la acción se realizó. La eficacia indica si produjo el resultado esperado.
                p.mb-3 Actualizar el procedimiento constituye una evidencia de ejecución. Comprobar que el equipo utiliza el ajuste y que las alertas reciben confirmación aporta información sobre su eficacia.
                p.mb-0 Una acción puede estar implementada y mantener pendiente la verificación de resultados. Ambas condiciones deben diferenciarse en el seguimiento.
              .col-lg-3.col-md-8
                figure
                  img(src='@/assets/curso/tema3/img16.png', alt='', style="max-width: 150px").mx-auto

          .py-3.py-md-4.px-5(titulo="Continuación del caso")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-9.mb-4.mb-lg-0
                p.mb-3 En esta continuación ficticia, la institución precisa las funciones de recepción y confirmación, establece un reemplazo y comunica el ajuste al equipo.
                p.mb-3 Posteriormente realiza dos pruebas controladas. En ambas, los avisos reciben confirmación en el primer intento. Para estas nuevas pruebas se había definido previamente ese resultado como criterio de comprobación.
                p.mb-0 La evidencia es favorable para las condiciones ensayadas. Sin embargo, dos pruebas no permiten asegurar el funcionamiento en todos los escenarios. La institución mantiene el seguimiento y revisa la medida cuando cambian responsables, canales o condiciones de operación.
              .col-lg-3.col-md-8
                figure
                  img(src='@/assets/curso/tema3/img17.png', alt='', style="max-width: 150px").mx-auto

    .bg-full-width.bg-fondo-1
      separador
      
      #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.5 Informe de evaluación y seguimiento


      .px-lg-0.py-lg-0.px-0.py-0
        img(src="@/assets/curso/tema3/img18.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-5
        .col-lg-10(data-aos="fade-right")
          p.banner-text El informe organiza el análisis realizado y permite comprender cómo las evidencias sustentan las conclusiones y las acciones propuestas. Su estructura debe facilitar el seguimiento y la toma de decisiones. <br>La siguiente ruta de pasos presenta sus elementos principales.
 
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema3/img19.png", data-aos="zoom-in", alt="")
        .col-lg-8.order-2.order-lg-2.col-md-12.mb-0.mb-lg-0
          LineaTiempoD.color-primario
            .row(numero="1" titulo="Reconocer la situación")
            .row(numero="1" titulo="Contexto y alcance")
              .col-12
                p.mb-0 Se 
                p.mb-0 Identifica el escenario evaluado, el propósito, el periodo y las condiciones de la revisión. Distingue si la información procede de una simulación, una prueba o una situación real.

            .row(numero="2" titulo="Criterios y evidencias")
              .col-12
                p.mb-0 Presenta los aspectos examinados y los soportes utilizados. Cada criterio debe vincularse con evidencia pertinente o señalar la información que falta.

            .row(numero="3" titulo="Resultados y hallazgos")
              .col-12
                p.mb-0 Expone lo observado, las diferencias encontradas y las causas comprobadas o pendientes de análisis. Incluye las capacidades que funcionaron adecuadamente.

            .row(numero="4" titulo="Acciones y responsables")
              .col-12
                p.mb-0 Relaciona cada hallazgo con una intervención, su responsable, el plazo y la evidencia esperada. Evita acciones generales que no respondan a la condición identificada.

            .row(numero="5" titulo="Comprobación de resultados")
              .col-12
                p.mb-0 Registra si la acción se ejecutó y qué resultado produjo. También identifica las limitaciones de las pruebas y los aspectos pendientes.

            .row(numero="6" titulo="Conclusiones y seguimiento")
              .col-12
                p.mb-0 Sustenta las decisiones sobre el plan, las acciones que continúan abiertas y las condiciones que requieren una nueva revisión. 



    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.svg")
          h3.titulo-con-imagen__texto Ejemplo de informe

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema3/img20.png", data-aos="zoom-in", alt="")
      .col-lg-8.order-2.order-lg-1.col-md-12.mb-0.mb-lg-0
        SlyderF(columnas="col-lg-6 col-xl-6 col-md-12 col-sm-12 p-3")
          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema3/img21.png', alt='', style="max-width: 90px;").mx-auto.mb-3
            .bg-color-03.p-2.mb-2
              h4.text-center.mb-0 Alcance
            p.mb-0.text-center Evaluación de la comunicación y coordinación durante una simulación de mesa para una jornada extramural. El ejercicio no comprueba las condiciones reales de acceso al territorio.

          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema3/img21.png', alt='', style="max-width: 90px;").mx-auto.mb-3
            .bg-color-03.p-2.mb-2
              h4.text-center.mb-0 Evidencias
            p.mb-0.text-center Registro de observación, resultado de la comunicación mediante el canal alternativo y revisión de las funciones previstas en el plan.

          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema3/img21.png', alt='', style="max-width: 90px;").mx-auto.mb-3
            .bg-color-03.p-2.mb-2
              h4.text-center.mb-0 Resultados
            p.mb-0.text-center El equipo reconoce el cambio en la situación y prioriza la protección. La recepción del aviso se confirma después de un segundo intento. Se identifica que no estaba definido un reemplazo para confirmar cuando el responsable principal atendía otra comunicación.

          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema3/img21.png', alt='', style="max-width: 90px;").mx-auto.mb-3
            .bg-color-03.p-2.mb-2
              h4.text-center.mb-0 Acción correctiva
            p.mb-0.text-center La coordinación actualiza las responsabilidades, define el reemplazo y comunica el procedimiento. El cumplimiento debe preceder a las nuevas pruebas y a cualquier decisión sobre la reprogramación.

          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema3/img21.png', alt='', style="max-width: 90px;").mx-auto.mb-3
            .bg-color-03.p-2.mb-2
              h4.text-center.mb-0 Seguimiento
            p.mb-0.text-center Dos pruebas posteriores registran confirmación en el primer intento. El ajuste muestra un resultado favorable en las condiciones ensayadas. Se mantiene la revisión cuando cambian responsables o medios de comunicación.

          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema3/img21.png', alt='', style="max-width: 90px;").mx-auto.mb-3
            .bg-color-03.p-2.mb-2
              h4.text-center.mb-0 Conclusión
            p.mb-0.text-center La comunicación cuenta con una mejora comprobada dentro del ejercicio. La jornada permanece aplazada mientras no se verifiquen las condiciones necesarias para decidir sobre el desplazamiento. El resultado de la simulación no resuelve la restricción de acceso.


    .container
      .row.align-items-center.bg-color-02.mb-4.mb-lg-5.p-3.br-15
        .col-lg-12
          p.mb-0 La evaluación transforma la experiencia en información para mejorar. Su utilidad depende de mantener la relación entre hallazgos, acciones, resultados y decisiones, sin presentar una comprobación parcial como garantía general de seguridad.
    
    .row.mb-lg-5.mb-4.justify-content-center
      .col-lg-7.col-md-12.mb-0.mb-lg-0.order-2.order-lg-2
        .container.h-100
          .row.bg-fondo-02.br-15.p-0.h-100.justify-content-center.align-content-center
            .col-md-8.col-lg-5.mb-2.mb-lg-0.order-2.order-lg-1.p-lg-0.p-3.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema2/img28.png", data-aos="fade-right").w-md-50.mx-md-auto.ml-25
            .col-lg-6.order-1.order-lg-2.p-4.p-lg-4
              h4 ¿Sabías que?
              p(data-aos="fade-left").mb-4 Lo invitamos a escuchar el siguiente Pódcast: 
              TarjetaAudio.color-acento-contenido.bg-color-white.mb-0(
                texto="Evaluar para fortalecer la protección"
                tiempo
                :audio="require_src('@/assets/curso/podcast/podcast2.mp3')"
              )

      .col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0
        .container.h-100
          .row.align-content-center.bg-color-c1.mb-0.p-3.br-15.h-100
            .col-lg-12
              p.mb-2 El podcast “Evaluar para fortalecer la protección” aborda los resultados de la simulación y explica cómo convertirlos en acciones y comprobaciones posteriores.
              p.mb-0 Consulta el recurso para reconocer la diferencia entre corregir una situación e intervenir su causa, y comprender cómo el seguimiento permite sustentar las decisiones sobre el plan.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
