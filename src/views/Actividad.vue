<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Gestión y evaluación del plan de contingencia',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> analizar situaciones de implementación y adaptación del plan de contingencia, verificar sus resultados mediante el ciclo PHVA y seleccionar acciones preventivas, correctivas y de mejora, para fortalecer decisiones orientadas a la protección del personal sanitario.',
      barajarPreguntas: true,
      titulo_aprobado: '¡EXCELENTE!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'Antes de una jornada, se confirman cambios en la seguridad de la vía. ¿Qué actuación permite aplicar el plan de acuerdo con el contexto actual?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Conservar la valoración anterior y verificarla al llegar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Usar las medidas de una jornada previa en otro territorio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Actualizar la valoración y comprobar las medidas antes de decidir el desplazamiento.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Consultar únicamente la experiencia personal del equipo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Relacionas los cambios del contexto con una nueva valoración y con la comprobación de las medidas antes de decidir.',
          mensaje_incorrecto:
            'Revisa la información actual: necesitas valorar el efecto de los cambios y comprobar las medidas antes de mantener, ajustar o reprogramar la actividad.',
        },
        {
          id: 2,
          texto:
            'El equipo comprueba un canal alternativo, pero permanece una restricción de acceso confirmada. ¿Qué conclusión es adecuada?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La comunicación mejora una capacidad, pero la decisión debe considerar la restricción pendiente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La prueba del canal permite iniciar el desplazamiento previsto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La restricción deja de ser relevante porque existe apoyo telefónico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La comprobación del canal reemplaza la revisión de las demás condiciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Distingues una capacidad fortalecida de una amenaza que permanece. La decisión necesita considerar el conjunto de condiciones.',
          mensaje_incorrecto:
            'Revisa el alcance de la prueba: disponer de comunicación no resuelve la restricción de acceso ni autoriza automáticamente el desplazamiento.',
        },
        {
          id: 3,
          texto:
            'El plan incluye un teléfono de apoyo, pero no hay evidencia de su funcionamiento durante el recorrido. ¿Qué medida permite comprobar esta capacidad?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registrar el número en una nueva copia del plan.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solicitar al equipo que memorice el contacto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Dar por disponible el apoyo porque figura en el documento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Probar el canal en condiciones pertinentes y confirmar quién recibe los avisos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Compruebas el funcionamiento del recurso y la recepción del apoyo, en lugar de limitarte a su existencia documental.',
          mensaje_incorrecto:
            'Distingue lo previsto de lo comprobado: necesitas probar el canal y verificar que exista un responsable disponible para recibir las alertas.',
        },
        {
          id: 4,
          texto:
            'Durante una atención se anuncia una agresión y la seguridad está comprometida. ¿Qué actuación tiene prioridad?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Completar el análisis del riesgo antes de solicitar apoyo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Aplicar las medidas de protección y activar el apoyo según la situación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Mantener el diálogo hasta lograr una explicación del usuario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Esperar el cierre del evento para aplicar la ruta de respuesta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Priorizas la protección y el apoyo oportuno. El diligenciamiento de instrumentos no debe retrasar la respuesta ante peligro inmediato.',
          mensaje_incorrecto:
            'Revisa la prioridad: ante peligro inmediato necesitas protección y apoyo. La matriz, los registros o la conversación no deben retrasar esas acciones.',
        },
        {
          id: 5,
          texto:
            'La persona responsable de recibir alertas cambia de turno. ¿Qué ajuste permite mantener la coordinación prevista?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Designar un reemplazo disponible, comunicar sus funciones y comprobar el contacto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Actualizar el nombre en el archivo sin informar al equipo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Mantener el contacto anterior hasta la siguiente evaluación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Pedir al personal expuesto que decida a quién llamar durante el evento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Vinculas la adaptación con una responsabilidad conocida, un reemplazo disponible y una comprobación de funcionamiento.',
          mensaje_incorrecto:
            'Revisa la adaptación del plan: cambiar el documento no basta. Necesitas comunicar las funciones y verificar la disponibilidad del apoyo.',
        },
        {
          id: 6,
          texto:
            'Durante la preparación se identifica una falla existente en el canal principal. Se corrige y se comprueba una alternativa. Según su propósito, ¿a qué corresponde esta intervención?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Al registro de consecuencias que ya ocurrieron.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'A la prevención de una condición que todavía no existe.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'A la mitigación de una condición de riesgo identificada.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'A la evaluación final sin modificación de las condiciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Reconoces que la intervención reduce una condición de riesgo existente, aunque se realice antes de la jornada.',
          mensaje_incorrecto:
            'Diferencia el propósito del momento: al intervenir una falla existente desarrollas mitigación. Realizarla antes de la jornada no cambia ese propósito.',
        },
        {
          id: 7,
          texto:
            'El equipo envía una alerta por el canal alternativo y no recibe confirmación. ¿Qué actuación permite comprobar que la coordinación recibió el aviso?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Registrar el envío como prueba suficiente de apoyo activado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Utilizar el mecanismo de confirmación o la alternativa prevista según el plan.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cerrar la comunicación para evitar un segundo contacto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Suponer que el responsable está gestionando la respuesta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Distingues el envío del aviso de su recepción confirmada. La coordinación necesita comprobarse mediante los mecanismos previstos.',
          mensaje_incorrecto:
            'Revisa la comunicación: enviar un mensaje no demuestra que haya sido recibido. Necesitas aplicar la confirmación o la alternativa prevista, manteniendo la protección.',
        },
        {
          id: 8,
          texto:
            '¿Cómo se desarrolla una simulación de mesa de una situación de violencia de forma controlada?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Se bloquean las salidas para comprobar la reacción del equipo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se representan agresiones físicas sin informar a los participantes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se reproduce una amenaza real en el lugar de atención.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Se describen cambios ficticios y actuaciones, sin contacto físico y con posibilidad de interrumpir.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Reconoces que la simulación de mesa permite analizar decisiones sin reproducir físicamente una situación peligrosa.',
          mensaje_incorrecto:
            'Revisa las condiciones del ejercicio: necesitas un escenario ficticio y controlado, actuaciones descritas verbalmente y posibilidad de solicitar la interrupción.',
        },
        {
          id: 9,
          texto:
            'Una simulación supone acceso seguro y muestra una respuesta adecuada. En el territorio real permanece una restricción confirmada. ¿Qué decisión está sustentada?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reprogramar la jornada porque la respuesta simulada fue adecuada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Dar por resuelta la restricción mediante el resultado del ejercicio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Mantener pendiente la decisión de desplazamiento hasta verificar las condiciones reales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Sustituir la verificación territorial por el registro de la simulación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Diferencias las condiciones ficticias de las reales. El resultado de una simulación no resuelve una amenaza del territorio.',
          mensaje_incorrecto:
            'Revisa el alcance del ejercicio: comprobar una respuesta simulada no demuestra seguridad de acceso. Necesitas información actualizada sobre las condiciones reales.',
        },
        {
          id: 10,
          texto:
            'En una simulación se observa el uso del canal alternativo, pero no hay evidencia sobre la coordinación posterior del apoyo. ¿Cómo debe registrarse este último aspecto?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Como realizado, porque se utilizó el canal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Como no verificable, por falta de evidencia suficiente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Como innecesario, porque el ejercicio terminó.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Como incumplido, únicamente porque no quedó registrado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Distingues la ausencia de evidencia de la demostración de un incumplimiento. El resultado no verificable señala información pendiente.',
          mensaje_incorrecto:
            'Revisa los registros: si no tienes evidencia suficiente, el aspecto es no verificable. No puedes afirmar automáticamente que se cumplió o incumplió.',
        },
        {
          id: 11,
          texto:
            'Antes de probar el mecanismo de alertas, se definen responsables, recursos y criterios de comprobación. ¿Qué fase del PHVA se desarrolla principalmente?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verificar, porque ya se dispone de una propuesta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Actuar, porque cualquier definición es una mejora comprobada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Hacer, porque se asignan funciones en el documento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Planear, porque se establece qué se realizará y cómo se comprobará.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Ubicas en Planear la definición de medidas, recursos, responsabilidades y criterios previos a su comprobación.',
          mensaje_incorrecto:
            'Revisa el PHVA: definir lo esperado antes de la ejecución corresponde a Planear. Todavía no has comprobado resultados de la medida.',
        },
        {
          id: 12,
          texto:
            'El equipo ejecuta la prueba del canal alternativo y registra las actuaciones. ¿Qué fase del PHVA representa esta ejecución?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Hacer.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Planear.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Verificar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Actuar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Reconoces que Hacer consiste en aplicar las disposiciones previstas y registrar las actuaciones relevantes.',
          mensaje_incorrecto:
            'Diferencia ejecutar de evaluar: realizar la prueba y registrar las actuaciones corresponde a Hacer; contrastar sus resultados con criterios corresponde a Verificar.',
        },
        {
          id: 13,
          texto:
            'La evaluación contrasta los registros de comunicación con los criterios definidos para la recepción de alertas. ¿A qué fase corresponde?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Hacer.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verificar.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Actuar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Planear.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Identificas Verificar como el contraste entre evidencias y criterios para reconocer resultados y diferencias.',
          mensaje_incorrecto:
            'Revisa el propósito: cuando comparas lo observado con lo esperado desarrollas Verificar, aunque la prueba se haya ejecutado previamente.',
        },
        {
          id: 14,
          texto:
            'A partir de un hallazgo, la institución ajusta las responsabilidades, comunica el cambio y dispone una nueva comprobación. ¿Qué fase del PHVA representa principalmente esta intervención?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Planear, sin relación con resultados anteriores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Hacer, limitada a repetir el ejercicio sin cambios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Verificar, limitada a describir la dificultad encontrada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Actuar, porque transforma el hallazgo en ajustes y seguimiento.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Reconoces Actuar como la intervención derivada de hallazgos. Sus resultados deben comprobarse e incorporarse a la planeación.',
          mensaje_incorrecto:
            'Revisa la relación con el hallazgo: ajustar y comunicar las medidas para atenderlo corresponde principalmente a Actuar, con comprobación posterior de resultados.',
        },
        {
          id: 15,
          texto:
            'El aviso se confirmó después del segundo intento y no se había definido un reemplazo del receptor. ¿Qué formulación sustenta mejor el hallazgo?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El registro evidencia confirmación tardía y la revisión de funciones muestra ausencia de reemplazo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El equipo carece de compromiso, porque necesitó repetir el aviso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La comunicación fue plenamente eficaz, porque finalmente hubo confirmación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La causa fue la falta de atención del receptor, sin necesidad de revisar otros soportes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Relacionas hechos observados con la revisión de funciones y evitas atribuir causas personales sin evidencia.',
          mensaje_incorrecto:
            'Sustenta el hallazgo con registros y criterios. El resultado final no elimina la dificultad, y las causas necesitan contrastarse con evidencia.',
        },
        {
          id: 16,
          texto:
            'Durante el ejercicio se confirma el aviso pendiente. Después se define un reemplazo para intervenir la causa comprobada de la demora. ¿Cómo se distinguen ambas acciones?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La primera es mejora y la segunda es una corrección documental.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ambas son acciones preventivas porque ocurrieron en una simulación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La primera es corrección y la segunda es acción correctiva.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La primera es acción correctiva y la segunda es solo registro.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Distingues resolver una situación puntual de intervenir su causa para evitar que se repita.',
          mensaje_incorrecto:
            'Revisa los propósitos: confirmar el aviso pendiente corrige la situación; definir el reemplazo ante la causa comprobada constituye una acción correctiva.',
        },
        {
          id: 17,
          texto:
            'Otro equipo aún no ha presentado demoras, pero se identifica un vacío potencial en la recepción de alertas. Se asigna y prepara un reemplazo antes de la actividad. ¿Qué acción corresponde?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Corrección de una demora ocurrida.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Acción correctiva sobre una falla comprobada del equipo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registro de un daño ocurrido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Acción preventiva sobre una causa potencial.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Reconoces una intervención sobre una causa potencial antes de que produzca una dificultad en ese equipo.',
          mensaje_incorrecto:
            'Distingue lo ocurrido de lo potencial: si intervienes anticipadamente una causa que aún no produjo la dificultad, desarrollas una acción preventiva.',
        },
        {
          id: 18,
          texto:
            'El directorio de apoyo está actualizado y funciona, pero su consulta puede simplificarse. Se reorganiza para facilitar el acceso sin que exista una falla identificada. ¿Qué acción representa?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Corrección de un aviso sin confirmar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Acción de mejora de una capacidad existente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Acción correctiva ante una causa comprobada de demora.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reporte de un incidente ocurrido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Identificas una acción que optimiza una capacidad existente, sin depender de que se haya presentado una falla.',
          mensaje_incorrecto:
            'Revisa la finalidad: facilitar la consulta de un recurso que funciona es una oportunidad de mejora, no una corrección de una situación ocurrida.',
        },
        {
          id: 19,
          texto:
            'Después del ajuste, dos pruebas registran confirmación en el primer intento. ¿Qué conclusión permite la evidencia?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La acción garantiza el funcionamiento en cualquier escenario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Actualizar el documento fue suficiente para demostrar eficacia general.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El ajuste muestra un resultado favorable en las condiciones ensayadas y requiere seguimiento.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La confirmación reemplaza la revisión de las condiciones de acceso al territorio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Interpretas el resultado junto con sus límites. La evidencia favorece el ajuste probado, pero requiere seguimiento ante cambios.',
          mensaje_incorrecto:
            'Revisa el alcance: dos pruebas no demuestran funcionamiento en todos los escenarios ni resuelven otras amenazas. Necesitas mantener el seguimiento.',
        },
        {
          id: 20,
          texto:
            '¿Qué contenido permite que el informe sustente decisiones y seguimiento del plan?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Contexto, criterios, evidencias, hallazgos, acciones, responsables, plazos y resultados comprobados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Una lista de participantes y fotografías, sin relación con los criterios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una copia actualizada del plan sin resultados de su aplicación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una conclusión de seguridad general basada solo en la opinión del equipo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Integras los elementos que permiten relacionar la evaluación con acciones y resultados verificables.',
          mensaje_incorrecto:
            'Revisa el informe: necesitas vincular el contexto y los criterios con evidencias, hallazgos, acciones, responsables, plazos y resultados de seguimiento.',
        },
      ],
      mensaje_final_aprobado:
        '¡Muy bien! Has alcanzado al menos el 70 % de respuestas correctas. Has fortalecido tus conocimientos para implementar, adaptar y evaluar el plan de contingencia. Revisa la retroalimentación y los temas que aún necesites afianzar.',
      mensaje_final_reprobado:
        'Continúa fortaleciendo tus conocimientos. Revisa la retroalimentación, retoma los apartados relacionados con tus respuestas incorrectas y vuelve a realizar la actividad para afianzar tus decisiones.',
    },
  }),
}
</script>
