console.log('Loaded!');
//changing the content of the element havig id=main-text
var element = document.getElementById('main-text');
element.innerHTML=`Hi! I am rahul and this is my first web app.
<h4>The 3 requests made by this page are:</h4>
     request style.css file(served),
     request madi.png file(served),
     request main.js file(IS NOW SERVED).`;

//move MADI
var img= document.getElementById('madi');
img.onclick= function(){
  img.style.marginLeft= '100px';
};
