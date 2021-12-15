var autocomplete;

function getAutocomplete(){
    autocomplete = new google.maps.places.Autocomplete(document.getElementsByClass("form-control me-2"),
    {
        types:['establishment'],
        componentRestrictions:{'country': ['AU']}, 
        fields: ['place_id', 'geometry','name']
    });
} 