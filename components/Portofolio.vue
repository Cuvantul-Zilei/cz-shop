<template>
  <section id="portofolio" class="project_area pt-125">
    <div class="container">
      <CoreTitle
        title="Sectiune cu text"
        subtitle="si subtitlu"
      />
      <div class="row">
        <div class="col-8">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <CoreTitle
        right
        subtitle="Doar titlu"
      />
      <div class="row">
        <div class="col-8 offset-4 text-right">
          <p>
            si putin text
          </p>
        </div>
      </div>
    </div>
    <div class="container mt-45">
      <CoreTitle
        center
        subtitle="Sectiune centrata"
      />
      <div class="row">
        <div class="col-8 offset-2 text-center">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Portofolio",
};
</script>
