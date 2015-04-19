function setImages(width, height) {

//pit‰‰ laskea oikeasta kuvasta, mihin kohtaan ne sijoittuu suhteessa varsinaiseen kokoon jos tekee sen prosenteilla
 images = new Array(
	 {'id': '12111',	 'posX': width*0.180, 'posY': height*0.130, 'sizeX' :width*0.105, 'sizeY': height*0.120, 'img':'12111.png'},
	 {'id': '12131', 	 'posX': width*0.100, 'posY': height*0.140, 'sizeX' :width*0.060, 'sizeY': height*0.090, 'img':'12131.png'},
	 {'id': '12132', 	 'posX': width*0.015, 'posY': height*0.200, 'sizeX' :width*0.060, 'sizeY': height*0.170, 'img':'12132.png'},
	 {'id': '12141', 'posX': width*0.030, 'posY': height*0.400, 'sizeX' :width*0.100, 'sizeY': height*0.090, 'img':'12141.png'},
	 {'id': '12121', 'posX': width*0.225, 'posY': height*0.385, 'sizeX' :width*0.050, 'sizeY': height*0.100, 'img':'12121.png'},
	 {'id': '12122',	 'posX': width*0.275, 'posY': height*0.385, 'sizeX' :width*0.060, 'sizeY': height*0.105, 'img':'12122.png'},
	 {'id': '12211',	 'posX': width*0.344, 'posY': height*0.290, 'sizeX' :width*0.060, 'sizeY': height*0.240, 'img':'12211.png'},
	 {'id': '12112',	 'posX': width*0.295, 'posY': height*0.130, 'sizeX' :width*0.050, 'sizeY': height*0.240, 'img':'12112.png'},
   {'id': '12311',	 'posX': width*0.075, 'posY': height*0.630, 'sizeX' :width*0.135, 'sizeY': height*0.120, 'img':'12311.png'},
   {'id': '12341',	 'posX': width*0.020, 'posY': height*0.850, 'sizeX' :width*0.140, 'sizeY': height*0.095, 'img':'12341.png'},
   {'id': '12331',	 'posX': width*0.165, 'posY': height*0.880, 'sizeX' :width*0.150, 'sizeY': height*0.060, 'img':'12331.png'},
   {'id': '12321',	 'posX': width*0.225, 'posY': height*0.620, 'sizeX' :width*0.115, 'sizeY': height*0.160, 'img':'12321.png'},
   {'id': '12332',	 'posX': width*0.345, 'posY': height*0.875, 'sizeX' :width*0.185, 'sizeY': height*0.070, 'img':'12332.png'},
   {'id': '12342',	 'posX': width*0.415, 'posY': height*0.630, 'sizeX' :width*0.100, 'sizeY': height*0.110, 'img':'12342.png'},
   {'id': '12343',	 'posX': width*0.450, 'posY': height*0.740, 'sizeX' :width*0.065, 'sizeY': height*0.100, 'img':'12343.png'},
   {'id': '12221',	 'posX': width*0.430, 'posY': height*0.140, 'sizeX' :width*0.100, 'sizeY': height*0.150, 'img':'12221.png'},
   {'id': '12231',	 'posX': width*0.540, 'posY': height*0.150, 'sizeX' :width*0.125, 'sizeY': height*0.090, 'img':'12231.png'},
   {'id': '12241',	 'posX': width*0.690, 'posY': height*0.150, 'sizeX' :width*0.085, 'sizeY': height*0.120, 'img':'12241.png'},
   {'id': '12251',	 'posX': width*0.490, 'posY': height*0.420, 'sizeX' :width*0.110, 'sizeY': height*0.090, 'img':'12251.png'},
   {'id': '12252',	 'posX': width*0.600, 'posY': height*0.430, 'sizeX' :width*0.095, 'sizeY': height*0.070, 'img':'12252.png'},
   {'id': '12510',	 'posX': width*0.675, 'posY': height*0.500, 'sizeX' :width*0.145, 'sizeY': height*0.215, 'img':'12510.png'},
   {'id': '12520',	 'posX': width*0.600, 'posY': height*0.700, 'sizeX' :width*0.095, 'sizeY': height*0.140, 'img':'12520.png'},
   {'id': '12271',	 'posX': width*0.800, 'posY': height*0.370, 'sizeX' :width*0.095, 'sizeY': height*0.120, 'img':'12271.png'},
   {'id': '12930',	 'posX': width*0.825, 'posY': height*0.535, 'sizeX' :width*0.110, 'sizeY': height*0.080, 'img':'12930.png'},
   {'id': '12281',	 'posX': width*0.935, 'posY': height*0.305, 'sizeX' :width*0.035, 'sizeY': height*0.220, 'img':'12281.png'},
   {'id': '12920',	 'posX': width*0.935, 'posY': height*0.520, 'sizeX' :width*0.055, 'sizeY': height*0.190, 'img':'12920.png'},
   {'id': 'XXX',	 'posX': width*0.920, 'posY': height*0.800, 'sizeX' :width*0.070, 'sizeY': height*0.060, 'img':'XXX.png'},
   {'id': '12912',	 'posX': width*0.750, 'posY': height*0.810, 'sizeX' :width*0.070, 'sizeY': height*0.030, 'img':'12912.png'},
   {'id': '12911',	 'posX': width*0.770, 'posY': height*0.725, 'sizeX' :width*0.070, 'sizeY': height*0.025, 'img':'12911.png'}
   );
 
 return images;
}

