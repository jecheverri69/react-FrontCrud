const domains = {
	Crud: "https://bjava11.herokuapp.com/productos/",
	};
const paths = {
	products: {
		getProducts: domains.Crud + "listar",
		addProduct: domains.Crud + "guardar",	
		deleteProducts: domains.Crud + "borrar",		
	},
};

function formatstring(fmtstr) {
	var args = Array.prototype.slice.call(arguments, 1);
	return fmtstr.replace(/\{(\d+)\}/g, function (match, index) {
		return args[index];
	});
}

export { domains, paths, formatstring };
