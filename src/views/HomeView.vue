<script setup>
import TheNavbar from "../components/TheNavbar.vue";
import TheFooter from "../components/TheFooter.vue";
</script>

<template>
  <TheNavbar />
  <main>
    <div class="hero-container">
      <img
        class="oil-img"
        src="../assets/img/flasa.png"
        alt="steklenica oljčnega olja devičko"
      />
      <div class="text-container">
        <h1>Ekstra deviško oljčno olje</h1>
        <p>
          <span>Oljčno olje višje kategorije, </span>
          pridobljeno neposredno iz oljk zgolj z mehanskimi postopki. Polnjeno
          na posestvu na hribu Magaron nad Portorožem.
        </p>
      </div>
    </div>

    <div class="hero-img">
      <img src="../assets/img/Slovenija.png" alt="Slovenska istra" />
    </div>

    <div class="body-container">
      <div class="body-box">
        <div class="img-box vrste"> </div>
        <div class="body-text">
          <h2>Vrhunske lege</h2>
          <p>
            Ekstra deviško oljčno olje pridelujemo samo iz oljk obranih v naših
            oljčnikih na dveh vrhunskih legah v Slovenski Istri.
          </p>
          <p>
            Oljčnik v neokrnjenem zaledju Kopra v Borštu je na nadmorski višini
            353 m, v njem prevladuje avtohtona sorta belice (80%) nekaj pa je
            tudi leccina, maurina, štorte in ostalih starih sort.
          </p>
        </div>
      </div>

      <div class="body-box">
        <div class="img-box lega"> </div>
        <div class="body-text">
          <h2>Vrste oljk</h2>
          <p>
            Oljčnik na Šentjanah, leži na sončni legi na vrhu hriba Magaron, ki
            ga s treh strani obdaja morje v njem so v enaki meri zasajene sorte
            leccina in belice ter nekaj dreves frantoia in pendolina.
          </p>
        </div>
      </div>

      <div class="body-box">
        <div class="img-box oljke"> </div>
        <div class="body-text">
          <h2>Pridelava</h2>
          <p>
            Oljke obiramo v optimalni zrelosti, plodove pa v 24 urah predelajo v
            izbrani večkrat nagrajeni oljarni Babič, pri temperaturi nižji od 27
            stopinj Celzija.
          </p>
          <p>
            Olja ne filtriramo, zato ostane motno, ohrani bogatejši okus in
            aromo ter obdrži visoko raven polifenolov, ki so pomembni pri
            zdravilnih učinkih oljčnega olja.
          </p>
        </div>
      </div>
      <router-link to="/nakup" class="main-btn btn-primary">Nakup</router-link>
    </div>
  </main>
  <TheFooter />
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
  background-image: url(../assets/img/vrste.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 284px;
}

.body-container .body-box .img-box.lega {
  background-image: url(../assets/img/lega.jpg);
}
.body-container .body-box .img-box.oljke {
  background-image: url(../assets/img/oljke.jpg);
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
    background-image: url(../assets/img/slovenija2.png);
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
    max-height: 90%;
    margin: auto;
    margin-top: 1em;
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
