// var fs = require('fs');
(function() {
	function toJSONString( form ) {
		var obj = {};
		var elements = form.querySelectorAll( "input, select, textarea" );
		for( var i = 0; i < elements.length; ++i ) {
			var element = elements[i];
			var name = element.name;
			var value = element.value;

			if( name ) {
				obj[ name ] = value;
			}
		}

		return JSON.stringify( obj );
	}

	document.addEventListener( "DOMContentLoaded", function() {
		var form = document.getElementById( "test" );
		var output = document.getElementById( "output" );
		form.addEventListener( "submit", function( e ) {
			e.preventDefault();
			var jsondoc = toJSONString( this );
            output.innerHTML = jsondoc;
            fs.writeFile("test.txt", jsondoc, function(err) {
                if (err) {
                    console.log('Error:',err);
                }
            });
            console.log(jsondoc);
		}, false);

	});

})();
// fs.writeFile("test.txt", json, function(err) {
//     if (err) {
//         console.log(err);
//     }
// });