<script>
import { mapState } from "vuex";
import GameStart from "./components/states/Start.vue";
import GameEnd from "./components/states/Finish.vue";
import GameThread from "./components/Index.vue";
import SelectCharacter from "./components/SelectCharacter.vue";

export default {
    components: {
        GameStart,
        GameEnd,
        GameThread,
        SelectCharacter,
    },
    props: {},
    data() {
        return {};
    },
    computed: {
        ...mapState(["uiState"]),
    },
    methods: {},
};
</script>
<template>
    <div class="contain">
        <GameStart v-if="uiState === 'start'">
            <SelectCharacter />
        </GameStart>
        <GameEnd v-else-if="uiState === 'won' || uiState === 'lost'" />
        <GameThread v-else />
    </div>
</template>
<style lang='scss'>
@import "assets/scss/main.scss";
</style>
