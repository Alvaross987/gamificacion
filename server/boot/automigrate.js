module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate(null, function(err) {
    if (err) throw err;

    app.models.Juego.create([{
		"nombre": "Pepe",
		"descripcion": "ese",
		"imagen": "foto",
		"grupal": false,
	}, {
		"nombre": "Anastasia",
		"descripcion": "esa",
		"imagen": "foto",
		"grupal": false,
	}, {
		"nombre": "Raop",
		"descripcion": "eso",
		"imagen": "foto",
 		"grupal": false,
	}], function(err, Juegos) {
      if (err) throw err;

      console.log('Models created: \n', Juegos);
    });
  });
};
