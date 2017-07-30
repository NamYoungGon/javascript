(function (jq) {

	var nyg = function (query) {

		var count = 0;

		return function () {

			var tmp = new nyg.prototype.init(query);
			return tmp;

		}();

	}

	nyg.a = function () {
		console.log("a");
	}

	nyg.prototype.b = function () {
		console.log("prototype b");
	}

	nyg.prototype.init = function (query) {
		this.name = "nyg";
        this.version = "1.0.0";
	};

	nyg.prototype.init.prototype = nyg.prototype;

	window.nyg = nyg;

})(jQuery)