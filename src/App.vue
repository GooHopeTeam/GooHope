<template>
    <div class="mainWrapper">
        <Header :key="component_key"/>
        <router-view></router-view>
        <Footer/>
    </div>
</template>

<script>
import Footer from "@/components/subpages/Footer";
import Header from "@/components/subpages/Header";

export default {
    name: 'App',
    components: {
        Footer, Header
    },
    data() {
        return {
            component_key: 0
        }
    },
    watch: {
        $route() {
            if (localStorage.user_id && localStorage.token) {
                this.component_key = 1
            } else {
                this.component_key = 0
            }
        }
    }
}
</script>

<style lang="sass">
.mainWrapper
    display: flex
    justify-content: flex-start
    flex-direction: column
    align-items: center
    min-height: 100vh
    background-color: $black

*
    padding: 0
    margin: 0
    box-sizing: border-box
</style>
