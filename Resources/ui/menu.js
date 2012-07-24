var menu = Ti.UI.createWindow({
	orientationModes: [Ti.UI.PORTRAIT],
	backgroundColor: '#123',
	title: 'Seleccione una opción'
});

var opciones = [
	{title:'Ruta', hasChild:false, test:'../examples/socket_connect.js'},
	{title:'Mapa', hasChild:true, test:'../examples/socket_listener.js'},
	{title:'Gastos', hasChild:true, test:'../examples/socket_server_client.js'}
];


// create table view
var tableview = Titanium.UI.createTableView({
	data:opciones,
	backgroundColor: '#456',
	width: '95%',
	height: '95%',
});

// create table view event listener
tableview.addEventListener('click', function(e)
{
	if (e.rowData.test)
	{
		var winOp = Titanium.UI.createWindow({
			url:e.rowData.test,
			title:e.rowData.title
		});
		Titanium.UI.currentTab.open(winOp,{animated:true});
	}
});

// add table view to the window
Titanium.UI.currentWindow.add(tableview);
Titanium.UI.currentWindow.open();
menu.open();