<script>
import { mapState } from "vuex";

export default {
    components: {},
    props: {},
    data() {
        return {};
    },
    computed: {
        ...mapState(["charactersOptions"]),
    },
    methods: {
        pickCharacter(value) {
            this.$store.dispatch("setSelectedCharacter", value);
            this.$store.dispatch("setUIState", "characterChosen");
        },
    },
};
</script>
<template>
    <div class>
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
            <label :for="character">{{ character }}</label>
        </div>
        <button @click="pickCharacter">Pick your character..!!</button>
    </div>
</template>
<style scoped lang='sass'></style>
