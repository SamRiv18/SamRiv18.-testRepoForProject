
// function for search bar
var autocomplete;

function getAutocomplete(){
    autocomplete = new google.maps.places.Autocomplete(document.getElementById("enter_text"),
    {
        types:['(cities)'],
        // componentRestrictions:{'country':['AU']},
        fields: ['place_id','geometry','name']
        
    });

    autocomplete.addListener('place_changed', onPlaceChanged);
}

function onPlaceChanged(){
    var place= autocomplete.getPlace();

    if(!place.geometry){
        document.getElementById('enter_text').placeholer="Enter Place";
    }

    else{
        document.getElementById('details').innerHTML = place.name;
    }
}

// functions creates a new map
var latitude= 33.7490;
var longitude= -84.3880;
var coords= latitude, longitude;

function initMap(coords){

    var options ={
        zoom: 8,
        center: {lat:latitude, lng:longitude}
    }

    var map = new google.maps.Map(document.getElementById('map'),options);

    var marker = new google.maps.Marker({
        position:{lat:latitude, lng:longitude},
        map: map
    });

}

geocode();

function geocode(){
    var location="22 Main st Boston MA";
    axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
        params:{
            address:location,
            key:"AIzaSyBgGkZtN3w9l6EmmjSgcGjvbPME4ILKP0w"
        }
    })
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    });
}
