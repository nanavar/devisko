<script setup>
import TheFooterEN from "../../components/English/TheFooterEN.vue";
import TheNavbarEN from "../../components/English/TheNavbarEN.vue";
</script>

<template>
  <TheNavbarEN />
  <main class="recipes">
    <h2 class="page-title"> Homemade Recipes </h2>

    <!-- recipe 1 -->

    <div class="recipe">
      <h3>Pasta - Aglio e olio</h3>

      <div class="grid-container">
        <div class="recipe-img">
          <div class="image"></div>
        </div>

        <div class="ingredients container">
          <p class="recipe-title">INGREDIENTS:</p>
          <div class="list">
            <ul>
              <li><p>250g spaghetti</p></li>
              <li><p>6 garlic cloves</p></li>
              <li><p>1 dcl olive oil</p></li>
              <li><p>1dcl cold water</p></li>
              <li><p>pepper</p></li>
              <li><p>salt</p></li>
            </ul>
          </div>
        </div>
        <div class="preparation container">
          <div class="recipe-title">PREPARATION:</div>
          <div class="list">
            <ol>
              <li>
                <p>
                  Peel the garlic and remove the green parts. Cut the cloves in
                  half and place them in a small strainer.
                </p>
              </li>
              <li>
                <p>
                  Cook the spaghetti al dente in lightly salted boiling water.
                  While the spaghetti is cooking, dip the strainer with the
                  garlic into the boiling water for 30 seconds at a time and
                  then rinse with cold water. Repeat this three times.
                </p>
              </li>
              <li>
                <p>
                  Then put the garlic, olive oil, water, salt and pepper in a
                  table-top blender to combine all the ingredients and make a
                  thick liquid. If necessary, strain through a fine sieve.
                </p>
              </li>
              <li>
                <p>
                  Pour over the spaghetti as soon as it is cooked, stir well and
                  serve. Garnish with Parmesan cheese and parsley to taste.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <div class="recipe">
      <h3>Tarragon tart with olive oil</h3>
      <div class="grid-container">
        <div class="recipe-img">
          <div class="image recipe-2"></div>
        </div>
        <div class="ingredients container">
          <p class="recipe-title">INGREDIENTS:</p>
          <div class="list">
            <ul>
              <li><p>4 or 5 eggs</p></li>
              <li><p>3/4 cup olive oil </p></li>
              <li><p>1 cup yogurt</p></li>
              <li><p>1 cup (or a little less) brown sugar</p></li>
              <li>
                <p>
                  2 cups flour (1 kamut and 1 all-purpose, or all-purpose only)
                </p>
              </li>
              <li><p>1 teaspoon baking powder or baking soda</p></li>
              <li><p>vanilla sugar</p></li>
              <li><p>zest of one fresh organic lemon</p></li>
              <li><p>one large handful of fresh tarragon</p></li>
              <li><p>pinch of salt</p></li>
              <li><p>butter and breadcrumbs to coat the baking tray</p></li>
            </ul>
          </div>
        </div>
        <div class="preparation container">
          <div class="recipe-title">PREPARATION:</div>
          <div class="list">
            <ol>
              <li>
                <p> Preheat the oven to 200 degrees.</p>
              </li>
              <li>
                <p> Whisk the egg whites</p>
              </li>
              <li>
                <p>
                  Mix the sugar, salt, vanilla sugar and lemon zest with the egg
                  yolks and mix well with a mixer until the mixture turns a
                  lighter color.
                </p>
              </li>
              <li>
                <p>
                  Add yogurt to the egg yolk mixture, stirring constantly. Then
                  continue adding: first the olive oil, and finally the flour
                  and baking powder.
                </p>
              </li>
              <li>
                <p>
                  Finely chop the tarragon leaves and stir them into the
                  prepared dough. Add the egg whites and mix lightly. The dough
                  is ready.
                </p>
              </li>
              <li>
                <p>
                  Grease a baking tray with butter and sprinkle with
                  breadcrumbs. Pour in the batter.
                </p>
              </li>
              <li>
                <p>
                  Place the baking tray in the center of the oven and bake for
                  40 minutes, or a little less or a little more depending on the
                  oven. You’ll know when it’s done by the strong fragrance.
                </p>
              </li>
              <li>
                <p> Serve warm with lemon ice cream on the side.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <router-link to="/en/buy" class="main-btn btn-primary">Buy</router-link>
    </div>
  </main>
  <TheFooterEN />
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
  background-image: url(../../assets/img/testenine.jpg);
  height: 284px;
}
.image.recipe-2 {
  background-image: url(../../assets/img/kolač.jpg);
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
