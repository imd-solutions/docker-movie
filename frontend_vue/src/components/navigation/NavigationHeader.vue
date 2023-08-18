<template>
  <section v-for="nav in navigations" :class="{'px-5' : nav.type != button}">
    <EventButton
      v-if="nav.type === 'button'"
      :btnCss="nav.btnInfo?.btnCss"
      :btnTxt="nav.btnInfo?.btnTxt"
    />
    <a v-else :to="nav.to" :class="nav.css" v-text="nav.title"></a>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-facing-decorator";
import EventButton from "../events/EventButton.vue";
import { navigation } from "./../../helpers";

@Component({
  name: "NavigationHeader",
  components: {
    EventButton,
  },
})
export default class NavigationHeader extends Vue {
  public navigations = navigation;
}
</script>
