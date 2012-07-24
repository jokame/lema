var colorArray = [
      '#ff00ff', '#f0f', 'rgb(255,0,255)',
      'transparent', '#55ff00ff', '#5f0f', 'rgba(255,0,255,0.3)',
      'aqua', 'black', 'blue', 'brown', 'cyan', 'darkgray', 'fuchsia', 'gray', 'green', 
      'lightgray', 'lime', 'magenta', 'maroon', 'navy', 'olive', 'orange', 'pink', 
      'purple', 'red', 'silver', 'teal', 'white', 'yellow',
    ];
    var win = Ti.UI.createWindow({
      backgroundColor: 'black',
      exitOnClose: true,
      fullscreen: false,
      layout: 'vertical',
      title: 'Color Demo'
    });
    var rows = [];
    var row;
    for (var i=0, ilen = colorArray.length; i < ilen; i++){
      row = Ti.UI.createTableViewRow({
        color:'black',
        backgroundColor: colorArray[i],
        title: colorArray[i],
        height: 40
      });
      rows.push(row);
    }
    var table = Ti.UI.createTableView({
      data: rows,
      backgroundColor: 'white'
    });
    win.add(table);
    win.open();