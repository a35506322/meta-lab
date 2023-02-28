<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { useHead } from "@vueuse/head";

export default {
  setup() {
    useHead({
      title: `Hello world: 123`,
      meta: [
        { name: "description", content: "This is an example" },
        { property: "og:title", content: "Hello world" },
        {
          property: "og:image",
          content:
            "https://yesgoimages.s3.ap-northeast-1.amazonaws.com/Original/P221012000027.jpg",
        },
      ],
    });
  },
  name: "HomeView",
  components: {
    HelloWorld,
  },
  // head() {
  //   return {
  //     title: "test title",
  //     meta: [
  //       { name: "description", content: "This is an example" },
  //       { property: "og:title", content: "Hello og:title" },
  //       {
  //         property: "og:image",
  //         content:
  //           "https://yesgoimages.s3.ap-northeast-1.amazonaws.com/Original/P221012000027.jpg",
  //       },
  //     ],
  //   };
  // },
};
</script>
