<template>
  <section id="about" class="about_area pt-70 pb-120">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-lg-6 col-md-9">
          <div class="about_image mt-50">
            <img src="/images/girl_reading.png" alt="Hero" />
            <div class="about_shape"></div>
          </div>
          <!-- about image -->
        </div>
        <div class="col-lg-6">
          <div class="about_content mt-45">
            <br />
            <CoreTitle
              subtitle="Despre proiect"
              title="Învață cuvinte noi și înțelesul lor într-un mod amuzant și gratuit"
            />

            <!-- section title -->
            <p>
              <b>Cuvântul Zilei</b> este un proiect exclusiv digital care are la
              bază dorința de a ajuta copiii și adulții să se exprime mai ușor.
              Misiunea noastră este să folosim tehnologia existentă
              pentru a ajuta românii de pretutindeni să-și îmbunătățească
              abilitățile de comunicare.
            </p>

            <div class="about_skills pt-15">
              <!-- skill item -->
              <div
                class="skill_item mt-20"
                v-for="skill in skills"
                :key="skill.name"
              >
                <div class="skill_header">
                  <h6 class="skill_title">{{ skill.name }}</h6>
                  <div class="skill_percentage">
                    <p>
                      <span class="counter">{{ skill.number }}</span
                      >%
                    </p>
                  </div>
                </div>
                <div class="skill_bar">
                  <div class="bar_inner">
                    <div
                      class="bar progress_line"
                      :style="'width: ' + skill.number + '%'"
                    ></div>
                  </div>
                </div>
              </div>
              <!-- skill item -->
            </div>
            <!-- about skill -->
          </div>
          <!-- about content -->
        </div>
      </div>
      <!-- row -->
    </div>
    <div class="container mt-45">
      <CoreTitle center subtitle="Unelte digitale" />
      <div class="row">
        <div class="col-8 offset-2 text-center">
          <p class="mb-4 mt-4">
            Uneltele noastre digitale te vor ajuta zilnic să îți
            îmbogățești lexiconul
          </p>
          <!-- <CorePrimaryBtn href="#unelte" class="mt-4 mb-4"
            >Vezi unelte</CorePrimaryBtn
          > -->
        </div>
      </div>
    </div>

    <div class="container mt-45" id="unelte">
      <div class="row">
        <CoreCard
          v-for="(t, index) in tools"
          :icon="t.icon"
          :title="t.title"
          :description="t.description"
          :key="index"
        ></CoreCard>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      activeMenuIndex: 0,
      skills: [],
    };
  },
  computed: {
    items() {
      return this.$store.state.structure.menu;
    },
    links() {
      return this.$store.state.structure.smLinks;
    },
    tools() {
      return this.$store.state.structure.toolsList;
    },
  },
};
</script>

<style>
.about {
  color: red;
}
</style>
