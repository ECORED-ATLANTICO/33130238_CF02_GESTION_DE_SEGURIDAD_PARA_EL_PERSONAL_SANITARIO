<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/intro/img01.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3 La gestión del riesgo de violencia contra el personal sanitario requiere convertir el análisis de las condiciones de seguridad en acciones organizadas de prevención, mitigación y respuesta. Para ello, es necesario relacionar las amenazas, las vulnerabilidades y las capacidades disponibles con las medidas previstas en el plan de contingencia y los protocolos institucionales.

        .container
          .row.align-items-center.bg-color-01.mb-0.p-3.br-15
            .col-lg-12
              p.mb-0 El componente formativo Gestión y evaluación del plan de contingencia aborda la aplicación de herramientas para analizar situaciones, seleccionar medidas de protección y coordinar la respuesta en diferentes escenarios de atención. Asimismo, desarrolla la implementación y adaptación del plan frente a cambios en el contexto, mediante casos y una simulación que permiten reconocer responsabilidades, recursos y condiciones para actuar.
          

    p.mb-0 Finalmente, presenta la evaluación del plan mediante el ciclo PHVA (Planear, Hacer, Verificar y Actuar). Este proceso permite contrastar lo previsto con lo ejecutado, sustentar hallazgos y establecer acciones preventivas, correctivas y de mejora. Su seguimiento contribuye a fortalecer la protección del personal sanitario y favorecer la continuidad segura de la atención.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
