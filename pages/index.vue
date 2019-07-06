<template lang="pug">
div
  div {{project}}
</template>

<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return { project: "default" };
  },
  async asyncData(context) {
    let { data } = await axios.get(
      "http://192.168.199.142:8080/clap/version/get"
    );
    console.log(data);
    // console.log(data)
    return { project: data.version };
    // return { project: "jieshu" }
  },
  methods: {
    goto() {
      this.$router.push("/test");
    }
  }
};
</script>

<style>
</style>
