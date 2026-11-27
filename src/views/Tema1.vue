<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Aplicación de herramientas de gestión
    
    .bg-full-width.bg-fondo-1
      .px-lg-0.py-lg-0.px-0.py-0
        img(src="@/assets/curso/tema1/img02.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-5
        .col-lg-10(data-aos="fade-right")
          p.banner-text Las herramientas de gestión del riesgo permiten organizar la información de una situación y utilizarla para fundamentar decisiones. Su aplicación relaciona los conceptos desarrollados en el componente anterior con las condiciones concretas del ejercicio sanitario.
    
    
      .row.mb-lg-4.mb-3.justify-content-center.align-items-center
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema1/img03.png", data-aos="zoom-in").mx-auto
        .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0
          p.mb-3 Las herramientas teóricas aportan criterios para comprender las amenazas, las vulnerabilidades, las capacidades y las posibles consecuencias. Las herramientas operativas, como la matriz de valoración y los registros de seguimiento, permiten documentar ese análisis y relacionarlo con medidas, responsables y evidencias de cumplimiento.

          .container
            .row.align-items-center.bg-color-02.mb-3.p-3.br-15
              .col-lg-12
                p.mb-0 Su utilidad depende de la calidad de la información y de la aplicación de las medidas. Un instrumento diligenciado no demuestra, por sí solo, que existan condiciones de seguridad. Además, cuando se presenta peligro inmediato, la protección y la solicitud de apoyo tienen prioridad sobre el registro o la finalización del análisis.

      separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Análisis del contexto

    .container
      .row.align-items-center.bg-color-03.mb-4.p-3.br-15
        .col-lg-12
          p.mb-0 El análisis del contexto permite reconocer las condiciones internas y externas que influyen en la seguridad de una actividad sanitaria. Considera el lugar, las características del servicio, los antecedentes relevantes y los cambios que pueden modificar la exposición del personal.

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-8
        TabsC.color-primario.mb-0
          .py-3.py-md-4.px-5(titulo="Contexto interno")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-9.mb-4.mb-lg-0
                p.mb-3 Comprende las condiciones de la organización: distribución de responsabilidades, procedimientos, recursos, comunicación y preparación del equipo. Su análisis permite establecer si las medidas previstas pueden aplicarse.
                p.mb-0 Por ejemplo, disponer de un número de contacto no demuestra que exista un mecanismo de apoyo funcional. También es necesario conocer quién recibe el aviso, en qué horario está disponible y cómo se confirma la recepción.
              .col-lg-3.col-md-8
                figure
                  img(src='@/assets/curso/tema1/img04.png', alt='', style="max-width: 150px").mx-auto

          .py-3.py-md-4.px-5(titulo="Contexto externo")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-9.mb-4.mb-lg-0
                p.mb-3 Incluye las condiciones sociales, territoriales y de acceso que pueden afectar la actividad. Se examinan hechos relevantes y verificables, evitando atribuir peligrosidad a una comunidad por sus características culturales, sociales o territoriales.
                p.mb-0 Un reporte de restricción de paso requiere revisar su ubicación, actualidad y relación con el desplazamiento previsto. La información debe provenir de fuentes pertinentes y contrastarse mediante los canales institucionales disponibles.
              .col-lg-3.col-md-8
                figure
                  img(src='@/assets/curso/tema1/img05.png', alt='', style="max-width: 150px").mx-auto

          .py-3.py-md-4.px-5(titulo="Cambios relevantes")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-9.mb-4.mb-lg-0
                p.mb-3 Las condiciones pueden modificarse antes o durante la actividad. Una variación en el acceso, la disponibilidad de apoyo o el comportamiento de las personas puede exigir una nueva valoración.
                p.mb-0 El análisis diferencia los hechos confirmados de la información pendiente de verificación. Esta distinción evita presentar suposiciones como certezas y permite reconocer qué aspectos requieren aclaración antes de tomar una decisión.
              .col-lg-3.col-md-8
                figure
                  img(src='@/assets/curso/tema1/img06.png', alt='', style="max-width: 150px").mx-auto


    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Identificación de vulnerabilidades

    .container
      .row.align-items-center.bg-color-06.mb-5.p-3.br-15
        .col-lg-12
          p.mb-0 La identificación de vulnerabilidades permite reconocer condiciones que pueden aumentar la susceptibilidad al daño o dificultar una respuesta segura frente a una amenaza. Se realiza en relación con una actividad y un contexto específicos.


    .row.mb-lg-4.mb-3.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/img07.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-02" data-aos="zoom-in").mb-0
          .tarjeta(titulo="Preparación individual")
            p.mb-3.ms-lg-5 Comprende el conocimiento de los procedimientos, el reconocimiento de señales de riesgo y la capacidad para utilizar los mecanismos de protección y apoyo. Una necesidad de preparación debe relacionarse con las oportunidades de orientación, práctica y acompañamiento disponibles.
            p.mb-0.ms-lg-5 Identificar estas condiciones no implica responsabilizar al trabajador por una agresión. La preparación individual requiere recursos y medidas institucionales que permitan actuar.

          .tarjeta(titulo="Condiciones institucionales")
            p.mb-3.ms-lg-5 Incluyen responsabilidades poco claras, canales de comunicación sin comprobar, recursos insuficientes o procedimientos que el equipo desconoce. Estas condiciones requieren intervenciones organizacionales acordes con el riesgo identificado.
            p.mb-0.ms-lg-5 Por ejemplo, si el personal conoce cómo emitir una alerta, pero no existe un responsable disponible para recibirla, la dificultad involucra la organización del apoyo.

          .tarjeta(titulo="Capacidades y factores protectores")
            p.mb-3.ms-lg-5 Son recursos y condiciones que favorecen la protección: coordinación definida, canales probados, procedimientos conocidos y preparación practicada. Su identificación requiere distinguir entre lo previsto y lo comprobado.
            p.mb-0.ms-lg-5 Una capacidad puede estar disponible en una sede y no ser accesible durante un desplazamiento. Por ello, su utilidad debe verificarse en el escenario donde se necesita.

          .tarjeta(titulo="Condiciones sin verificar")
            p.mb-3.ms-lg-5 Cuando no existe evidencia suficiente sobre una capacidad, esta se registra como pendiente de comprobación. La ausencia de información no permite afirmar que el recurso funciona ni que presenta una falla.
            p.mb-0.ms-lg-5 Esta distinción facilita orientar las acciones hacia la verificación, el fortalecimiento o la corrección de las condiciones encontradas.



    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Análisis y valoración del riesgo

    p.mb-2 El análisis relaciona las amenazas con las vulnerabilidades, las capacidades y las posibles consecuencias. La valoración utiliza esa información para establecer prioridades y orientar decisiones según la metodología adoptada.
    p.mb-4 La aplicación puede organizarse mediante la siguiente ruta de pasos:

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema1/img08.png", data-aos="zoom-in", alt="")
      .col-lg-8.order-2.order-lg-2.col-md-12.mb-0.mb-lg-0
        SlyderF(columnas="col-lg-6 col-xl-6 col-md-12 col-sm-12 p-3")
          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img09.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            .bg-color-03.p-2.mb-2
              h4.text-center.mb-0 Delimitar el escenario
            p.mb-0.text-center Se establece la actividad, el lugar y el momento del análisis. Una jornada extramural, una consulta y un traslado asistencial pueden requerir medidas diferentes.

          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img10.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            .bg-color-03.p-2.mb-2
              h4.text-center.mb-0 Precisar la amenaza
            p.mb-0.text-center Se describe el hecho o comportamiento con potencial de causar daño. La descripción se apoya en información verificable y evita confundir una inconformidad con una amenaza.

          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img11.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            .bg-color-03.p-2.mb-2
              h4.text-center.mb-0 Relacionar las condiciones
            p.mb-0.text-center Se identifican las vulnerabilidades y las capacidades que influyen en la exposición y la respuesta. El análisis explica cómo se relacionan con la amenaza.

          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img12.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            .bg-color-03.p-2.mb-2
              h4.text-center.mb-0 Examinar las consecuencias
            p.mb-0.text-center Se reconocen las afectaciones que podrían presentarse sobre las personas y la atención. Las consecuencias anticipadas se diferencian de los daños efectivamente ocurridos.

          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img13.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            .bg-color-03.p-2.mb-2
              h4.text-center.mb-0 Establecer la prioridad
            p.mb-2.text-center Se aplican los criterios institucionales. Cuando se utiliza el método didáctico del componente anterior, se distingue entre protección inmediata, intervención previa y seguimiento programado.
            p.mb-0.text-center Estas categorías orientan prioridades de acción; no representan una escala numérica de probabilidad ni autorizan automáticamente una actividad.

          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema1/img14-num.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            .bg-color-03.p-2.mb-2
              h4.text-center.mb-0 Sustentar la decisión
            p.mb-2.text-center Se relaciona la prioridad con medidas concretas y verificables. La decisión puede requerir mantener, ajustar, aplazar o reprogramar una actividad, de acuerdo con las condiciones y las competencias institucionales.
            p.mb-0.text-center La matriz permite organizar este proceso. Cuando cambian las amenazas, las vulnerabilidades o las capacidades disponibles, el análisis y la valoración deben actualizarse.


    separador
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Medidas de prevención y mitigación

    p.mb-4 Las medidas se seleccionan a partir de los hallazgos del análisis. Su pertinencia depende de que intervengan las condiciones identificadas y puedan aplicarse con los recursos disponibles.
      
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 1.
          span Medidas según su propósito
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th Aspecto
                th Prevención
                th Mitigación
            tbody
              tr
                td Propósito
                td Evitar nuevas condiciones de riesgo.
                td Reducir condiciones de riesgo existentes o sus posibles consecuencias.
              tr
                td Aplicación
                td Incorpora condiciones de seguridad desde la organización de una actividad.
                td Interviene dificultades o exposiciones identificadas en un escenario existente.
              tr
                td Ejemplo
                td Definir y comprobar los mecanismos de apoyo al organizar una nueva jornada extramural.
                td Corregir un canal de comunicación que presenta fallas durante la preparación de una jornada.
              tr
                td Comprobación
                td Verificar que las condiciones previstas estén incorporadas antes de la exposición.
                td Comprobar que la intervención reduzca la dificultad identificada y revisar los pendientes.



    .bloque-texto-g.bg-color-05.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema1/img14.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El momento de aplicación no es suficiente para diferenciar ambas medidas: una acción realizada antes de la jornada puede mitigar un riesgo que ya existe. La clasificación depende de su propósito y de la condición intervenida.

    .row.mb-lg-3.mb-3.justify-content-center.align-items-center
      .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/img15.png", data-aos="zoom-in").mx-auto
      .col-lg-7.order-2.order-lg-1.mb-0.mb-lg-0
        .container
          .row.align-items-center.bg-color-02.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 Cada medida debe relacionarse con un responsable, un momento de cumplimiento y una evidencia. Por ejemplo, “fortalecer la comunicación” es una intención general; definir al receptor del aviso, probar el canal y registrar el resultado permite comprobar su ejecución.
        p.mb-0 La aplicación también exige seguimiento. Si una medida no funciona o deja de responder a las condiciones del escenario, se revisan las alternativas y las decisiones sobre la actividad. 


    separador
    
    .bg-full-width.bg-fondo-1
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.5 Rutas de respuesta

      .px-lg-0.py-lg-0.px-0.py-0
        img(src="@/assets/curso/tema1/img16.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-5
        .col-lg-10(data-aos="fade-right")
          p.banner-text Las rutas de respuesta articulan las acciones de protección, comunicación y apoyo previstas por la institución. Su activación depende de las condiciones observadas y de los criterios establecidos para el evento.<br>La siguiente ruta organiza sus elementos principales. Las acciones pueden desarrollarse simultáneamente y adaptarse a la situación.



      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
          figure
            img(src="@/assets/curso/tema1/img17.png", data-aos="zoom-in", alt="")
        .col-lg-8.order-2.order-lg-1.col-md-12.mb-0.mb-lg-0
          LineaTiempoD.color-primario
            .row(numero="1" titulo="Reconocer la situación")
              .col-12
                p.mb-0 Se identifican hechos y cambios relevantes. Una queja no constituye automáticamente una amenaza; un anuncio de agresión o un intento de ataque modifica las condiciones y requiere una respuesta acorde.

            .row(numero="2" titulo="Priorizar la protección")
              .col-12
                p.mb-0 Se aplican las medidas institucionales que permitan reducir la exposición. La protección no debe esperar la finalización de una matriz o un formulario.

            .row(numero="3" titulo="Comunicar y solicitar apoyo")
              .col-12
                p.mb-0 Se transmite información breve y útil por los canales previstos: ubicación, situación observada y apoyo requerido. Cuando el medio principal falla, se utiliza la alternativa definida, si está disponible y puede emplearse con seguridad.

            .row(numero="4" titulo="Coordinar los apoyos")
              .col-12
                p.mb-0 Los responsables articulan las acciones según sus funciones y las necesidades del evento. Si existen personas afectadas, se coordinan la atención y el acompañamiento correspondientes.

            .row(numero="5" titulo="Registrar y revisar")
              .col-12
                p.mb-0 Una vez atendidas las necesidades inmediatas, se documentan los hechos y las medidas aplicadas. Se utilizan las rutas internas y los reportes sanitarios o laborales que correspondan, conforme a los procedimientos aplicables.

    .container
      .row.align-items-center.bg-color-06.mb-4.p-3.br-15
        .col-lg-12
          p.mb-0 La comunicación y la desescalación pueden apoyar la respuesta cuando existen condiciones para una interacción segura. No exigen permanecer en peligro ni garantizan que una conducta violenta se detenga. 

    separador
    
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.6 Aplicación mediante casos

      
    .container
      .row.align-items-center.bg-color-02.mb-4.p-3.br-15
        .col-lg-12
          p.mb-0.text-center El siguiente caso ficticio muestra cómo se relacionan las herramientas con decisiones y acciones verificables.


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        TabsC.color-primario.mb-0
          .py-3.py-md-4.px-5(titulo="Información del escenario")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-9.mb-4.mb-lg-0
                p.mb-3 Una institución programa una jornada extramural. Antes del desplazamiento, la coordinación confirma un reporte reciente de restricción de paso en la vía prevista. El equipo no ha probado el canal de comunicación y desconoce quién recibirá una solicitud de apoyo.
                p.mb-0 La jornada todavía no ha comenzado y no existe una agresión en curso.
              .col-lg-3.col-md-8
                figure
                  img(src='@/assets/curso/tema1/img18.png', alt='', style="max-width: 150px").mx-auto

          .py-3.py-md-4.px-5(titulo="Relación de los hallazgos")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-9.mb-4.mb-lg-0
                p.mb-3 La restricción de paso representa una amenaza para el desplazamiento. La comunicación sin comprobar y la falta de claridad sobre el responsable de apoyo constituyen vulnerabilidades.
                p.mb-3 La institución dispone de una persona encargada de coordinar la jornada y de un medio alternativo de comunicación, pero aún debe comprobar su funcionamiento en las condiciones previstas.
                p.mb-0 Las consecuencias posibles incluyen intimidaciones, dificultades para solicitar ayuda e interrupción de la actividad. Estas se registran como afectaciones potenciales, no como daños ocurridos.
              .col-lg-3.col-md-8
                figure
                  img(src='@/assets/curso/tema1/img19.png', alt='', style="max-width: 150px").mx-auto

          .py-3.py-md-4.px-5(titulo="Prioridad de intervención")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-9.mb-4.mb-lg-0
                p.mb-3 Según el método didáctico, corresponde intervención previa: la actividad está programada y existen condiciones relevantes pendientes de fortalecimiento.
                p.mb-0 La prioridad conduce a verificar las condiciones antes de decidir sobre el desplazamiento. No equivale a una autorización para iniciar la jornada.
              .col-lg-3.col-md-8
                figure
                  img(src='@/assets/curso/tema1/img20.png', alt='', style="max-width: 150px").mx-auto

          .py-3.py-md-4.px-5(titulo="Medidas y comprobación")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-9.mb-4.mb-lg-0
                p.mb-3 La coordinación actualiza la información sobre la restricción y confirma quién recibirá las alertas. El equipo prueba el canal principal y la alternativa disponible, y registra los resultados.
                p.mb-0 Durante la prueba se comprueba que el canal principal presenta fallas. El medio alternativo permite establecer contacto y el responsable confirma la recepción del aviso. Este resultado demuestra una capacidad disponible, pero no resuelve la amenaza relacionada con el acceso.
              .col-lg-3.col-md-8
                figure
                  img(src='@/assets/curso/tema1/img21.png', alt='', style="max-width: 150px").mx-auto

          .py-3.py-md-4.px-5(titulo="Decisión y seguimiento")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-9.mb-4.mb-lg-0
                p.mb-3 La restricción de paso permanece confirmada. Ante la ausencia de condiciones suficientes para el desplazamiento previsto, la coordinación decide aplazar la jornada y gestionar su reprogramación.
                p.mb-0 Se documentan la decisión, los responsables y las condiciones que deben revisarse antes de definir una nueva fecha. La disponibilidad de comunicación se conserva como un avance comprobado, mientras que la condición de acceso permanece pendiente.
              .col-lg-3.col-md-8
                figure
                  img(src='@/assets/curso/tema1/img22.png', alt='', style="max-width: 150px").mx-auto


          .py-3.py-md-4.px-5(titulo="Prioridad de intervención")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-9.mb-4.mb-lg-0
                p.mb-3 Según el método didáctico, corresponde intervención previa: la actividad está programada y existen condiciones relevantes pendientes de fortalecimiento.
                p.mb-0 La prioridad conduce a verificar las condiciones antes de decidir sobre el desplazamiento. No equivale a una autorización para iniciar la jornada.
              .col-lg-3.col-md-8
                figure
                  img(src='@/assets/curso/tema1/img20.png', alt='', style="max-width: 150px").mx-auto

          .py-3.py-md-4.px-5(titulo="Medidas y comprobación")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-9.mb-4.mb-lg-0
                p.mb-3 La coordinación actualiza la información sobre la restricción y confirma quién recibirá las alertas. El equipo prueba el canal principal y la alternativa disponible, y registra los resultados.
                p.mb-0 Durante la prueba se comprueba que el canal principal presenta fallas. El medio alternativo permite establecer contacto y el responsable confirma la recepción del aviso. Este resultado demuestra una capacidad disponible, pero no resuelve la amenaza relacionada con el acceso.
              .col-lg-3.col-md-8
                figure
                  img(src='@/assets/curso/tema1/img21.png', alt='', style="max-width: 150px").mx-auto

          .py-3.py-md-4.px-5(titulo="Decisión y seguimiento")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-9.mb-4.mb-lg-0
                p.mb-3 La restricción de paso permanece confirmada. Ante la ausencia de condiciones suficientes para el desplazamiento previsto, la coordinación decide aplazar la jornada y gestionar su reprogramación.
                p.mb-0 Se documentan la decisión, los responsables y las condiciones que deben revisarse antes de definir una nueva fecha. La disponibilidad de comunicación se conserva como un avance comprobado, mientras que la condición de acceso permanece pendiente.
              .col-lg-3.col-md-8
                figure
                  img(src='@/assets/curso/tema1/img22.png', alt='', style="max-width: 150px").mx-auto

    .container
      .row.align-items-center.bg-color-07.mb-3.p-3.br-15
        .col-lg-12
          p.mb-0.text-center El caso muestra que aplicar herramientas implica relacionar información, medidas y resultados. Una mejora en una capacidad no elimina por sí sola las demás condiciones de riesgo. Esta información será el punto de partida para estudiar la implementación y adaptación del plan de contingencia.
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
    mostrarIndicador: true,
  }),
}
</script>

<style lang="sass"></style>
