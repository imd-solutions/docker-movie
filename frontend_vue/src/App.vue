<template>
  <div>
    <PageLoading
      v-if="
        $apollo.queries.application.loading && $apollo.queries.movies.loading
      "
    />
    <template v-else>
      <SiteHeader :application="application" />
      <MovieWrapper :movies="movies" />
      <SiteFooter :application="application" />
    </template>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-facing-decorator";
import { SiteHeader, SiteFooter } from "./components/partials";
import { MovieWrapper } from "./components/movies";
import { PageLoading } from "./components/processing";
import { navigation } from "./helpers";
import { GET_APPLICATION, GET_MOVIES } from "./apollo/query";

@Component({
  components: {
    SiteHeader,
    SiteFooter,
    PageLoading,
    MovieWrapper,
  },
  apollo: {
    application: {
      query: GET_APPLICATION,
    },
    movies: {
      query: GET_MOVIES,
    },
  },
})
export default class Home extends Vue {
  public title = "Movie Quote Apps";
}
</script>