function setZoomedImages(width, height, curr_area) 
{
     var SuhdeX = (width / curr_area.sizeX);
     var SuhdeY = (height / curr_area.sizeY);
      zoomedImages = new Array(
      {'id': '12111', 'posX': (width*0.190 - curr_area.posX) * SuhdeX, 'posY': (height*0.145 - curr_area.posY) * SuhdeY, 'sizeX' :width*0.105*SuhdeX, 'sizeY': height*0.125*SuhdeY, 'img':'12111.png', 'parent': 'upper_left'  },
      {'id': '12131', 'posX': (width*0.105- curr_area.posX) * SuhdeX, 'posY': (height*0.155 - curr_area.posY) * SuhdeY, 'sizeX' :width*0.065*SuhdeX, 'sizeY': height*0.090*SuhdeY,  'img':'12131.png', 'parent': 'upper_left'  },
      {'id': '12132', 'posX': (width*0.025 - curr_area.posX) * SuhdeX, 'posY': (height*0.210 - curr_area.posY) * SuhdeY, 'sizeX' :width*0.060*SuhdeX, 'sizeY': height*0.175*SuhdeY, 'img':'12132.png', 'parent': 'upper_left'  },
      {'id': '12141', 'posX': (width*0.035 - curr_area.posX) * SuhdeX, 'posY': (height*0.410 - curr_area.posY) * SuhdeY, 'sizeX' :width*0.110*SuhdeX, 'sizeY': height*0.090*SuhdeY, 'img':'12141.png', 'parent': 'upper_left'  },
      {'id': '12121', 'posX': (width*0.238 - curr_area.posX) * SuhdeX, 'posY': (height*0.397 - curr_area.posY) * SuhdeY, 'sizeX' :width*0.045*SuhdeX, 'sizeY': height*0.100*SuhdeY, 'img':'12121.png', 'parent': 'upper_left'  },
      {'id': '12122', 'posX': (width*0.283 - curr_area.posX) * SuhdeX, 'posY': (height*0.397 - curr_area.posY) * SuhdeY, 'sizeX' :width*0.047*SuhdeX, 'sizeY': height*0.100*SuhdeY, 'img':'12122.png', 'parent': 'upper_left'  },
      {'id': '12211', 'posX': (width*0.369 - curr_area.posX) * SuhdeX, 'posY': (height*0.280 - curr_area.posY) * SuhdeY, 'sizeX' :width*0.060*SuhdeX, 'sizeY': height*0.240*SuhdeY, 'img':'12211.png', 'parent': 'upper_left'  },
      {'id': '12112', 'posX': (width*0.305 - curr_area.posX) * SuhdeX, 'posY': (height*0.130 - curr_area.posY) * SuhdeY, 'sizeX' :width*0.060*SuhdeX, 'sizeY': height*0.240*SuhdeY, 'img':'12112.png', 'parent': 'upper_left'  },
      {'id': '12311', 'posX': (width*0.075 - curr_area.posX) * SuhdeX, 'posY': (height*0.690 - curr_area.posY) * SuhdeY, 'sizeX' :width*0.135*SuhdeX, 'sizeY': height*0.100*SuhdeY, 'img':'12311.png', 'parent': 'bottom_left' },
      {'id': '12341', 'posX': (width*0.025 - curr_area.posX) * SuhdeX, 'posY': (height*0.860 - curr_area.posY) * SuhdeY, 'sizeX' :width*0.135*SuhdeX, 'sizeY': height*0.090*SuhdeY, 'img':'12341.png', 'parent': 'bottom_left' },
      {'id': '12331', 'posX': (width*0.165 - curr_area.posX) * SuhdeX, 'posY': (height*0.880 - curr_area.posY) * SuhdeY, 'sizeX' :width*0.150*SuhdeX, 'sizeY': height*0.060*SuhdeY, 'img':'12331.png', 'parent': 'bottom_left' },
      {'id': '12321', 'posX': (width*0.220- curr_area.posX) * SuhdeX, 'posY': (height*0.690 - curr_area.posY) * SuhdeY, 'sizeX' :width*0.125*SuhdeX, 'sizeY': height*0.080*SuhdeY, 'img':'12321.png', 'parent': 'bottom_left' },
      {'id': '12332', 'posX': (width*0.330 - curr_area.posX) * SuhdeX, 'posY': (height*0.875 - curr_area.posY) * SuhdeY, 'sizeX' :width*0.185*SuhdeX, 'sizeY': height*0.070*SuhdeY, 'img':'12332.png', 'parent': 'bottom_left' },
      {'id': '12342', 'posX': (width*0.400 - curr_area.posX) * SuhdeX, 'posY': (height*0.700 - curr_area.posY) * SuhdeY, 'sizeX' :width*0.090*SuhdeX, 'sizeY': height*0.085*SuhdeY, 'img':'12342.png', 'parent': 'bottom_left' },
      {'id': '12343', 'posX': (width*0.430 - curr_area.posX) * SuhdeX, 'posY': (height*0.785 - curr_area.posY) * SuhdeY, 'sizeX' :width*0.065*SuhdeX, 'sizeY': height*0.075*SuhdeY, 'img':'12343.png', 'parent': 'bottom_left' },
      {'id': '12221', 'posX': (width*0.470 - curr_area.posX) * SuhdeX, 'posY': (height*0.090 - curr_area.posY) * SuhdeY, 'sizeX' :width*0.125*SuhdeX, 'sizeY': height*0.080*SuhdeY, 'img':'12221.png', 'parent': 'upper_right' },
      {'id': '12231', 'posX': (width*0.605 - curr_area.posX) * SuhdeX, 'posY': (height*0.090 - curr_area.posY) * SuhdeY, 'sizeX' :width*0.195*SuhdeX, 'sizeY': height*0.050*SuhdeY, 'img':'12231.png', 'parent': 'upper_right' },
      {'id': '12241', 'posX': (width*0.815 - curr_area.posX) * SuhdeX, 'posY': (height*0.095 - curr_area.posY) * SuhdeY, 'sizeX' :width*0.125*SuhdeX, 'sizeY': height*0.065*SuhdeY, 'img':'12241.png', 'parent': 'upper_right' },
      {'id': '12251', 'posX': (width*0.610 - curr_area.posX) * SuhdeX, 'posY': (height*0.450 - curr_area.posY) * SuhdeY, 'sizeX' :width*0.070*SuhdeX, 'sizeY': height*0.090*SuhdeY, 'img':'12251.png', 'parent': 'bottom_right'},
      {'id': '12252', 'posX': (width*0.680 - curr_area.posX) * SuhdeX, 'posY': (height*0.450 - curr_area.posY) * SuhdeY, 'sizeX' :width*0.095*SuhdeX, 'sizeY': height*0.085*SuhdeY, 'img':'12252.png', 'parent': 'bottom_right'},
      {'id': '12510', 'posX': (width*0.745 - curr_area.posX) * SuhdeX, 'posY': (height*0.520 - curr_area.posY) * SuhdeY, 'sizeX' :width*0.115*SuhdeX, 'sizeY': height*0.230*SuhdeY, 'img':'12510.png', 'parent': 'bottom_right'},
      {'id': '12520', 'posX': (width*0.680 - curr_area.posX) * SuhdeX, 'posY': (height*0.720 - curr_area.posY) * SuhdeY, 'sizeX' :width*0.080*SuhdeX, 'sizeY': height*0.160*SuhdeY, 'img':'12520.png', 'parent': 'bottom_right'},
      {'id': '12271', 'posX': (width*0.843 - curr_area.posX) * SuhdeX, 'posY': (height*0.395 - curr_area.posY) * SuhdeY, 'sizeX' :width*0.070*SuhdeX, 'sizeY': height*0.125*SuhdeY, 'img':'12271.png', 'parent': 'bottom_right'},
      {'id': '12930', 'posX': (width*0.860 - curr_area.posX) * SuhdeX, 'posY': (height*0.560 - curr_area.posY) * SuhdeY, 'sizeX' :width*0.080*SuhdeX, 'sizeY': height*0.090*SuhdeY, 'img':'12930.png', 'parent': 'bottom_right'},
      {'id': '12281', 'posX': (width*0.945 - curr_area.posX) * SuhdeX, 'posY': (height*0.375 - curr_area.posY) * SuhdeY, 'sizeX' :width*0.035*SuhdeX, 'sizeY': height*0.170*SuhdeY, 'img':'12281.png', 'parent': 'bottom_right'},
      {'id': '12920', 'posX': (width*0.950 - curr_area.posX) * SuhdeX, 'posY': (height*0.560 - curr_area.posY) * SuhdeY, 'sizeX' :width*0.040*SuhdeX, 'sizeY': height*0.175*SuhdeY, 'img':'12920.png', 'parent': 'bottom_right'},
      {'id': 'XXX',   'posX': (width*0.930 - curr_area.posX) * SuhdeX, 'posY': (height*0.850 - curr_area.posY) * SuhdeY, 'sizeX' :width*0.060*SuhdeX, 'sizeY': height*0.060*SuhdeY, 'img':'XXX.png'  , 'parent': 'bottom_right'},
      {'id': '12912', 'posX': (width*0.800 - curr_area.posX) * SuhdeX, 'posY': (height*0.855 - curr_area.posY) * SuhdeY, 'sizeX' :width*0.050*SuhdeX, 'sizeY': height*0.025*SuhdeY, 'img':'12912.png', 'parent': 'bottom_right'},
      {'id': '12911', 'posX': (width*0.820 - curr_area.posX) * SuhdeX, 'posY': (height*0.760 - curr_area.posY) * SuhdeY, 'sizeX' :width*0.050*SuhdeX, 'sizeY': height*0.025*SuhdeY, 'img':'12911.png', 'parent': 'bottom_right'}
);
return zoomedImages;
}


function setAreas(width, height) {
area = new Array (
     { 'id':'upper_left',  'posX':10,          'posY':10,               'sizeX':width*0.40,  'sizeY':height*0.55 },
     { 'id':'upper_right', 'posX':width*0.42,  'posY':10,               'sizeX':width*0.55, 'sizeY':height*0.3},
     { 'id':'bottom_left', 'posX':10,          'posY':height*0.6,       'sizeX':width*0.52, 'sizeY':height*0.38},
     { 'id':'bottom_right','posX':width*0.57,  'posY':height*0.35, 		'sizeX':width*0.42, 'sizeY':height*0.58}
);
return area;
}
