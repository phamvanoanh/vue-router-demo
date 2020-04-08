<template>
	<div>
		<router-link to="/user/profile">profile</router-link>
		|
		<router-link to="/user/post">post</router-link>
		|
		<button @click="push" style="width:90px;height: 40px;">Navigation </button> <!--= '<router-link :to="...">'-->
		<button @click="replace" style="width:90px;height: 40px;">replace</button> <!--ko giữ new history entry-->
		<button @click="go" style="width:90px;height: 40px;">GO</button>
		<router-view></router-view>
	</div>
</template>

<script>
    export default {
        name: "NestRoutes",
		data() {
            return {

			}
		},
		methods: {
            push : function () {
                return this.$router.push('register')
            },
            replace : function () {
                return this.$router.replace('register')
            },
            go : function () {
                return this.$router.go(-1)
            }
		}
    }
</script>

<style scoped>

</style>