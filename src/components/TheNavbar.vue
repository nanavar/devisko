<template>
  <nav>
    <a href="/">
      <img
        id="logo"
        src="../assets/img/logo.svg"
        alt="devic + kodarin home logo"
      />
    </a>
    <ul>
      <li>
        <router-link to="/nakup" class="main-btn btn-dark">Nakup</router-link>
      </li>
      <li>
        <router-link to="/recepti" class="main-btn btn-outline"
          >Recepti</router-link
        >
      </li>
      <li>
        <router-link to="/en" class="lan-link">ENG</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  position: relative;
  overflow: visible;
  z-index: 1;
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  align-items: center;
  display: flex;
  gap: 30px;
  max-height: 104px;
  background-color: var(--color-background);
  border-bottom: 1px solid #e5e6df;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
}

.lan-link {
  padding: 5px 1px;
  font-size: 12px;
  color: var(--color-dark);
}

#logo {
  max-height: 80px;
  width: 100%;
  justify-content: center;
  margin: 30px auto 30px 1rem;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 46px 1rem 46px 0;
  margin-left: auto;
}

.active-link {
  background: var(--color-light-gray);
  color: var(--color-dark);
  border-color: var(--color-light-gray);
}

@media (min-width: 768px) {
  nav {
    padding: 0 8em;
    max-height: 104px;
  }
  .lan-link {
    font-size: 16px !important;
  }
}
</style>
