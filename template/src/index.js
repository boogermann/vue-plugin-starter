const PluginName = {
	install(Vue, options = {}) {
	}
};
export default PluginName;
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(PluginName);
}