const actService = 'services-hide';
var lastService = "service-0"

function toggleServices(id){
    document.getElementById(lastService).classList.toggle(actService)
    document.getElementById(id).classList.toggle(actService)
    lastService = id;
    console.log(lastService)
    console.log(id)
}