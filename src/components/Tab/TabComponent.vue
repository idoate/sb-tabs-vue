<template>
    <button  @click="$emit('setThisTab', this.tabText)">{{tabName}}</button>
</template>

<script>
export default {
    name: "TabComponent",
    props: ['tabName','tabText']
}
</script>

<style scoped>

</style>