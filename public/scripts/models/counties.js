'use strict';

//models will be using IFFEs.
let destinationAddresses = '9600+Veterans+Dr+SW,+Tacoma,+WA+98493' + '|' + '13033+Bel-Red+Rd+#210,+Bellevue,+WA+98005' + '|' + '925+Adele+Ave,+Bremerton,+WA+98312'+ '|' +'77+Wainwright+Dr,+Walla+Walla,+WA+99362'+ '|' +'4815+N+Assembly+St, Spokane,+WA+99205'+ '|' +'307+S+13th+St,+Mt+Vernon,+WA+98274'+ '|' +'1601+E+4th+Plain+Blvd,+Vancouver,+WA+98661'+ '|' +'825+Jadwin+Ave+#250,+Richland,+WA+99352'+ '|' + '1660+S+Columbian+Way,+Seattle,+WA+98108' + '|' + '151+NE+Hampe+Way,+Chehalis,+WA+98532' + '|' +'2530+Chester+Kimm+Rd,+Wenatchee,+WA+98801'+ '|' +'717+Fruitvale+Blvd,+Yakima,+WA+98902'
// let userZip = $('#input-form').val()
let userZip;
let userDistances = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=' + 'userZip' + '&destinations=' + destinationAddresses + 'key=AIzaSyDVwkHMtNWis86xPFx_GO5G9u72Ll0u4Cs'
$('#input-form').on('submit', function(event) {
  event.preventDefault();
  let userZip = $('input').val();
  console.log(userZip);
  $.ajax({
    url: userDistances,
    method: 'GET'
  }).then(console.log(userZip
  ))
})
