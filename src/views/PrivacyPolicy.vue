<script setup>
import TheNavbar from "../components/TheNavbar.vue";
import TheFooter from "../components/TheFooter.vue";
</script>

<template>
  <TheNavbar />
  <main class="privacy">
    <div>
      <h2 class="page-title">Politika Zasebnosti</h2>
    </div>
    <div class="container">
      <p>
        Zahvaljujemo se vam, da ste izbrali nas in nam zaupali svoje osebne
        podatkov. Vašo zasebnost jemljemo resno in se zavezujemo, da bomo
        spoštovanju Splošne uredbe o varstvu podatkov (GDPR) in drugih
        predpisov. veljavnimi zakoni o varstvu podatkov v Evropski uniji.
      </p>
      <h4>Podatki, ki jih zbiramo</h4>
      <p>
        Zbiramo osebne podatke, ki nam jih posredujete prek našega spletnega
        mesta, kot so vaše ime, e-poštni naslov in druge informacije, ki jih
        posredujete, ko izpolnite naše obrazce.
      </p>
      <h4>Kako uporabljamo vaše podatke</h4>
      <p
        >Vaše osebne podatke uporabljamo za odgovarjanje na vaše poizvedbe,
        zagotavljanje informacij o naših izdelkih in storitvah ter komuniciranje
        z vami o našem poslovanju. Vaše podatke lahko uporabimo tudi za
        izboljšanje našega spletnega mesta in storitev ter za preprečevanje
        prevar in zlorab.
      </p>
      <h4>Pravna podlaga za obdelavo</h4>
      <p>
        Naša pravna podlaga za obdelavo vaših osebnih podatkov običajno temelji
        na vaši privolitvi, saj vas bomo pred zbiranjem vaših osebnih podatkov
        prosili za privolitev. Vaše osebne podatke lahko obdelujemo tudi, če je
        to potrebno za izvajanje pogodbe ali za naše zakonite interese, če ti
        interesi ne prevladajo nad vašimi temeljnimi pravicami in svoboščinami.
      </p>
      <h4>Kako delimo vaše podatke</h4>
      <p>
        Vaše osebne podatke lahko delimo s ponudniki storitev in poslovnimi
        partnerji, ki nam pomagajo pri upravljanju našega spletnega mesta in
        zagotavljanju naših storitev. Vaše podatke lahko delimo tudi, če to
        zahteva zakon ali če menimo, da je takšno dejanje potrebno za zaščito
        naših pravic ali pravic drugih.
      </p>
      <h4>Hranjenje podatkov</h4>
      <p>
        Vaše osebne podatke bomo hranili toliko časa, kolikor bo potrebno za
        izpolnjevanje namenov, za katere so bili zbrani, ali kolikor zahteva
        zakonodaja. Nekatere podatke lahko hranimo dlje časa, če je to potrebno
        za izpolnjevanje zakonskih ali regulativnih obveznosti, reševanje sporov
        ali uveljavljanje naših pogodb
      </p>
      <h4>Vaše pravice</h4>
      <p>
        Imate pravico zahtevati dostop do svojih osebnih podatkov ter zahtevati,
        da jih popravimo, posodobimo ali izbrišemo. Prav tako imate pravico
        ugovarjati naši obdelavi vaših osebnih podatkov ali zahtevati, da
        omejimo obdelavo vaših osebnih podatkov. Te pravice lahko uveljavljate
        tako, da nas kontaktirate z uporabo kontaktnih podatkov, navedenih na
        našem spletnem mestu.
      </p>
      <h4> Varnost </h4>
      <p
        >Sprejemamo ustrezne ukrepe za zaščito vaših osebnih podatkov pred
        nepooblaščenim dostopom, razkritjem, spreminjanjem ali uničenjem. Vendar
        pa noben varnostni sistem ni neprebojen, zato ne moremo zagotoviti
        varnosti vaših osebnih podatkov.</p
      >
      <h4>Posodobitve politike zasebnosti</h4>
      <p
        >To politiko zasebnosti lahko občasno posodobimo. Če bomo naredili
        pomembne spremembe pravilnika, vas bomo o tem obvestili z objavo
        obvestila na našem spletnem mestu ali na drug način.
      </p>
      <h4> Kontaktirajte nas </h4>
      <p>
        Če imate kakršna koli vprašanja ali pomisleke v zvezi z našimi praksami
        zasebnosti ali tem pravilnikom, se obrnite na nas s kontaktnimi podatki,
        navedenimi na našem spletnem mestu.
      </p>
    </div>
  </main>
  <TheFooter />
</template>

<style scoped>
.privacy .container h4 {
  color: var(--color-primary);
  font-size: 1.5rem;
  margin: 10px auto;
}

.privacy .container p {
  padding-bottom: 15px;
}
</style>
