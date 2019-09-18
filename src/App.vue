<template>
    <div id="app">

        <component :is="layout">
            <router-view/>
        </component>

    </div>
</template>

<script>

    export default {

        components: {
        },

        computed: {

            layout() {
                return 'default-layout';
            }

        }

    }

</script>

<style>

</style>
