(() => {


    mapboxgl.accessToken = 'pk.eyJ1IjoicGV0cnljYSIsImEiOiJjazd6eGFxajEwOW5rM2RydW5rb3pzcmtiIn0.eFkGZsTPafVGw_E9bXI8aA';

    const map = new mapboxgl.Map({
        container: 'map',
        center: [5.853944402219428, 51.96394769176637],
        zoom: 13,
        style: 'mapbox://style/mapbox/dark-v10'
    });

    map.scrollZoom.disable();
    map.addControl(new mapboxgl.NavigationControl());

    const marker = document.createElement('div');
    marker.className = 'marker';

    new mapboxgl.Marker(marker).setLngLat([5.853944402219428, 51.96394769176637]).addTo(map);


})();