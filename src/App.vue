<template>
    <h1>Tabs in vue</h1>
    <HomeComponent
        :tabs = "tabs"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HomeComponent from "@/components/Home/HomeComponent.vue";

@Options({
    components: {
        HomeComponent,
    },
    data() {
        return {
            tabs: [
                {
                    name: 'tab 1',
                    text: 'Texto do primeiro tab'
                },
                {
                    name: 'tab 2',
                    text: 'Texto do segundo tab'
                },
                {
                    name: 'tab 3',
                    text: 'Texto do terceiro tab'
                },
                {
                    name: 'tab 4',
                    text: 'Texto do quarto tab'
                }
            ],
        }
    }
}
)

export default class App extends Vue {

}
</script>

<style>
/*#app {*/
/*    font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*    -webkit-font-smoothing: antialiased;*/
/*    -moz-osx-font-smoothing: grayscale;*/
/*    text-align: center;*/
/*    color: #2c3e50;*/
/*    margin-top: 60px;*/
/*}*/
</style>


