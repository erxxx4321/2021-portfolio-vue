<template>
	<v-app>
		<Toolbar />
		<v-main class="grey lighten-3">
			<router-view></router-view>
		</v-main>
		<Footer />
	</v-app>
</template>

<script>
import Toolbar from "./components/Toolbar";
import Footer from "./components/Footer";

export default {
	name: "App",
	components: {
		Toolbar,
		Footer,
	},
	data() {
		return {
			//
		};
	},
};
</script>
