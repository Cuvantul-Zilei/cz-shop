<template>
  <section id="contact" class="call_to_action_area">
    <div class="container">
      <div
        class="call_to_action_wrapper wow fadeIn"
        data-wow-duration="1.3s"
        data-wow-delay="0.5s"
      >
        <div class="row">
          <div class="col-lg-12">
            <div
              class="call_to_action_box d-md-flex justify-content-between align-items-center"
            >
              <div class="call_to_action_content" v-if="title || subtitle">
                <h3 class="action_title" v-if="title">
                  {{ title }}
                </h3>
                <ul class="line" v-if="title">
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <p v-if="subtitle">
                  {{ subtitle }}
                </p>
              </div>
              <!-- call to action content -->

              <div class="call_to_action_btn">
                <a target="_blank" :href="btnLink" rel="nofollow" class="main-btn">{{
                  btnLabel
                }}</a>
              </div>
              <!-- call to action btn -->
            </div>
            <!-- call to action box -->
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- call to action wrapper -->
    </div>
    <!-- container -->
  </section>
</template>
<script>
export default {
  name: "CallToAction",
  props: {
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    btnLink: {
      type: String,
      default: "",
    },
    btnLabel: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      activeMenuIndex: 0,
      skills: [
        {
          name: "Online skills",
          number: 90,
        },
        {
          name: "Dragoste de limba",
          number: 80,
        },
      ],
    };
  },
  computed: {
    items() {
      return this.$store.state.structure.menu;
    },
  },
};
</script>
