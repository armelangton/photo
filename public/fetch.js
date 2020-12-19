var calendarImage = document.querySelector('.calendar-image'); 
fetch('https://picsum.photos/200/300') 
.then(function(response) { //
  // if (!response.ok){ 
  //     return new Error(response); 
  // } 
  return response.blob(); 
})
.then(function(blob) { 
  
  var objectURL=URL.createObjectURL(blob)
  
  console.log(blob)

calendarImage.src = objectURL;

})
 .catch(console.log)

