<script>
import { mapState } from "vuex";
import GameStart from "./components/GameStart.vue";
import BaseDialog from "./components/Index.vue";

export default {
    components: {
        GameStart,
        BaseDialog,
    },
    props: {},
    data() {
        return {};
    },
    computed: {
        ...mapState([
            "uiState",
            "questions",
            "charactersOptions",
            "selectedCharacter",
        ]),
    },
    methods: {

      pickCharacter(value) {
        this.$store.dispatch("setSelectedCharacter", value)
        this.$store.dispatch("setUIState", "characterChosen")
      },
    },
};
</script>
<template>
    <div class="contain">
        <GameStart v-if="uiState === 'start'">
            <h2>Which hooman do you want to be?!!</h2>
            <div
                v-for="character in charactersOptions"
                :key="character"
                class="character-choices"
            >
                <input
                    type="radio"
                    :id="character"
                    :value="character"
                    @change="pickCharacter($event.target.value)"
                />
                <label :for="character" :aria-label="character">{{ character }}</label>
            </div>
            <button @click="pickCharacter">Pick your character..!! </button>
        </GameStart>
        <BaseDialog v-else />
    </div>
</template>
<style lang='scss'>
@import "assets/scss/main.scss";
</style>
