var menu = Ti.UI.createWindow({
	orientationModes: [Ti.UI.PORTRAIT],
	backgroundColor: '#123',
	title: 'Seleccione una opción'
});

var opciones = [
	{title:'General', hasChild:true, test:'menu_general.js'},
	{title:'Mapa', hasChild:true, test:'menu_mapa.js'},
	{title:'Gastos', hasChild:true, test:'menu_gastos.js'},
	{title:'Reporte', hasChild:true, test:'menu_reporte.js'},
];


// create table view
var menuOpciones = Titanium.UI.createTableView({
	data:opciones,
	//backgroundColor: '#456',
	//width: '95%',
	//height: '95%',
});

// create table view event listener
menuOpciones.addEventListener('click', function(e)
{
	
	var menu_op = Titanium.UI.createWindow({		
		url:e.rowData.test,
		title:e.rowData.title,
	});
	menu_op.open({animated:true, modal:true});
	
});

// add table view to the window
Titanium.UI.currentWindow.add(menuOpciones);
menu.open();