var menu_gral = Ti.UI.createWindow({
	orientationModes: [Ti.UI.PORTRAIT],
	backgroundColor: '#123',
});

var scrollView = Ti.UI.createScrollView({
      contentWidth: 'auto',
      contentHeight: 'auto',
      showVerticalScrollIndicator: true,
    });
    

var lbl_ruta = Ti.UI.createLabel({
	text: 'Número de ruta: ' + 17,
	top: 10,
});

var btn_h_salida = Ti.UI.createButton({
	title: 'Hora de salida',
	top: 40,
	width: '60%',
});

var btn_h_llegada = Ti.UI.createButton({
	title: 'Hora de llegada',
	top: 100,
	width: '60%',
});

var h_picker = Ti.UI.createPicker({
	type: Ti.UI.PICKER_TYPE_TIME,
});

btn_h_salida.addEventListener('click', function(e){
	h_picker.showTimePickerDialog();
});

btn_h_llegada.addEventListener('click', function(e){
	h_picker.showTimePickerDialog();
});

scrollView.add(lbl_ruta);
scrollView.add(btn_h_salida);
scrollView.add(btn_h_llegada);
menu_gral.add(scrollView);
menu_gral.open();