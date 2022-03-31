<template>
  <section id="work" class="work_experience_area pt-115">
    <div class="container">
      <CoreTitle title="Planuri de viitor" subtitle="Roadmap" center />
      <div class="work_experience">
        <div class="row my-4" v-for="(e, index) in events" :key="index">
          <div class="col-lg-12" v-if="e.visible">
            <div
              class="single_experience d-lg-flex align-items-center flex-wrap wow fadeIn"
              data-wow-duration="1.3s"
              data-wow-delay="0.2s"
              style="
                visibility: visible;
                animation-duration: 1.3s;
                animation-delay: 0.2s;
                animation-name: fadeIn;
              "
            >
              <div class="experience_title" v-bind:class="{ 'order-last': index%2==1, 'text-lg-right': index%2==0 }">
                <h3 class="title">{{ e.title }}</h3>
                <p>{{ e.subtitle }}</p>
                <span class="date">{{ e.date }}</span>
              </div>
              <div class="experience_number">
                <span>{{ index < 10 ? "0" + (index+1) : (index+1) }}</span>
              </div>
              <div class="experience_content" v-bind:class="{ 'order-first': index%2==1 }">
                <p>
                  {{ e.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="row">
          <div class="col-lg-12">
            <div
              class="single_experience d-lg-flex align-items-center flex-wrap wow fadeIn"
              data-wow-duration="1.3s"
              data-wow-delay="0.5s"
              style="
                visibility: visible;
                animation-duration: 1.3s;
                animation-delay: 0.5s;
                animation-name: fadeIn;
              "
            >
              <div class="experience_title text-lg-right">
                <h3 class="title">UI/UX Designer</h3>
                <p>UIdeck</p>
                <span class="date">March 2019- August 2019</span>
              </div>
              <div class="experience_number">
                <span>02</span>
              </div>
              <div class="experience_content">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr sedia
                  magnaliquya ratsed diam Lorem ipsum dolor sit amconsetetur
                  sadipscing elitr sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam erat sed diam.Lorem ipsum
                  dolor sit ametconsete tur sadipscing elitr sed diam nonumy
                  eirmod tempor invidunt ut labore et dolore magna aliquyam erat
                  sed diamLorem ipsum dolor consetetur sadipscing elitr sed diam
                  nonumy diam...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div
              class="single_experience d-lg-flex align-items-center flex-wrap wow fadeIn"
              data-wow-duration="1.3s"
              data-wow-delay="0.8s"
              style="
                visibility: visible;
                animation-duration: 1.3s;
                animation-delay: 0.8s;
                animation-name: fadeIn;
              "
            >
              <div class="experience_title order-last">
                <h3 class="title">Web Developer</h3>
                <p>GrayGrids</p>
                <span class="date">June 2018- August 2019</span>
              </div>
              <div class="experience_number">
                <span>03</span>
              </div>
              <div class="experience_content order-first">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr sedia
                  magnaliquya ratsed diam Lorem ipsum dolor sit amconsetetur
                  sadipscing elitr sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam erat sed diam.Lorem ipsum
                  dolor sit ametconsete tur sadipscing elitr sed diam nonumy
                  eirmod tempor invidunt ut labore et dolore magna aliquyam erat
                  sed diamLorem ipsum dolor consetetur sadipscing elitr sed diam
                  nonumy diam...
                </p>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Timeline",
  data() {
    return {
      activeMenuIndex: 0,
      events: [
        {
          title: "Idee",
          subtitle: "Online skills",
          date: "ianuarie 2022",
          description:
            "Totul a pornit de la simple idee de a impartasi cu alti romani sentimentul acela fenomenal pe care il ai cand ai invatat un cuvant nou, asa ca ne-am pus pe treaba. Cateva saptamani mai tarziu paginile de social media si website-ul proiectului erau functionale, dar ideile noastre nu erau gata aici.",
          visible: true,
        },
        {
          subtitle: "Online skills",
          date: "iunie-iulie 2022",
          description: "Online skills",
          visible: true,
        },
        {
          subtitle: "Online skills2",
          date: "Q4 2022",
          description: "Online skills2",
          visible: true,
        },
        {
          subtitle: "Online skills3",
          date: "whenever",
          description: "Online skills3",
          visible: true,
        },
        {
          subtitle: "Online skills3",
          date: "Online skills3",
          description: "Online skills3",
          visible: false,
        },
      ],
    };
  },
};
</script>
