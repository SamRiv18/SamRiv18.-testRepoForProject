var autocomplete;

function getAutocomplete(){
    autocomplete = new google.maps.places.Autocomplete(document.getElementsByClassName("form-control me-2"),
    {
        types:['establishment'],
        componentRestrictions:{'country': ['AU']}, 
        fields: ['place_id', 'geometry','name']
    });
}