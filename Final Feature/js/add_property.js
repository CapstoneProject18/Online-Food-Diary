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
            var json = toJSONString( this );
            // var json={ 
            //             id: 9,
			// 			name: 'Chessiano Pizza',
			// 			address: 'Opposite Pantaloons, Senapati Bapat Road, Pune',
			// 			location: 'Senapati Bapat Road',
			// 			category: 'Quick Bites',
			// 			vote: '3.3',
			// 			noofvotes: '460 Votes',
			// 			cuisines: 'Pizza',
			// 			url: 'Chessiano Pizza',
			// 			cost: '1800',
			// 			hours: '11 AM to 1 AM (Mon-Sun)',
			// 			email: 'uncleschineese@gmail.com',
            //             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_TLf0yvTv4vaYBT93zC0a-HX7O2c7DzybqlMvpDbSfQxPXrxtA'
            // }
            output.innerHTML = json;
			//output.innerHTML = JSON.stringify(json);
			console.log('INCOMING JSON:',json);
            localStorage.setItem('user', json);

		}, false);

	});

})();