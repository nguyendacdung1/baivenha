var hotel={
    name:'park',
    rooms: 120,
    booked: 77,
    checkAvailability: function (){
        return this.rooms-this.booked
    }
};
var elName=document.getElementById('hotelName');
elName.textContent=hotel.Name;
var elRooms=document.getElementById('Rooms');
elRooms.textContent=hotel.checkAvailability()