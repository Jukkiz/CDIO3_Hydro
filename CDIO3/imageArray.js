function setImages(width, height) {

//pit‰‰ laskea oikeasta kuvasta, mihin kohtaan ne sijoittuu suhteessa varsinaiseen kokoon jos tekee sen prosenteilla
 images = new Array(
	 {'id': '1',	 'posX': width*0.170, 'posY': height*0.130, 'sizeX' :width*0.120, 'sizeY': height*0.120, 'img':'12111.png' },
	 {'id': '2', 	 'posX': width*0.100, 'posY': height*0.140, 'sizeX' :width*0.080, 'sizeY': height*0.090, 'img':'12131.png'},
	 {'id': '3', 	 'posX': width*0.015, 'posY': height*0.200, 'sizeX' :width*0.060, 'sizeY': height*0.170, 'img':'12132.png'},
	 {'id': '12141', 'posX': width*0.030, 'posY': height*0.426, 'sizeX' :width*0.100, 'sizeY': height*0.100, 'img':'12141.png'},
	 {'id': '12141', 'posX': width*0.225, 'posY': height*0.400, 'sizeX' :width*0.040, 'sizeY': height*0.080, 'img':'12121.png'},
	 {'id': 'XXX',	 'posX': width*0.265, 'posY': height*0.400, 'sizeX' :width*0.060, 'sizeY': height*0.080, 'img':'12122.png'},
	 {'id': 'XXX',	 'posX': width*0.339, 'posY': height*0.305, 'sizeX' :width*0.060, 'sizeY': height*0.240, 'img':'12211.png'},
	 {'id': 'XXX',	 'posX': width*0.295, 'posY': height*0.130, 'sizeX' :width*0.050, 'sizeY': height*0.240, 'img':'12112.png'},
     {'id': 'XXX',	 'posX': width*0.065, 'posY': height*0.630, 'sizeX' :width*0.130, 'sizeY': height*0.120, 'img':'12311.png'},
     {'id': 'XXX',	 'posX': width*0.020, 'posY': height*0.860, 'sizeX' :width*0.120, 'sizeY': height*0.095, 'img':'12341.png'},
     {'id': 'XXX',	 'posX': width*0.160, 'posY': height*0.880, 'sizeX' :width*0.150, 'sizeY': height*0.060, 'img':'12331.png'},
     {'id': 'XXX',	 'posX': width*0.225, 'posY': height*0.620, 'sizeX' :width*0.115, 'sizeY': height*0.160, 'img':'12321.png'},
     {'id': 'XXX',	 'posX': width*0.345, 'posY': height*0.875, 'sizeX' :width*0.185, 'sizeY': height*0.070, 'img':'12332.png'},
     {'id': 'XXX',	 'posX': width*0.415, 'posY': height*0.630, 'sizeX' :width*0.100, 'sizeY': height*0.100, 'img':'12342.png'},
     {'id': 'XXX',	 'posX': width*0.450, 'posY': height*0.710, 'sizeX' :width*0.065, 'sizeY': height*0.090, 'img':'12343.png'},
     {'id': 'XXX',	 'posX': width*0.430, 'posY': height*0.140, 'sizeX' :width*0.100, 'sizeY': height*0.150, 'img':'12221.png'},
     {'id': 'XXX',	 'posX': width*0.540, 'posY': height*0.150, 'sizeX' :width*0.125, 'sizeY': height*0.090, 'img':'12231.png'},
     {'id': 'XXX',	 'posX': width*0.690, 'posY': height*0.150, 'sizeX' :width*0.085, 'sizeY': height*0.120, 'img':'12241.png'},
     {'id': 'XXX',	 'posX': width*0.490, 'posY': height*0.420, 'sizeX' :width*0.110, 'sizeY': height*0.090, 'img':'12251.png'},
     {'id': 'XXX',	 'posX': width*0.600, 'posY': height*0.430, 'sizeX' :width*0.095, 'sizeY': height*0.070, 'img':'12252.png'},
     {'id': 'XXX',	 'posX': width*0.675, 'posY': height*0.500, 'sizeX' :width*0.145, 'sizeY': height*0.250, 'img':'12510.png'},
     {'id': 'XXX',	 'posX': width*0.630, 'posY': height*0.700, 'sizeX' :width*0.095, 'sizeY': height*0.140, 'img':'12520.png'},
     {'id': 'XXX',	 'posX': width*0.805, 'posY': height*0.365, 'sizeX' :width*0.095, 'sizeY': height*0.110, 'img':'12271.png'},
     {'id': 'XXX',	 'posX': width*0.815, 'posY': height*0.515, 'sizeX' :width*0.110, 'sizeY': height*0.080, 'img':'12930.png'},
     {'id': 'XXX',	 'posX': width*0.935, 'posY': height*0.305, 'sizeX' :width*0.035, 'sizeY': height*0.220, 'img':'12281.png'},
     {'id': 'XXX',	 'posX': width*0.935, 'posY': height*0.520, 'sizeX' :width*0.055, 'sizeY': height*0.190, 'img':'12920.png'},
     {'id': 'XXX',	 'posX': width*0.920, 'posY': height*0.800, 'sizeX' :width*0.070, 'sizeY': height*0.060, 'img':'XXX.png'},
     {'id': 'XXX',	 'posX': width*0.730, 'posY': height*0.790, 'sizeX' :width*0.070, 'sizeY': height*0.025, 'img':'12912.png'},
     {'id': 'XXX',	 'posX': width*0.750, 'posY': height*0.730, 'sizeX' :width*0.070, 'sizeY': height*0.025, 'img':'12911.png'}
     );
 
 return images;
}

function setAreas(width, height) {
area = new Array (
     { 'id':'upper_left',  'posX':0,          'posY':0,               'sizeX':width*0.4, 'sizeY':height*0.55 },
     { 'id':'upper_right', 'posX':width*0.4,  'posY':0,               'sizeX':width*0.6, 'sizeY':height*0.3},
     { 'id':'bottom_left', 'posX':0,          'posY':height*0.6, 'sizeX':width*0.55, 'sizeY':height*0.5},
     { 'id':'bottom_right','posX':width*0.57,  'posY':height*0.35, 'sizeX':width*0.43, 'sizeY':height*0.6}
);
return area;
}