<template>

    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">{{ title }}</h1>
        <slot></slot>
    </div>

</template>

<script>

    export default {

        name: "PageHeader",

        props: ['title']

    }

</script>

<style scoped>

</style>