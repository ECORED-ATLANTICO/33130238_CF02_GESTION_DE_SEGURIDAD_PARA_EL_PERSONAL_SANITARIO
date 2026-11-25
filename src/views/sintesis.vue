<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-3 La Gestión y evaluación del plan de contingencia integra el análisis del contexto, la identificación de amenazas y vulnerabilidades y la valoración de las capacidades disponibles. Esta información sustenta decisiones y orienta la aplicación de medidas de prevención, mitigación y respuesta acordes con cada escenario de atención.

    p.mb-3 El plan de contingencia articula estas medidas con responsabilidades, recursos y mecanismos de comunicación y apoyo. Su implementación requiere comprobar que las disposiciones puedan aplicarse y adaptarlas cuando cambian las condiciones. Los casos y las simulaciones permiten observar la coordinación, reconocer dificultades y fortalecer la preparación del equipo.

    p.mb-5 La evaluación mediante el ciclo PHVA —Planear, Hacer, Verificar y Actuar— contrasta lo previsto con lo ejecutado y los resultados comprobados. Los hallazgos sustentan acciones preventivas, correctivas y de mejora, cuya ejecución y eficacia requieren seguimiento. Este proceso continuo fortalece la protección del personal sanitario y favorece la continuidad segura de la atención.


    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg" alt="La Gestión y evaluación del plan de contingencia  integra análisis, prevención, mitigación y respuesta. El plan de contingencia organiza las acciones y el ciclo PHVA permite evaluar y mejorar la protección del personal sanitario.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({}),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
