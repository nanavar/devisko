<script setup>
import TheNavbarEN from "../../components/English/TheNavbarEN.vue";
import TheFooterEN from "../../components/English/TheFooterEN.vue";
</script>

<template>
  <TheNavbarEN />
  <main>
    <div class="hero-container">
      <img
        class="oil-img"
        src="../../assets/img/flasa.png"
        alt="steklenica oljčnega olja devičko"
      />
      <div class="text-container">
        <h1>Extra Virgin Olive Oil</h1>
        <p>
          <span>High grade olive oil, </span>
          obtained directly from olives by mechanical means only. Bottled on our
          Magaron Hill estate above Portorož.
        </p>
      </div>
    </div>

    <div class="hero-img">
      <img src="../../assets/img/Slovenija.png" alt="Slovenska istra" />
    </div>

    <div class="body-container">
      <div class="body-box">
        <div class="img-box vrste"> </div>
        <div class="body-text">
          <h2>Superb location</h2>
          <p>
            Our extra virgin olive oil is produced from olives harvested from
            our olive groves located in two prime locations in the Slovenian
            Istria region.
          </p>
          <p>
            The Boršt olive grove is nestled in the unspoiled hills of the Koper
            hinterlands, at an altitude of 353 m. 80% of these groves are of the
            indigenous Belica variety, with a healthy mix of Leccina, Maurina,
            Sttorta and other old varieties representing the remainder.
          </p>
        </div>
      </div>

      <div class="body-box">
        <div class="img-box lega"> </div>
        <div class="body-text">
          <h2>Types of olive trees</h2>
          <p>
            The grove at the top of the sun-drenched Magaron Hill, in the
            village of Šentjane, is surrounded by the sea on three sides and is
            planted equally with Leccina and Istrian Belica varieties, with a
            few Frantoia and Pendolino trees for variety.
          </p>
        </div>
      </div>

      <div class="body-box">
        <div class="img-box oljke"> </div>
        <div class="body-text">
          <h2>Production</h2>
          <p>
            The olives are allowed to reach optimum maturity before being
            harvested and processed at the award-winning Babič oil mill. The
            milling occurs within 24 hours of the harvest and at a temperature
            no higher than 27 degrees Celsius.
          </p>
          <p>
            The oil is not filtered and is left to remain cloudy so as to retain
            a richer flavor and aroma. This also ensures the preservation of
            high levels of polyphenols, a crucial ingredient responsible for the
            health benefits provided by olive oil.
          </p>
        </div>
      </div>
      <router-link to="/en/buy" class="main-btn btn-primary">Buy</router-link>
    </div>
  </main>
  <TheFooterEN />
</template>

<style scoped>
h2 {
  margin-bottom: 1em;
}

main {
  margin-top: 10.5em;
}

.hero-container {
  margin: 2.5em;
  display: grid;
  grid-template-areas: "oil text";
  align-items: start;
  justify-items: start;
  height: 25vh;
}

.hero-container .text-container {
  text-align: right;
  position: relative;
  grid-area: text;
}

.hero-container .oil-img {
  grid-area: oil;
  max-height: 70%;
}

.hero-container .text-container h1 {
  font-size: 1.84rem;
  color: var(--color-primary);
  margin-bottom: 1.56rem;
}

.hero-container .text-container p {
  font-size: 1rem;
  right: 0;
  position: absolute;
}

.hero-img {
  margin: 3em auto;
  max-width: 100% /* or 100vw */;
  height: 100px;
  opacity: 0.8;
}

.hero-img img {
  margin: auto;
}

.body-container {
  display: flex;
  flex-direction: column;
}

.body-container .body-text {
  margin: var(--margin-mobile);
  text-align: center;
}

.body-container .body-text h2 {
  font-size: 1.84rem;
}
.body-container .body-box .img-box {
  margin: auto;
  background-image: url(../../assets/img/vrste.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 284px;
}

.body-container .body-box .img-box.lega {
  background-image: url(../../assets/img/lega.jpg);
}
.body-container .body-box .img-box.oljke {
  background-image: url(../../assets/img/oljke.jpg);
}

.body-container .body-text p {
  margin-bottom: 1em;
}

.body-container .body-text p:last-child {
  margin-bottom: 0;
}

/* RESPONSIVE */

@media (max-width: 375px) {
  .hero-container .text-container h1 {
    font-size: 1.75rem;
  }
}
@media (min-width: 550px) {
  .body-container .body-box .img-box {
    width: 100%;
    height: 450px;
  }
}

@media (min-width: 767px) {
  .body-container .body-box .img-box {
    border-radius: 20px;
  }
}

@media (min-width: 1000px) {
  .body-container .body-box .img-box {
    border-radius: 20px;
    width: 80%;
    height: 550px;
  }

  .hero-img {
    display: none;
  }

  .hero-container {
    background-image: url(../../assets/img/slovenija2.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    grid-template-areas: "text oil";
    height: 70vh;
    max-width: 80%;

    margin: 0 auto 3em auto;
    padding: 2em;
  }

  .hero-container .text-container {
    text-align: left;
    padding-top: 6em;
  }

  .hero-container .text-container h1 {
    font-size: 3.7rem;
  }

  .hero-container .text-container p {
    font-size: 1.3rem;
    left: 0;
    max-width: 90%;
  }

  .hero-container .text-container p span {
    font-size: 1.5rem;
    font-weight: 500;
    display: block;
  }

  .hero-container .oil-img {
    max-height: 80%;
    margin: auto;
    margin-top: 0;
  }
}

@media (min-width: 1000px) {
  .body-container .body-text p {
    width: 70%;
    margin: 1em auto 0 auto;
    text-align: left;

    font-size: 1.15rem;
  }

  .body-container .body-text h2 {
    font-size: 2.2rem;
  }
}
</style>
