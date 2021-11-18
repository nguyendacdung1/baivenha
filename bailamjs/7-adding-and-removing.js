var hotel={
    name: 'park',
    rooms: 140,
    booked:77,
};
hotel.gym=true;
hotel.pool=false;
delete hotel.booked;
var elName=document.getElementById('hotelName');
elName.textContent=hotel.name;
var elPool=document.getElementById('pool');
elPool.textContent=hotel.pool;
var elGym=document.getElementById('Gym');
elGym.textContent=hotel.gym;