import Map from 'ol/Map.js';
import View from 'ol/View.js';
import GeoJSON from 'ol/format/GeoJSON.js';
import Point from 'ol/geom/Point.js';
import Polyline from 'ol/format/Polyline.js';
import {getVectorContext} from 'ol/render.js';
import Circle from 'ol/geom/Circle.js';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import Icon from 'ol/style/Icon.js';
import Fill from 'ol/style/Fill.js';
import Stroke from 'ol/style/Stroke.js';
import Style from 'ol/style/Style.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';
import Feature from 'ol/Feature';
import CircleStyle from 'ol/style/Circle.js';

const stylesGPS = [
  new Style({
    stroke: new Stroke({
      color: 'blue',
      width: 3,
    }),
    fill: new Fill({
      color: 'rgba(0, 0, 255, 0.1)',
    }),
  }),
];

const stylesCombain = [
  new Style({
    stroke: new Stroke({
      color: 'red',
      width: 1,
    }),
    fill: new Fill({
      color: 'rgba(0, 0, 255, 0.1)',
    }),
  }),
];

const markerStyleGPS = new Style({
  image: new Icon({
    anchor: [0.5, 46],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: 'images/markerGPS.png',
  }),
});

const markerStyleCombain = new Style({
  image: new Icon({
    anchor: [0.5, 46],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: 'images/markerCombain.png',
  }),
});

const geoMarkerStyle = new Style({
  image: new CircleStyle({
    radius: 7,
    fill: new Fill({color: 'black'}),
    stroke: new Stroke({
      color: 'white',
      width: 2,
    }),
  }),
});

const coordinatesGPS = [
  [-0.1872871667146683, 51.355411529541016],
  [-0.1872959733009338, 51.355445861816406],
  [-0.270470529794693, 51.482051849365234],
  [-0.2700494229793549, 51.482891082763672],
  [-0.2688088119029999, 51.485126495361328],
  [-0.2685732543468475, 51.485393524169922],
  [-0.2683467268943787, 51.485736846923828],
  [-0.268150806427002, 51.485988616943359],
  [-0.2679427862167358, 51.486301422119141],
  [-0.2677263617515564, 51.48651123046875],
  [-0.2675636410713196, 51.486904144287109],
  [-0.2673467099666595, 51.487174987792969],
  [-0.2670572698116302, 51.487422943115234],
  [-0.2669483721256256, 51.487560272216797],
  [-0.2668794393539429, 51.487815856933594],
  [-0.266680121421814, 51.488101959228516],
  [-0.2665115892887115, 51.488418579101562],
  [-0.2664139866828918, 51.488788604736328],
  [-0.2662346363067627, 51.489105224609375],
  [-0.2660706639289856, 51.489425659179688],
  [-0.2659648656845093, 51.489761352539062],
  [-0.2658660709857941, 51.490032196044922],
  [-0.2657410800457001, 51.490348815917969],
  [-0.2656531035900116, 51.490650177001953],
  [-0.2657347023487091, 51.490985870361328],
  [-0.2657645046710968, 51.491310119628906],
  [-0.2651892602443695, 51.491455078125],
  [-0.2646719813346863, 51.491523742675781],
  [-0.2642167210578918, 51.491580963134766],
  [-0.2636907696723938, 51.491687774658203],
  [-0.2632729709148407, 51.491783142089844],
  [-0.2627187371253967, 51.491859436035156],
  [-0.2622463703155518, 51.491924285888672],
  [-0.2620579898357391, 51.491958618164062],
  [-0.2617694735527039, 51.491912841796875],
  [-0.263080358505249, 51.491741180419922],
  [-0.2655327618122101, 51.491340637207031],
  [-0.265867292881012, 51.489852905273438],
  [-0.2665580809116364, 51.488433837890625],
  [-0.2674766778945923, 51.486907958984375],
  [-0.2684937715530396, 51.485443115234375],
  [-0.2692982256412506, 51.483966827392578],
  [-0.2696394920349121, 51.482379913330078],
  [-0.268036812543869, 51.481132507324219],
  [-0.1826874315738678, 51.462070465087891],
  [-0.1696808189153671, 51.464092254638672],
  [-0.1696808189153671, 51.464092254638672],
  [-0.1514891982078552, 51.443065643310547],
  [-0.1379004567861557, 51.421977996826172],
  [-0.1555405557155609, 51.406196594238281],
  [-0.1525531560182571, 51.389122009277344],
  [-0.1633176058530807, 51.369350433349609],
  [-0.1816128641366959, 51.361183166503906],
  [-0.1910942196846008, 51.359096527099609],
  [-0.191115528345108, 51.357292175292969],
  [-0.1915975213050842, 51.355827331542969],
  [-0.1916937828063965, 51.354896545410156],
  [-0.189562514424324, 51.355319976806641],
  [-0.1875170469284058, 51.35552978515625],
];

