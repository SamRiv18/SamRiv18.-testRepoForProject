var autocomplete;

function getAutocomplete(){
    autocomplete = new google.maps.places.Autocomplete(document.getElementsByClassName("d-flex"),
    {
        types:['establishment'],
        componentRestrictions:{'country': ['AU']}, 
        fields: ['place_id', 'geometry','name']
    });
}