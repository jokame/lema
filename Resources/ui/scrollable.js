var principal = Ti.UI.createWindow({
	orientationModes: [Ti.UI.PORTRAIT],
});
var v_encuestador = Titanium.UI.createView({backgroundColor:'#456'});
var v_mapa = Titanium.UI.createView({backgroundColor:'#123'});
var v_captura = Titanium.UI.createView({backgroundColor:'#123'});
var v_resultados = Titanium.UI.createView({backgroundColor:'#123'});

var scrollable = Titanium.UI.createScrollableView({
    views:[v_encuestador,v_mapa,v_captura,v_resultados],
    showPagingControl: false
});

var lbl_encuestador = Ti.UI.createLabel({
	text: 'Datos del supervisor',
	top: 0,
	color: '#fff',
	backgroundColor: '#000',
	width: '100%',
	height: 35,
	});
	
var lbl_e_nombre = Ti.UI.createLabel({
	text: 'Ingresa los datos del supervisor',
	top: '70%',
	color: '#fff'
	});

var btn_guarda_encuestador = Titanium.UI.createButton({
	title: 'Guardar',
	width:'150dp',
	height:'50dp',
	top:'80%',
	});
	
var lbl_mapa = Ti.UI.createLabel({
	text: 'Mapa',
	top: '2%',
	color: '#fff'
	});
	
var lbl_captura = Ti.UI.createLabel({
	text: 'Capturar encuesta',
	top: '2%',
	color: '#fff'
	});
	
var lbl_resultados = Ti.UI.createLabel({
	text: 'Enviar resultados',
	top: '2%',
	color: '#fff'
	});
	
v_encuestador.add(lbl_encuestador);
v_encuestador.add(lbl_e_nombre);
v_encuestador.add(btn_guarda_encuestador);

v_mapa.add(lbl_mapa);
v_captura.add(lbl_captura);
v_resultados.add(lbl_resultados);


var myImage = Ti.UI.createImageView({
    width:'90%',
    height:'90%',
    image:'android/default.png',
});

v_mapa.add(myImage);

var txt_nombre = Ti.UI.createTextField({
  	autocapitalization:Ti.UI.TEXT_AUTOCAPITALIZATION_WORDS,
  	hintText:'Supervisor',
  	width: '80%',
  	height:35,
  	left: 10,
  	top: 50,
  	borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  	returnKeyType:Titanium.UI.RETURNKEY_NEXT,
  	clearButtonMode:Ti.UI.INPUT_BUTTONMODE_ALWAYS,
  	autocorrect: true
});

var txt_clave = Ti.UI.createTextField({
  	keyboardType:Ti.UI.KEYBOARD_NUMBER_PAD,
  	hintText:'Clave',
  	width: '80%',
  	height:35,
  	left: 10,
  	top: 90,
  	borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  	returnKeyType:Titanium.UI.RETURNKEY_NEXT,
  	clearButtonMode:Ti.UI.INPUT_BUTTONMODE_ALWAYS,
});

btn_guarda_encuestador.addEventListener('click', function(e){
	Ti.App.Properties.setString('e_nombre', txt_nombre.getValue());
	Ti.App.Properties.setInt('e_numero', Number(txt_clave.getValue()));
	Ti.UI.createNotification({duration: 4000, message: 'Datos actualizados', top:100}).show();
});

v_encuestador.add(txt_nombre);
v_encuestador.add(txt_clave);
principal.add(scrollable);
principal.open();