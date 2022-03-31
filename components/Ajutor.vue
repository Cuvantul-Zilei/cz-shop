<template>
  <section id="pricing" class="pricing_area gray-bg pt-115 pb-120">
    <div class="pricing_shape">
      <img src="assets/images/shape-3.png" alt="shape" />
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section_title text-center pb-30">
            <h5 class="sub_title">Ajută tinerii din România să învețe cuvinte noi în fiecare zi</h5>
            <h3 class="main_title">Cum?</h3>
            <ul class="line">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-7 col-sm-8">
          <div class="single_price mt-30">
            <div class="price_header">
              <h4 class="price_title">Gratuit</h4>
              <!-- <span class="price">0RON</span> -->
              <p>Apreciază și distribuie pe social media</p>
            </div>
            <div class="price_body">
              <ul>
                <li><i class="lni lni-checkmark"></i> Like & follow ne oferă vizibilitate</li>
                <li><i class="lni lni-checkmark"></i> Comentariile ne ajută enorm la engagement </li>
                <li>
                  <i class="lni lni-checkmark"></i> Durează câteva secunde și te costă 0 RON
                </li>
                <li :style="{ color: 'white' }">.</li>
              </ul>
            </div>
            <div class="price_btn">
              <div class="">
                <a href="https://facebook.com/cuvantulzilei.ro" class="mr-4"><i class="lni lni-facebook-filled"></i
                  ></a>
                <a href="https://instagram.com/cuvantulzilei.ro"><i class="lni lni-instagram-filled"></i
                  ></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-7 col-sm-8">
          <div class="single_price mt-30">
            <div class="price_header">
              <h4 class="price_title">Contra-valoare</h4>
              <!-- <span class="price"
                  ><a href="https://magazin.online.in.viitor">0-100RON</a></span
                > -->
              <p>Cumpără-ți ceva frumos</p>
            </div>
            <div class="price_body">
              <ul>
                <li>
                  <i class="lni lni-checkmark"></i> Haine și accesorii de cea mai înaltă calitate
                </li>
                <li>
                  <i class="lni lni-checkmark"></i> Livrare în 7 zile oriunde în țară
                </li>
                <li>
                  <i class="lni lni-checkmark"></i> Primesti ceva tangibil în schimbul implicarii tale
                </li>
              </ul>
            </div>
            <div class="price_btn">
              <CorePrimaryBtn target href="https://shop.cuvantulzilei.ro">Vizitează magazinul online</CorePrimaryBtn>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-7 col-sm-8">
          <div class="single_price mt-30">
            <div class="price_header">
              <h4 class="price_title">Donează</h4>
              <!-- <span class="price">RON</span> -->
              <p>Susține direct financiar proiectul</p>
            </div>
            <span class="sticker">Apreciat</span>
            <div class="price_body">
              <ul>
                <li>
                  <i class="lni lni-checkmark"></i> Banii tai finanteaza direct proiectele noastre
                </li>
                <li>
                  <i class="lni lni-checkmark"></i> Access premium la viitoarele noastre planuri
                </li>
                <li :style="{ color: 'white' }">.</li>
              </ul>
            </div>
            <div class="price_btn">
              <DonateBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Ajutor",
    data() {
      return {};
    },
  };
</script>
