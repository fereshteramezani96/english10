<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <v-btn
      :to="`/`"
      text
    >
      <v-icon> mdi-home </v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-switch
      @click="switchSentenceClick()"
      v-model="switchSentence"
      hide-details
    >
      <template v-slot:label>
        <p v-if="switchSentence"> جمله </p>
        <p v-if="!switchSentence"> کلمه</p>
      </template>

    </v-switch>

    <v-spacer></v-spacer>
    <v-select
      :items="$store.state.readingSpeedItems"
      :value="$store.state.readingSpeed"
      @input="changeSpeed"
      hide-details
      :label="speedSelectLable"
      style='max-width:25%'
    ></v-select>

  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      speedSelectLable: "سرعت",
      switchLable: "خواندن جمله",
      switchSentence: this.$store.state.SentenceReadingMode,
    };
  },
  methods: {
    switchSentenceClick() {
      console.log(this.$store);
      this.$store.commit("setReadingMode", this.switchSentence);
      console.log(this.$store.state.SentenceReadingMode);
    },
    changeSpeed(speedValue) {
      console.log("change speed ...." + speedValue);
      this.$store.commit("setReadingSpeed", speedValue);
      console.log("change speed ...." + this.$store.state.readingSpeed);
    },
  },
};
</script>