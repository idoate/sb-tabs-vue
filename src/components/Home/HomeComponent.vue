<template>
    <TabComponent
        @setThisTab = "setCurrentTabText"
        v-for="(tab,index) in tabs"
        :key = "index"
        :tab-name = "tab.name"
        :tab-text = "tab.text"
    />
    <p>{{ actualTabText }}</p>
</template>

<script>

import TabComponent from "../Tab/TabComponent";

export default {
    name: "HomeComponent",
    components:{
        TabComponent
    },
    props:['tabs'],
    data() {
        return {
            // tabs: [
            //     {
            //         name:'tab 1',
            //         text:'Texto do primeiro tab'
            //     },
            //     {
            //         name:'tab 2',
            //         text:'Texto do segundo tab'
            //     },
            //     {
            //         name:'tab 3',
            //         text:'Texto do terceiro tab'
            //     },
            //     {
            //         name:'tab 4',
            //         text:'Texto do quarto tab'
            //     }
            // ],
            actualTabText:'No tab selected'
        }
    },
    methods:{
        setCurrentTabText(tabText) {
            this.actualTabText = tabText;

        }
    }
}



</script>

<style scoped>

</style>