const coordinatesCombain = [
  [-0.1872871667146683, 51.355411529541016],
  [-0.1884335, 51.355467],
  [-0.1884335, 51.355467],
  [-0.1872959733009338, 51.355445861816406],
  [-0.1884335, 51.355467],
  [-0.1884335, 51.355467],
  [-0.1884335, 51.355467],
  [-0.1884335, 51.355467],
  [-0.1884335, 51.355467],
  [-0.187821, 51.355395],
  [-0.187821, 51.355395],
  [-0.187821, 51.355395],
  [-0.187821, 51.355395],
  [-0.187821, 51.355395],
  [-0.187821, 51.355395],
  [-0.187821, 51.355395],
  [-0.187821, 51.355395],
  [-0.187821, 51.355395],
  [-0.187821, 51.355395],
  [-0.187821, 51.355395],
  [-0.187821, 51.355395],
  [-0.187821, 51.355395],
  [-0.187821, 51.355395],
  [-0.187821, 51.355395],
  [-0.187821, 51.355395],
  [-0.187821, 51.355395],
  [-0.187821, 51.355395],
  [-0.187821, 51.355395],
  [-0.270470529794693, 51.482051849365234],
  [-0.2700494229793549, 51.482891082763672],
  [-0.2688088119029999, 51.485126495361328],
  [-0.2685732543468475, 51.485393524169922],
  [-0.2683467268943787, 51.485736846923828],
  [-0.268150806427002, 51.485988616943359],
  [-0.2679427862167358, 51.486301422119141],
  [-0.2677263617515564, 51.48651123046875],
  [-0.2675636410713196, 51.486904144287109],
  [-0.2673467099666595, 51.487174987792969],
  [-0.2670572698116302, 51.487422943115234],
  [-0.2669483721256256, 51.487560272216797],
  [-0.2668794393539429, 51.487815856933594],
  [-0.266680121421814, 51.488101959228516],
  [-0.2665115892887115, 51.488418579101562],
  [-0.2664139866828918, 51.488788604736328],
  [-0.2662346363067627, 51.489105224609375],
  [-0.2660706639289856, 51.489425659179688],
  [-0.2659648656845093, 51.489761352539062],
  [-0.2658660709857941, 51.490032196044922],
  [-0.2657410800457001, 51.490348815917969],
  [-0.2656531035900116, 51.490650177001953],
  [-0.2657347023487091, 51.490985870361328],
  [-0.2657645046710968, 51.491310119628906],
  [-0.2651892602443695, 51.491455078125],
  [-0.2646719813346863, 51.491523742675781],
  [-0.2642167210578918, 51.491580963134766],
  [-0.2636907696723938, 51.491687774658203],
  [-0.2632729709148407, 51.491783142089844],
  [-0.2627187371253967, 51.491859436035156],
  [-0.2622463703155518, 51.491924285888672],
  [-0.2620579898357391, 51.491958618164062],
  [-0.187821, 51.355395],
  [-0.187821, 51.355395],
  [-0.187821, 51.355395],
  [-0.187821, 51.355395],
  [-0.187821, 51.355395],
  [-0.187821, 51.355395],
  [-0.261031, 51.489804],
  [-0.261031, 51.489804],
  [-0.261031, 51.489804],
  [-0.261031, 51.489804],
  [-0.261031, 51.489804],
  [-0.261031, 51.489804],
  [-0.261031, 51.489804],
  [-0.261031, 51.489804],
  [-0.261031, 51.489804],
  [-0.261031, 51.489804],
  [-0.261031, 51.489804],
  [-0.261031, 51.489804],
  [-0.261031, 51.489804],
  [-0.261031, 51.489804],
  [-0.2617694735527039, 51.491912841796875],
  [-0.263080358505249, 51.491741180419922],
  [-0.261031, 51.489804],
  [-0.2655327618122101, 51.491340637207031],
  [-0.265867292881012, 51.489852905273438],
  [-0.2665580809116364, 51.488433837890625],
  [-0.2674766778945923, 51.486907958984375],
  [-0.2684937715530396, 51.485443115234375],
  [-0.2692982256412506, 51.483966827392578],
  [-0.2696394920349121, 51.482379913330078],
  [-0.268036812543869, 51.481132507324219],
  [-0.261031, 51.489804],
  [-0.261031, 51.489804],
  [-0.261031, 51.489804],
  [-0.1826874315738678, 51.462070465087891],
  [-0.1696808189153671, 51.464092254638672],
  [-0.1696808189153671, 51.464092254638672],
  [-0.1514891982078552, 51.443065643310547],
  [-0.1379004567861557, 51.421977996826172],
  [-0.1555405557155609, 51.406196594238281],
  [-0.1525531560182571, 51.389122009277344],
  [-0.1633176058530807, 51.369350433349609],
  [-0.1816128641366959, 51.361183166503906],
  [-0.1910942196846008, 51.359096527099609],
  [-0.191115528345108, 51.357292175292969],
  [-0.1915975213050842, 51.355827331542969],
  [-0.1916937828063965, 51.354896545410156],
  [-0.189562514424324, 51.355319976806641],
  [-0.1875170469284058, 51.35552978515625],
];

