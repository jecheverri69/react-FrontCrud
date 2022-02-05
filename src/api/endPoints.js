const domains = {
	Crud: "https://bjava11.herokuapp.com/productos/",
	};
const paths = {
	users: {
		getProducts: domains.Crud + "listar",
		addProduct: domains.Crud + "guardar",		
	},
};

function formatstring(fmtstr) {
	var args = Array.prototype.slice.call(arguments, 1);
	return fmtstr.replace(/\{(\d+)\}/g, function (match, index) {
		return args[index];
	});
}

export { domains, paths, formatstring };
