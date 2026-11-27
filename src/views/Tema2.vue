<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Implementación del plan de contingencia

    .bg-full-width.bg-fondo-1
      .px-lg-0.py-lg-0.px-0.py-0
        img(src="@/assets/curso/tema2/img01.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-5
        .col-lg-10(data-aos="fade-right")
          p.banner-text El plan de contingencia organiza las acciones previstas frente a escenarios que pueden afectar la seguridad del personal sanitario. Su implementación articula la valoración del riesgo con las medidas de prevención, mitigación y respuesta, las responsabilidades y los recursos disponibles.

      .row.mb-lg-4.mb-3.justify-content-center.align-items-center
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema2/img02.png", data-aos="zoom-in").mx-auto
        .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0
          p.mb-3 Implementar el plan implica comprobar que sus disposiciones pueden aplicarse. Esto requiere que el personal conozca sus funciones, que los canales de comunicación funcionen y que existan criterios para activar los apoyos y revisar las decisiones cuando cambian las condiciones.

          .container
            .row.align-items-center.bg-color-02.mb-0.p-3.br-15
              .col-lg-12
                p.mb-0 El caso del capítulo anterior permite reconocer esta relación: comprobar un medio alternativo de comunicación fortaleció una capacidad, pero no resolvió la restricción de acceso. Por ello, la decisión sobre la jornada debió considerar el conjunto de condiciones identificadas.
      separador
      
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.1 Aplicación del plan de contingencia

    .container
      .row.align-items-center.bg-color-03.mb-5.p-3.br-15
        .col-lg-12
          p.mb-0 La aplicación del plan relaciona una situación concreta con las medidas previstas para afrontarla. Se apoya en información actualizada y en una distribución de responsabilidades que permita coordinar la actuación. <br>Los siguientes elementos facilitan su puesta en práctica.

  
    .row.mb-lg-3.mb-4.justify-content-center.align-items-center
      .col-lg-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-02" data-aos="zoom-in").mb-0
          .tarjeta(titulo="Escenario y alcance")
            .row.mb-0.justify-content-center.align-items-center.ms-lg-5
              .col-auto.mb-0.mb-lg-0.order-2
                figure
                  img.d-none.d-lg-flex(src="@/assets/curso/tema2/img03.png", data-aos="zoom-in")
              .col-lg.order-1.mb-4.mb-lg-0
                p.mb-1(data-aos="fade-right") El escenario delimita la actividad, las personas involucradas, el lugar y las condiciones relevantes. El alcance establece qué situaciones contempla el plan y cuáles requieren coordinación adicional.
                p.mb-0 Un plan utilizado en una sede institucional puede necesitar ajustes para una jornada extramural, debido a diferencias en el acceso, la comunicación y la disponibilidad de apoyo.

          .tarjeta(titulo="Funciones y coordinación")
            .row.mb-0.justify-content-center.align-items-center.ms-lg-5
              .col-auto.mb-0.mb-lg-0.order-2
                figure
                  img.d-none.d-lg-flex(src="@/assets/curso/tema2/img04.png", data-aos="zoom-in")
              .col-lg.order-1.mb-4.mb-lg-0
                p.mb-1(data-aos="fade-right") Las responsabilidades permiten reconocer quién informa, quién recibe las alertas, quién coordina los apoyos y quién toma las decisiones correspondientes.
                p.mb-0 La asignación debe ser conocida por el equipo y contemplar alternativas cuando un responsable no está disponible. La actuación individual se integra con los mecanismos institucionales de coordinación.

          .tarjeta(titulo="Recursos comprobados")
            .row.mb-0.justify-content-center.align-items-center.ms-lg-5
              .col-auto.mb-0.mb-lg-0.order-2
                figure
                  img.d-none.d-lg-flex(src="@/assets/curso/tema2/img05.png", data-aos="zoom-in")
              .col-lg.order-1.mb-4.mb-lg-0
                p.mb-1(data-aos="fade-right") La implementación requiere verificar la disponibilidad, el funcionamiento y el acceso a los medios previstos. La existencia de un recurso en un inventario no demuestra que pueda utilizarse en el momento y lugar necesarios.
                p.mb-0 Por ejemplo, un equipo de comunicación puede funcionar dentro de la institución y presentar dificultades durante un desplazamiento. La comprobación debe considerar las condiciones en las que será utilizado.

          .tarjeta(titulo="Comunicación y apoyo")
            .row.mb-0.justify-content-center.align-items-center.ms-lg-5
              .col-auto.mb-0.mb-lg-0.order-2
                figure
                  img.d-none.d-lg-flex(src="@/assets/curso/tema2/img06.png", data-aos="zoom-in")
              .col-lg.order-1.mb-4.mb-lg-0
                p.mb-1(data-aos="fade-right") El plan establece canales principales y alternativos para transmitir alertas, solicitar ayuda y confirmar la recepción de la información. También determina los datos necesarios para coordinar la respuesta.
                p.mb-0 La información se comunica de manera breve y precisa, evitando divulgar datos personales o detalles sensibles que no sean necesarios para gestionar la situación.

          .tarjeta(titulo="Activación y protección")
            .row.mb-0.justify-content-center.align-items-center.ms-lg-5
              .col-auto.mb-0.mb-lg-0.order-2
                figure
                  img.d-none.d-lg-flex(src="@/assets/curso/tema2/img07.png", data-aos="zoom-in")
              .col-lg.order-1.mb-4.mb-lg-0
                p.mb-1(data-aos="fade-right") Las condiciones de activación permiten reconocer cuándo deben iniciarse las acciones previstas. Su aplicación considera la evolución del evento y las necesidades de protección.
                p.mb-0 Ante peligro inmediato, la protección y la solicitud de apoyo no dependen de completar previamente el análisis, obtener todos los registros o finalizar una conversación.

          .tarjeta(titulo="Registro y seguimiento")
            .row.mb-0.justify-content-center.align-items-center.ms-lg-5
              .col-auto.mb-0.mb-lg-0.order-2
                figure
                  img.d-none.d-lg-flex(src="@/assets/curso/tema2/img08.png", data-aos="zoom-in")
              .col-lg.order-1.mb-4.mb-lg-0
                p.mb-1(data-aos="fade-right") Los registros documentan las decisiones, las acciones realizadas y los resultados observados. Permiten reconocer qué medidas funcionaron, cuáles quedaron pendientes y qué condiciones requieren revisión.
                p.mb-0 La aplicación del plan no finaliza con la ejecución de una acción. Es necesario comprobar su resultado y mantener el seguimiento de los cambios que puedan afectar la seguridad.


    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Adaptación según el contexto
    

    .bloque-texto-g.bg-color-05.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img09.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La adaptación permite ajustar las disposiciones del plan cuando las condiciones reales difieren de las previstas. Puede ser necesaria antes de una actividad, durante su desarrollo o después de revisar los resultados. <br>Los ajustes se sustentan en información y se coordinan según las responsabilidades institucionales. La capacidad de adaptación no implica improvisar ni trasladar al personal expuesto decisiones para las cuales necesita apoyo organizacional.

  
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/img10.png", data-aos="zoom-in", alt="")
      .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Cambios del entorno").align-content-center
            p.mb-3 Las variaciones en el acceso, la movilidad, las condiciones del lugar o los hechos de violencia pueden modificar la exposición del equipo.
            p.mb-0 En el caso de la jornada extramural, la restricción confirmada exigió revisar el desplazamiento y aplazar la actividad. Su reprogramación dependerá de una nueva verificación de las condiciones.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Cambios en las capacidades").align-content-center
            p.mb-3 La ausencia de un responsable, una falla de comunicación o la indisponibilidad de un recurso pueden afectar la aplicación del plan.
            p.mb-0 Estas modificaciones requieren comprobar las alternativas y determinar si permiten mantener las medidas de protección. La existencia de un reemplazo previsto no demuestra que esté disponible o pueda cumplir la misma función.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Cambios durante la atención").align-content-center
            p.mb-3 Una situación inicialmente compatible con el diálogo puede evolucionar hacia amenazas o intentos de agresión. En ese caso, las acciones deben ajustarse a las nuevas condiciones.
            p.mb-0 La desescalación puede utilizarse mientras exista seguridad para interactuar. Cuando esa condición cambia, la protección y la activación del apoyo adquieren prioridad.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Comunicación de los ajustes").align-content-center
            p.mb-3 Los cambios deben llegar a quienes necesitan aplicarlos. Esto incluye informar qué se modifica, por qué se modifica, quién asume la responsabilidad y desde cuándo rige la disposición.
            p.mb-0 Cuando corresponde actualizar el documento, el control de versiones permite reconocer cuál es la información vigente. Los cambios operativos y sus resultados también deben quedar registrados para su evaluación.
  
  
  
    .container
      .row.align-items-center.bg-color-03.mb-3.p-3.br-15
        .col-lg-12
          p.mb-0 La adaptación mantiene una relación continua entre la información disponible, las decisiones y las medidas aplicadas. Ningún ajuste debe interpretarse como garantía absoluta de seguridad: las condiciones requieren observación y revisión durante la actividad.
  
    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Articulación de medidas y rutas
  
  
    .container
      .row.align-items-center.bg-color-06.mb-5.p-3.br-15
        .col-lg-12
          p.mb-0 El plan integra las medidas dirigidas a evitar nuevas condiciones de riesgo, reducir las existentes y responder cuando una situación requiere protección y apoyo.<br>Estas acciones se complementan. No constituyen etapas que deban agotarse una después de otra: una amenaza inmediata puede exigir activar la respuesta mientras se desarrollan otras acciones de coordinación.

  
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 2.
          span Articulación para una actuación segura
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th Elemento
                th Función dentro del plan
                th Ejemplo de aplicación
            tbody
              tr
                td Prevención
                td Incorpora condiciones de seguridad desde la organización de una actividad.
                td Definir responsables, canales y condiciones de revisión al programar una nueva jornada.
              tr
                td Mitigación
                td Interviene condiciones de riesgo existentes o reduce sus posibles consecuencias.
                td Corregir una falla de comunicación identificada y comprobar una alternativa disponible.
              tr
                td Ruta de respuesta
                td Coordina la protección, la comunicación y los apoyos cuando la situación lo requiere.
                td Activar el aviso institucional ante un anuncio de agresión y coordinar las medidas correspondientes.
              tr
                td Reevaluación
                td Examina cambios y resultados para orientar nuevas decisiones.
                td Revisar si los apoyos funcionan y si las condiciones permiten mantener, ajustar o suspender una actividad.
  
    p.mb-1 La articulación exige correspondencia entre el hallazgo y la acción. Una medida general, como recordar la importancia de comunicarse, resulta insuficiente si la dificultad consiste en que nadie tiene asignada la recepción de las alertas.
    p.mb-5 También es necesario diferenciar las acciones de protección de los registros posteriores. Documentar una amenaza aporta información para el seguimiento, pero no sustituye la respuesta que exige la  situación.

  
  
    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.svg")
          h3.titulo-con-imagen__texto Continuidad del caso
  

    .row.mb-lg-3.mb-3.justify-content-center.align-items-center
      .col-lg-5.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema2/img11.png", data-aos="zoom-in").mx-auto
      .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3 Después del aplazamiento de la jornada, la coordinación mantiene el seguimiento de la restricción de acceso y organiza una prueba del mecanismo de apoyo. <br> La prueba confirma que el responsable recibe el aviso mediante el canal alternativo. Sin embargo, el canal principal continúa presentando fallas. El resultado permite actualizar las capacidades disponibles y reconocer un aspecto pendiente de intervención.

        .container
          .row.align-items-center.bg-color-02.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 Antes de reprogramar, la institución deberá revisar nuevamente las condiciones de acceso, la disponibilidad de los apoyos y las medidas correspondientes. Las comprobaciones anteriores aportan evidencia, pero pueden perder actualidad si las condiciones cambian.

        p.mb-0 De esta manera, la aplicación del plan relaciona lo previsto con lo comprobado y evita que una decisión se fundamente únicamente en la existencia del documento.
  
  
    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Simulación de una respuesta segura
  
  
    .bloque-texto-g.bg-color-05.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La simulación permite observar cómo se aplican las disposiciones del plan frente a una situación ficticia. Facilita reconocer decisiones, coordinación, uso de recursos y dificultades sin reproducir una exposición real a la violencia. <br>El ejercicio se desarrolla en condiciones controladas. No requiere contacto físico, amenazas reales, bloqueo de salidas ni uso de objetos que puedan causar daño. Cualquier participante puede solicitar su interrupción si aparece malestar o una condición insegura.<br>La siguiente simulación continúa el caso de la jornada extramural.


    .bg-fondo-01.p-lg-5.p-4.mb-5
      SlyderA(tipo="b").bg-color-white.p-3.tarjeta
        .tarjeta.p-lg-4.p-3.h-100.mb-0
          .row.align-items-center.justify-content-center.mb-0
            .col-lg-5.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
              figure
                img(src="@/assets/curso/tema2/img13.png", data-aos="zoom-in").mx-auto
            .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
              h4.mb-2 Preparación del escenario
              p.mb-2 La institución aún no ha reprogramado la jornada. Antes de tomar esa decisión, realiza una simulación de mesa para comprobar la comunicación y la coordinación previstas en el plan.
              p.mb-2 El ejercicio plantea que una jornada ficticia se desarrolla en un lugar con condiciones de acceso previamente verificadas. El equipo dispone de un canal principal, un medio alternativo y un responsable institucional de apoyo.
              p.mb-0 Esta condición pertenece exclusivamente al escenario simulado: no significa que la restricción del caso real haya sido resuelta.

        .tarjeta.p-lg-4.p-3.h-100.mb-0
          .row.align-items-center.justify-content-center.mb-0
            .col-lg-5.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
              figure
                img(src="@/assets/curso/tema2/img14.png", data-aos="zoom-in").mx-auto
            .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
              h4.mb-2 Roles del ejercicio
              p.mb-2 La persona facilitadora presenta la información y los cambios del escenario. Quien representa al personal sanitario comunica las novedades y aplica las acciones previstas. La coordinación recibe los avisos y articula los apoyos.
              p.mb-0 Una persona observadora registra las actuaciones y sus resultados. Si participa alguien representando a un usuario, su intervención se limita a leer mensajes acordados, sin intimidación real ni contacto físico.

        .tarjeta.p-lg-4.p-3.h-100.mb-0
          .row.align-items-center.justify-content-center.mb-0
            .col-lg-5.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
              figure
                img(src="@/assets/curso/tema2/img15.png", data-aos="zoom-in").mx-auto
            .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
              h4.mb-2 Inicio de la situación
              p.mb-2 Una persona expresa inconformidad por el tiempo de espera. En el escenario existen condiciones para dialogar con seguridad.
              p.mb-0 La actuación esperada comprende escuchar la solicitud, ofrecer información conocida y explicar las gestiones posibles, sin prometer resultados que el equipo no puede garantizar. La observación se mantiene para reconocer cambios en la situación.

        .tarjeta.p-lg-4.p-3.h-100.mb-0
          .row.align-items-center.justify-content-center.mb-0
            .col-lg-5.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
              figure
                img(src="@/assets/curso/tema2/img16.png", data-aos="zoom-in").mx-auto
            .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
              h4.mb-2 Cambio de las condiciones
              p.mb-2 La facilitación informa que la persona anuncia que agredirá al personal. Simultáneamente, el canal principal deja de funcionar.
              p.mb-2 El equipo debe reconocer que las condiciones cambiaron y que continuar el diálogo no constituye la prioridad. La respuesta esperada integra las medidas de protección previstas y la solicitud de apoyo mediante el canal alternativo.
              p.mb-0 Durante el ejercicio, estas actuaciones se describen verbalmente. No se representa físicamente una agresión.

        .tarjeta.p-lg-4.p-3.h-100.mb-0
          .row.align-items-center.justify-content-center.mb-0
            .col-lg-5.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
              figure
                img(src="@/assets/curso/tema2/img17.png", data-aos="zoom-in").mx-auto
            .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
              h4.mb-2 Coordinación de la respuesta
              p.mb-2 La coordinación confirma la recepción del aviso y comunica las acciones que corresponden según el plan simulado. El personal transmite la información necesaria y evita asumir que el apoyo está activado mientras no exista confirmación.
              p.mb-0 La persona observadora registra qué información se comunicó, qué canal se utilizó y si los participantes reconocieron sus responsabilidades.

        .tarjeta.p-lg-4.p-3.h-100.mb-0
          .row.align-items-center.justify-content-center.mb-0
            .col-lg-5.col-md-8.mb-0.mb-lg-0.order-2.order-lg-2
              figure
                img(src="@/assets/curso/tema2/img18.png", data-aos="zoom-in").mx-auto
            .col-lg-7.order-1.order-lg-1.mb-4.mb-lg-0
              h4.mb-2 Cierre y observación
              p.mb-0 La simulación finaliza con la revisión de las decisiones y los resultados. El análisis diferencia lo que el equipo intentó realizar de lo que efectivamente pudo comprobar.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 3.
          span Criterios para observar la respuesta
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th Criterio
                th Evidencia observable
            tbody
              tr
                td Reconocimiento del cambio
                td El equipo diferencia la inconformidad inicial del anuncio de agresión.
              tr
                td Prioridad de protección
                td La actuación se ajusta cuando deja de existir seguridad para dialogar.
              tr
                td Uso de alternativas
                td Se identifica y utiliza el canal alternativo previsto en el escenario.
              tr
                td Confirmación del apoyo
                td La coordinación recibe el aviso y comunica las acciones correspondientes.
              tr
                td Claridad de funciones
                td Los participantes reconocen quién informa, quién coordina y quién registra.
              tr
                td Registro de resultados
                td Se documentan actuaciones, dificultades y aspectos pendientes sin presentar suposiciones como hechos.

    .container
      .row.align-items-center.bg-color-13.mb-5.p-3.br-15
        .col-lg-12
          p.mb-0 Los resultados pueden registrarse como observado, no observado o no verificable, acompañados de una descripción. Estas categorías apoyan la revisión del ejercicio; no constituyen por sí solas una calificación de la evidencia de aprendizaje.
  
  
  
    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.svg")
          h3.titulo-con-imagen__texto Resultados del ejercicio
  
  
    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema2/img19.png", data-aos="zoom-in").mx-auto
      .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3.mb-lg-2 En este caso ficticio, el equipo reconoce el anuncio de agresión, prioriza la protección y utiliza el canal alternativo. El aviso llega a la coordinación, pero su recepción se confirma únicamente después de un segundo intento. <br>La revisión muestra que no estaba definido quién debía confirmar la recepción cuando el responsable principal atendía otra comunicación. Este hallazgo señala una condición organizacional que requiere análisis.
        .container
          .row.align-items-center.bg-color-02.mb-0.p-3.br-15
            .col-lg-12
              p.mb-0 La simulación aporta así información para evaluar el plan: permite contrastar las responsabilidades previstas con las actuaciones observadas y reconocer qué ajustes deben implementarse y comprobarse. Este proceso se desarrolla en el siguiente capítulo.
    
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
                texto="Del análisis a la respuesta"
                tiempo
                :audio="require_src('@/assets/curso/podcast/podcast1.mp3')"
              )

      .col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0
        .container.h-100
          .row.align-content-center.bg-color-c1.mb-0.p-3.br-15.h-100
            .col-lg-12
              p.mb-2 El podcast “Del análisis a la respuesta” expone el caso de la jornada extramural y explica cómo se relacionan la valoración del riesgo, las medidas de protección y la coordinación institucional.
              p.mb-0 Consulte este recurso para reconocer por qué comprobar un apoyo no resuelve todas las condiciones de riesgo y cómo una simulación permite identificar dificultades antes de una nueva actividad. 
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
