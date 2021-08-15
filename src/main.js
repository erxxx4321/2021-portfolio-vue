import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false;

new Vue({
	router,
	iconfont: "fa4",
	render: (h) => h(App),
	mounted() {
		AOS.init();
	},
}).$mount("#app");