const featuresGPS = new GeoJSON().readFeatures(makeGeoJSON(coordinatesGPS));
const lineLayerGPS = new VectorLayer({
  source: new VectorSource({
    features: featuresGPS,
  }),
  style: stylesGPS,
});
const pointLayerGPS = new VectorLayer({
  source: new VectorSource({
    features: makePointFeatures(coordinatesGPS, markerStyleGPS),
  }),
});

const featuresCombain = new GeoJSON().readFeatures(
  makeGeoJSON(coordinatesCombain),
);
const lineLayerCombain = new VectorLayer({
  source: new VectorSource({
    features: featuresCombain,
  }),
  style: stylesCombain,
});
const pointLayerCombain = new VectorLayer({
  source: new VectorSource({
    features: makePointFeatures(coordinatesCombain, markerStyleCombain),
  }),
});

const geoMarker = new Feature({
  type: 'geoMarker',
  geometry: new Point(coordinatesCombain[0]),
});
geoMarker.setStyle(
  new Style({
    image: new CircleStyle({
      radius: 7,
      fill: new Fill({color: 'black'}),
      stroke: new Stroke({
        color: 'white',
        width: 2,
      }),
    }),
  }),
);

function makeGeoJSON(lineCoordinates) {
  const geojsonObject = {
    type: 'FeatureCollection',
    crs: {
      type: 'name',
      properties: {
        name: 'EPSG:4326',
      },
    },
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: lineCoordinates,
        },
      },
    ],
  };
  return geojsonObject;
}

