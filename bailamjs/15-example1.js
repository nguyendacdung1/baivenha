(function () {
    var hotel = {
        name: 'park',
        roomRate: 240,
        discount: 15,
        offerPrice: function () {
            var offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    };

var hotelName,roomRate,specialrRate;
hotelName=document.getElementById('hotelName');
roomRate=document.getElementById('roomRate');
specialrRate=document.getElementById('specialRate');
hotelName.textContent=hotel.name;
roomRate.textContent='$'+hotel.roomRate.toFixed(2);
specialrRate.textContent='$'+hotel.offerPrice();
var expiryMsg;
var today;
var elEnds;
function offerExpires(today){
    var weekFromToday, day, date, month, year, dayNames, monthNames;
    weekFromToday=new Date(today.getTime()+7*24*60*60*1000);
    dayNames=['Sunway','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    monthNames=['January','February','March','april','may','june','july','august','september','october','november','dêcmber'];
    day=dayNames[weekFromToday.getDay()];
    date=weekFromToday.getDate();
    month=monthNames[weekFromToday.getMonth()];
    year=weekFromToday.getFullYear();
    expiryMsg='offer expires next';
    expiryMsg+=day +'<br>('+date+' '+month+' '+year+')';
    return expiryMsg;
}
today=new Date();
elEnds=document.getElementById('offerEnds');
elEnds.innerHTML=offerExpires(today);
}());