var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_TargetVTDs_1 = new ol.format.GeoJSON();
var features_TargetVTDs_1 = format_TargetVTDs_1.readFeatures(json_TargetVTDs_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TargetVTDs_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TargetVTDs_1.addFeatures(features_TargetVTDs_1);
var lyr_TargetVTDs_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TargetVTDs_1, 
                style: style_TargetVTDs_1,
                popuplayertitle: 'Target VTDs',
                interactive: true,
    title: 'Target VTDs<br />\
    <img src="styles/legend/TargetVTDs_1_0.png" /> Target<br />' });
var format_15thCongressionalDistrict_2 = new ol.format.GeoJSON();
var features_15thCongressionalDistrict_2 = format_15thCongressionalDistrict_2.readFeatures(json_15thCongressionalDistrict_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15thCongressionalDistrict_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15thCongressionalDistrict_2.addFeatures(features_15thCongressionalDistrict_2);
var lyr_15thCongressionalDistrict_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15thCongressionalDistrict_2, 
                style: style_15thCongressionalDistrict_2,
                popuplayertitle: '15th Congressional District',
                interactive: true,
    title: '15th Congressional District<br />\
    <img src="styles/legend/15thCongressionalDistrict_2_0.png" /> 15<br />' });
var format_Counties_3 = new ol.format.GeoJSON();
var features_Counties_3 = format_Counties_3.readFeatures(json_Counties_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Counties_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Counties_3.addFeatures(features_Counties_3);
var lyr_Counties_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Counties_3, 
                style: style_Counties_3,
                popuplayertitle: 'Counties',
                interactive: true,
    title: 'Counties<br />\
    <img src="styles/legend/Counties_3_0.png" /> Franklin County<br />\
    <img src="styles/legend/Counties_3_1.png" /> Madison County<br />\
    <img src="styles/legend/Counties_3_2.png" /> Other Counties<br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_TargetVTDs_1.setVisible(true);lyr_15thCongressionalDistrict_2.setVisible(true);lyr_Counties_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_TargetVTDs_1,lyr_15thCongressionalDistrict_2,lyr_Counties_3];
lyr_TargetVTDs_1.set('fieldAliases', {'STATEFP20': 'STATEFP20', 'COUNTYFP20': 'COUNTYFP20', 'VTDST20': 'VTDST20', 'GEOID20': 'GEOID20', 'VTDI20': 'VTDI20', 'NAME20': 'NAME20', 'NAMELSAD20': 'NAMELSAD20', 'LSAD20': 'LSAD20', 'MTFCC20': 'MTFCC20', 'FUNCSTAT20': 'FUNCSTAT20', 'ALAND20': 'ALAND20', 'AWATER20': 'AWATER20', 'INTPTLAT20': 'INTPTLAT20', 'INTPTLON20': 'INTPTLON20', 'NEW_Target VTDs for Votes': 'NEW_Target VTDs for Votes', });
lyr_15thCongressionalDistrict_2.set('fieldAliases', {'ID': 'ID', 'DISTRICT': 'DISTRICT', });
lyr_Counties_3.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_TargetVTDs_1.set('fieldImages', {'STATEFP20': 'TextEdit', 'COUNTYFP20': 'TextEdit', 'VTDST20': 'TextEdit', 'GEOID20': 'TextEdit', 'VTDI20': 'TextEdit', 'NAME20': 'TextEdit', 'NAMELSAD20': 'TextEdit', 'LSAD20': 'TextEdit', 'MTFCC20': 'TextEdit', 'FUNCSTAT20': 'TextEdit', 'ALAND20': 'TextEdit', 'AWATER20': 'TextEdit', 'INTPTLAT20': 'TextEdit', 'INTPTLON20': 'TextEdit', 'NEW_Target VTDs for Votes': 'CheckBox', });
lyr_15thCongressionalDistrict_2.set('fieldImages', {'ID': 'TextEdit', 'DISTRICT': 'TextEdit', });
lyr_Counties_3.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUNTYNS': 'TextEdit', 'AFFGEOID': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'LSAD': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', });
lyr_TargetVTDs_1.set('fieldLabels', {'STATEFP20': 'no label', 'COUNTYFP20': 'no label', 'VTDST20': 'no label', 'GEOID20': 'no label', 'VTDI20': 'no label', 'NAME20': 'no label', 'NAMELSAD20': 'no label', 'LSAD20': 'no label', 'MTFCC20': 'no label', 'FUNCSTAT20': 'no label', 'ALAND20': 'no label', 'AWATER20': 'no label', 'INTPTLAT20': 'no label', 'INTPTLON20': 'no label', 'NEW_Target VTDs for Votes': 'no label', });
lyr_15thCongressionalDistrict_2.set('fieldLabels', {'ID': 'no label', 'DISTRICT': 'no label', });
lyr_Counties_3.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'COUNTYNS': 'no label', 'AFFGEOID': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'LSAD': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', });
lyr_Counties_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});