function makePointFeatures(lineCoordinates, markerStyle) {
  const features = [];
  lineCoordinates.forEach((coordinates) => {
    const ptFeature = new Feature({
      geometry: new Point(coordinates),
    });
    ptFeature.setStyle(markerStyle);
    features.push(ptFeature);
  });
  return features;
}

function toggleLayerVisibility(layer) {
  if (layer.getVisible()) {
    layer.setVisible(false); // Hide the layer
  } else {
    layer.setVisible(true); // Show the layer
  }
}

const toggleLayerButtonGPS = document.getElementById('toggleLayerButtonGPS');
const toggleLayerButtonCombain = document.getElementById(
  'toggleLayerButtonCombain',
);

toggleLayerButtonGPS.addEventListener('click', function () {
  // Call the toggle function here
  if (lineLayerGPS != null) {
    toggleLayerVisibility(lineLayerGPS);
    toggleLayerVisibility(pointLayerGPS);
  }
});

toggleLayerButtonCombain.addEventListener('click', function () {
  // Call the toggle function here
  if (lineLayerCombain != null) {
    toggleLayerVisibility(lineLayerCombain);
    toggleLayerVisibility(pointLayerCombain);
  }
});

/*************/
/* Animation */
/*************/
const animationLayer = new VectorLayer({
  source: new VectorSource({
    features: [geoMarker],
  }),
  style: stylesCombain,
});

let activeRoute = null;
let activePosition = null;
const startPositionGPS = new Point(coordinatesGPS[0]);
const startPositionCombain = new Point(coordinatesCombain[0]);
const routeGPS = featuresGPS[0].getGeometry();
const routeCombain = featuresCombain[0].getGeometry();

const startButtonGPS = document.getElementById('start-animation-gps');
const startButtonCombain = document.getElementById('start-animation-combain');

let animating = false;
let distance = 0;
let lastTime;

function moveFeature(event) {
  const speed = 60;
  const time = event.frameState.time;
  const elapsedTime = time - lastTime;
  distance = (distance + (speed * elapsedTime) / 1e6) % 2;
  lastTime = time;

  const currentCoordinate = activeRoute.getCoordinateAt(
    distance > 1 ? 2 - distance : distance,
  );
  activePosition.setCoordinates(currentCoordinate);

  const vectorContext = getVectorContext(event);
  vectorContext.setStyle(geoMarkerStyle);
  vectorContext.drawGeometry(activePosition);
  // tell OpenLayers to continue the postrender animation
  map.render();
  if (distance > 1) {
    stopAnimation();
  }
}

function startAnimation() {
  if (distance > 1) {
    distance = 0;
  }

  animating = true;
  lastTime = Date.now();
  startButtonGPS.textContent = 'Stop Animation';
  animationLayer.on('postrender', moveFeature);
  // hide geoMarker and trigger map render through change event
  geoMarker.setGeometry(null);
}

function stopAnimation() {
  animating = false;
  startButtonGPS.textContent = 'Start Animation';

  // Keep marker at current animation position
  geoMarker.setGeometry(activePosition);
  animationLayer.un('postrender', moveFeature);
}

startButtonGPS.addEventListener('click', function () {
  if (activeRoute != routeGPS) {
    distance = 0;
    activePosition = startPositionGPS;
  }
  activeRoute = routeGPS;
  if (animating) {
    stopAnimation();
  } else {
    startAnimation();
  }
});

startButtonCombain.addEventListener('click', function () {
  if (activeRoute != routeCombain) {
    distance = 0;
    activePosition = startPositionCombain;
  }
  activeRoute = routeCombain;
  if (animating) {
    stopAnimation();
  } else {
    startAnimation();
  }
});

const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
    lineLayerGPS,
    lineLayerCombain,
    pointLayerCombain,
    pointLayerGPS,
    animationLayer,
  ],
  target: 'map',
  view: new View({
    projection: 'EPSG:4326',
    center: [-0.187821, 51.355395],
    zoom: 16,
  }),
});
