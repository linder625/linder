new Vue({
	el: "#login-root",
	data: {
		message: "页面加载于"+new Date().toLocaleString(),
		name: "linder",
		website: "http://www.baidu.com"
	},
	methods:{
		greet: function(time){
			return "Good "+time+" "+this.name+"!"
		}
	}
});