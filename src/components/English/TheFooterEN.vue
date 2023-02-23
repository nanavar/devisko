<template>
  <footer>
    <hr />
    <div class="contact">
      <p
        ><span>Contact: </span>
        <a href="mailto:info@devisko.si">info@devisko.si</a></p
      >
    </div>
    <div class="links">
      <router-link to="/en/privacy-policy">Privacy Policy</router-link>
    </div>
    <div class="copyright">
      <p> © 2022 All rights reserved</p>
      <p>
        Website design and code by
        <a href="http://www.anavargason.com">Ana Vargason</a>
      </p>
    </div>
  </footer>
</template>

<style scoped>
hr {
  width: 100%;
  height: 1px;
  background-color: var(--color-light-gray);
  border: none;
}
@media (min-width: 768px) {
  hr {
    width: 50%;
  }
}

footer {
  bottom: 0;
  width: 100%;
  height: 135px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  font-size: 14px;
  margin-top: 3em;
  margin-bottom: 0.1em;
}

footer p {
  font-size: 14px;
}

footer a {
  color: var(--color-primary);
  font-weight: 400;
  text-decoration: underline;
}

#contact span {
  font-weight: bold;
}
</style>
