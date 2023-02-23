<script setup>
import TheNavbar from "../components/TheNavbar.vue";
import TheFooter from "../components/TheFooter.vue";
</script>

<template>
  <TheNavbar />
  <main class="buy">
    <h2 class="page-title">Nakup olja</h2>
    <p>
      Možen je <span class="important">osebni prevzem</span> v Ljubljani, v
      okolici Pirana ali po dogovoru.
    </p>
    <br />
    <p>
      Najprej prosim pošljite povpraševanje po tipu in količini olja ter o
      željenem prevzemnem mestu. Odgovorili vam bomo v najhitrejšem možnem času.
    </p>
    <h2 class="sub-page-title">Povpraševanje</h2>
    <p>
      Prosimo vnesite vaše kontaktne podatke, izberite količino in tip olja ter
      navedite vašo prevzemno lokacijo.
    </p>
    <form
      id="forma"
      name="oil-form"
      accept-charset="utf-8"
      action="https://formspree.io/f/myyawlgg"
      method="POST"
    >
      <fieldset id="fs-frm-inputs">
        <label for="polno-ime">Ime in Priimek</label>
        <input type="text" name="ime" id="polno-ime" required="" />
        <label for="email-naslov">Email</label>
        <input type="email" name="_replyto" id="email-address" required="" />
        <label for="lokacija">Lokacija</label>
        <input type="text" name="lokacija" id="pickup-location" required="" />
        <table class="select-oil" border="0">
          <tr>
            <td>
              <label for="quantity">Količina</label>
              <input name="količina" type="number" id="quantity" />
            </td>
            <td><p>750 ml</p></td>
          </tr>
        </table>
        <label for="sporočilo">Sporočilo</label>
        <textarea rows="5" name="sporočilo" id="message"></textarea>
        <input
          type="hidden"
          name="_subject"
          id="email-subject"
          value="Povpraševanje za olje"
        />
        <div class="g-recaptcha" data-sitekey="your_site_key"></div>
        <!-- 6Lf2maUkAAAAANqZctvCY_SCpQ59lYNua2U3It_w -->
        <p id="privacy">
          Z nadaljevanjem se strinjate z našo
          <router-link to="/politika-zasebnosti"
            >politiko zasebnosti</router-link
          >.
        </p>
        <br />
      </fieldset>
      <input
        class="main-btn btn-primary"
        type="submit"
        value="Pošlji povpraševanje"
      />
    </form>
  </main>
  <TheFooter />
</template>

<style scoped>
.buy {
  padding: var(--side-margin-mobile);
}

.buy .important {
  color: var(--color-secondary);
}

/* FORM */

form {
  margin-top: 1.5em;
}

#privacy {
  font-size: 14px;
}

#privacy a {
  color: var(--color-primary);
}

@media (min-width: 1000px) {
  form {
    margin: 1.5em auto;
    width: 80%;
  }
}

form label,
form legend {
  color: var(--color-medium-gray);
  margin-bottom: 0.5rem;
}

form input,
form select,
form textarea {
  box-sizing: border-box;
  border: 1px solid var(--color-medium-light-gray);
  background-color: var(--color-white);
  padding: 0.75em 1rem;
  border-radius: 6px;
  margin-bottom: 1.5rem;
}

form input:focus,
form select:focus,
form textarea:focus {
  background-color: #65663515;
  outline-style: solid;
  outline-width: thin;
  outline-color: #76766c;
  outline-offset: -1px;
}

form [type="checkbox"] {
  width: auto;
  padding: 0.75rem;
}

form [type="text"],
form [type="email"] {
  width: 100%;
}

form [type="button"],
form [type="submit"],
form [type="reset"] {
  width: auto;
  cursor: pointer;
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
}
form [type="button"]:focus,
form [type="reset"]:focus {
  outline: none;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px white inset !important;
}

form select {
  text-transform: none;
}

.select-oil td p {
  padding-top: 0.6em;
  padding-left: 0.5em;
  color: var(--color-primary);
}

.select-oil input {
  width: 4em;
}

@media (min-width: 1000px) {
  .buy {
    margin: 6.5em 25%;
  }
}
</style>
