<template>
  <section id="team" class="pricing_area gray-bg pt-115 pb-120">
    <div class="pricing_shape">
      <img src="assets/images/shape-3.png" alt="shape" />
    </div>
    <div class="container">
      <CoreTitle subtitle="Echipa" center />
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-7 col-sm-8" v-for="m in members" :key="m.name">
          <div class="team_price mt-30">
            <div class="team_header text-center">
              <img :src="m.avatar" width="100" />
              <h4 class="team_title mt-2">{{m.position}}</h4>
              <span class="price">{{m.name}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Team",
  data() {
    return {
        members: [
            {
                name: 'Vlad',
                position: 'CMO',
                avatar: 'https://i.ibb.co/7JDH9RB/v.png'
            },
            {
                name: 'George',
                position: 'CTO',
                avatar: 'https://i.ibb.co/SxmbNWr/g.png'
            }
        ]
    };
  },
};
</script>
