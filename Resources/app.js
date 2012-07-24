// Se define la ventana principal
var principal = Ti.UI.createWindow({
	orientationModes: [Ti.UI.PORTRAIT],
	backgroundColor:'#345',
});


// Se definen todos los elementos de la ventana
var lbl_cabeza = Ti.UI.createLabel({
	text: 'Datos del supervisor',
	top: 0,
	color: '#fff',
	backgroundColor: '#000',
	width: '100%',
	height: 35,
});

var lbl_cuerpo = Ti.UI.createLabel({
	text: 'Supervisor actual\n' +
		   Ti.App.Properties.getString('s_nombre', 'Invitado') + 
		   '\n' + Ti.App.Properties.getInt('s_clave', 1234),
	top: '60%',
	color: '#fff',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
});

var btn_actualiza = Titanium.UI.createButton({
	title: 'Actualizar',
	height:'50dp',
	width: '120dp',
	top:'80%',
	left: '5%',
	horizontalWrap: false,
});

var btn_continua = Titanium.UI.createButton({
	title: 'Continuar',
	height: '50dp',
	width: '120dp',
	top: '80%',
	right: '5%',
	horizontalWrap: false,
});

var txt_supervisor = Ti.UI.createTextField({
  	autocapitalization:Ti.UI.TEXT_AUTOCAPITALIZATION_WORDS,
  	hintText:'Supervisor',
  	width: '80%',
  	//height:35,
  	//left: 10,
  	top: 60,
  	borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  	returnKeyType:Titanium.UI.RETURNKEY_NEXT,
  	clearButtonMode:Ti.UI.INPUT_BUTTONMODE_ALWAYS,
  	autocorrect: true
});

var txt_clave = Ti.UI.createTextField({
  	keyboardType:Ti.UI.KEYBOARD_NUMBER_PAD,
  	hintText:'Clave',
  	width: '80%',
  	//height:35,
  	//left: 10,
  	top: 120,
  	borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  	returnKeyType:Titanium.UI.RETURNKEY_NEXT,
  	clearButtonMode:Ti.UI.INPUT_BUTTONMODE_ALWAYS,
});


// Algunos eventos
btn_actualiza.addEventListener('click', function(e){
	Ti.App.Properties.setString('s_nombre', txt_supervisor.getValue());
	Ti.App.Properties.setInt('s_clave', Number(txt_clave.getValue()));
	lbl_cuerpo.text = 'Supervisor actual\n' +
					   Ti.App.Properties.getString('s_nombre') + 
					  '\n' + String(Ti.App.Properties.getInt('s_clave')); 
	Ti.UI.createNotification({duration: 4000, message: 'Datos actualizados', top:100}).show();
});

btn_continua.addEventListener('click', function(e){
	var nueva = Ti.UI.createWindow({
		url:'ui/menu.js',
	});
	nueva.open({modal:true});
});

// Se incluyen los elementos en la ventana e inicia
principal.add(lbl_cabeza);
principal.add(txt_supervisor);
principal.add(txt_clave);
principal.add(lbl_cuerpo);
principal.add(btn_actualiza);
principal.add(btn_continua);
principal.open();
