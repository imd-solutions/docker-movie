<template>
  <section class="py-24 bg-blueGray-50 overflow-hidden">
    <div class="container px-4 mx-auto">
      <div class="md:max-w-6xl mx-auto">
        <div v-if="movies" class="flex flex-wrap -m-3.5 mb-10">
          <div
            v-for="(movie, i) in movies"
            class="w-full md:w-1/3 lg:w-1/4 p-3.5 border"
          >
            <div class="relative overflow-hidden bg-cover bg-no-repeat">
              <img
                class="mx-auto rounded-t-lg object-fit movieImg"
                :src="movie.image_url"
                alt=""
              />
            </div>
            <div class="p-6">
              <FavouriteButton />

              <blockquote>
                <p class="text-xl">"{{ movie.quote }}"</p>
              </blockquote>
              <figcaption
                class="text-md text-neutral-600 dark:text-neutral-400"
              >
                - {{ movie.character }}
                <br />
                <cite title="Source Title">
                  - {{ movie.movie }} ({{ movie.year }})
                </cite>
              </figcaption>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-facing-decorator";
import { Movie } from "./../../types";
import { FavouriteButton } from "./../events";

@Component({
  components: {
    FavouriteButton,
  },
})
export default class MovieWrapper extends Vue {
  @Prop
  movies?: [Movie];
}
</script>
