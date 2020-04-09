<template>
	<div>
		<div>Named View</div>
		<router-link to="/sub">/other</router-link>
		<router-view class="view one"></router-view>
		<router-view class="view two" name="sub2"></router-view>

	</div>
</template>

<script>
    // import SubNamedView1 from "./SubNamedView1";
    // import SubNamedView2 from "./SubNamedView2";

    export default {
        name: "NamedView",
		// components: {
        //     SubNamedView1,
        //     SubNamedView2
		//
		// }
    }
</script>

<style scoped>

</style>