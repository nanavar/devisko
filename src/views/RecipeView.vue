<script setup>
import TheNavbar from "../components/TheNavbar.vue";
import TheFooter from "../components/TheFooter.vue";
</script>

<template>
  <TheNavbar />
  <main class="recipes">
    <h2 class="page-title"> Domači recepti </h2>

    <!-- recipe 1 -->

    <div class="recipe">
      <h3>Testenine - aglio e olio</h3>

      <div class="grid-container">
        <div class="recipe-img">
          <div class="image"></div>
        </div>

        <div class="ingredients container">
          <p class="recipe-title">SESTAVINE:</p>
          <div class="list">
            <ul>
              <li><p>250g špagetov</p></li>
              <li><p>6 strokov česna</p></li>
              <li><p>1dcl oljčnega olja</p></li>
              <li><p>1dcl hladne vode</p></li>
              <li><p>poper</p></li>
              <li><p>sol</p></li>
            </ul>
          </div>
        </div>
        <div class="preparation container">
          <div class="recipe-title">PRIPRAVA:</div>
          <div class="list">
            <ol>
              <li>
                <p>
                  Česen olupimo, prerežemo in odstranimo zelene dele ter jih
                  položimo v manjše cedilo.
                </p>
              </li>
              <li>
                <p>
                  V slanem kropu skuhamo špagete -al dente. Med kuhanjem
                  špagetov česen s cedilom pomočimo v vrelo vodo za 30 sekund in
                  nato oplaknemo s hladno vodo. To ponovimo trikrat.
                </p>
              </li>
              <li>
                <p>
                  Nato česen, oljčno olje, vodo, sol in poper damo v namizni
                  mešalnik - blender, da se vse sestavine povežejo in dobimo
                  gosto tekočlino. Po potrebi lahko še precedimo skozi drobno
                  cedilo.
                </p>
              </li>
              <li>
                <p>
                  Špagete prelijemo takoj ko so kuhani dobro premešamo in
                  postrežemo. Dodamo lahko še parmezan in peteršilj.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <div class="recipe">
      <h3>Pehtranov kolač z oljčnim oljem</h3>
      <div class="grid-container">
        <div class="recipe-img">
          <div class="image recipe-2"></div>
        </div>
        <div class="ingredients container">
          <p class="recipe-title">SESTAVINE:</p>
          <div class="list">
            <ul>
              <li><p>4 ali 5 jajc</p></li>
              <li><p>3/4 lončka oljčnega olja </p></li>
              <li><p>1 lonček jogurta</p></li>
              <li><p>1 lonček (ali malo manj) rjavega sladkorja </p></li>
              <li
                ><p
                  >2 lončka moke (1 kamutove in 1 univerzalne) ali samo
                  univerzalno</p
                ></li
              >
              <li><p>1 žlička pecilnega praška ali sodo bikarbono </p></li>
              <li><p>vanilijev sladkor</p></li>
              <li><p>limonino lupinico ene surove eko limone </p></li>
              <li><p>eno veliko pest svežega pehtrana </p></li>
              <li><p>ščepec soli </p></li>
              <li><p>maslo in drobtine za premaz pekača</p></li>
            </ul>
          </div>
        </div>
        <div class="preparation container">
          <div class="recipe-title">PRIPRAVA:</div>
          <div class="list">
            <ol>
              <li>
                <p> Pečico segrejemo na 200 stopinj.</p>
              </li>
              <li>
                <p> Stepemo sneg iz beljakov. </p>
              </li>
              <li>
                <p>
                  Rumenjakom dodamo sladkor, sol, vanilijev sladkor in limonino
                  lupinico ter dobro premešamo z mešalnikom da zmes posvetli.
                </p>
              </li>
              <li>
                <p>
                  V zmes rumenjakov dodamo med mešanjem najprej jogurt, nato
                  oljčno olje, na koncu pa moko in pecilni prašek.
                </p>
              </li>
              <li>
                <p>
                  Pehtranove listke drobno sesekljamo in jih vmešamo v
                  pripravljeno testo. Dodamo še sneg beljakov in testo je
                  pripravljeno
                </p>
              </li>
              <li>
                <p>
                  Pekač (za potico ali šarkelj) premažemo z maslom in potresemo
                  z drobtinami, ter vanj vlijemo testo.
                </p>
              </li>
              <li>
                <p>
                  V sredino pečice položimo pekač in pečemo 40 minut, lahko tudi
                  malo manj ali malo več, odvisno od pečice, ko močno zadiši je
                  pečeno.
                </p>
              </li>
              <li>
                <p> K toplemu kolaču lahko ponudimo dober limonin sladoled. </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <router-link to="/nakup" class="main-btn btn-primary">Nakup</router-link>
    </div>
  </main>
  <TheFooter />
</template>

<style scoped>
.recipe {
  gap: 3em;
  display: flex;
  flex-direction: column;
}

@media (min-width: 1000px) {
  .recipe .grid-container {
    justify-content: center;
    display: grid;
    gap: 1em;
    grid-template-areas:
      "ing img"
      "prep prep";
    margin: auto 20%;
  }
  .recipe-img {
    display: flex;
    grid-area: img;
    justify-content: end;
  }
  .image {
    width: 429px;
    height: 284px;
    border-radius: 20px;
    align-items: end;
  }
  .ingredients {
    grid-area: ing;
  }
  .preparation {
    grid-area: prep;
  }
  .recipe .recipe-title {
    font-size: 1.2em !important;
  }
  .recipe ol li::marker {
    font-size: 1rem;
  }
}

@media (min-width: 768px) {
  .recipe h3 {
    font-size: 2rem !important;
  }
  .image {
    border-radius: 20px;
  }
}
.page-title {
  margin: 1.6em auto 0 auto !important;
}
.recipe h3 {
  color: var(--color-secondary);
  font-size: 1.5rem;
  text-align: center;
  margin-top: 1em;
  padding: 0 2em;
}
.recipe .grid-container {
  justify-content: center;
  display: grid;
  gap: 1.5em;
  grid-template-rows: repeat(2, 0.5fr);
}
.image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(../assets/img/testenine.jpg);
  height: 284px;
}
.image.recipe-2 {
  background-image: url(../assets/img/kolač.jpg);
}
.recipe .recipe-title {
  color: var(--color-primary);
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0.5em;
}

.recipe .ingredients {
  height: 100%;
}
.recipe .list {
  margin-left: 1em;
}

.list ol li {
  margin-bottom: 0.5em;
}
.recipe ol li::marker,
.recipe ul li::marker {
  color: var(--color-primary);
}
.recipe .list ul li {
  line-height: 25px;
  margin: 0.05em;
}
</style>
