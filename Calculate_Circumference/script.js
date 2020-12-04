const PIE = Math.PI;

let btn = document.getElementById('calculate');
btn.addEventListener('click',function(){
  let value = prompt('Please insert the radius of the circle','');
  calcCircumference(value);
})

function calcCircumference(radius){
  if (radius){
  let r = radius;
  let circumference = 2*PIE*r
  alert(`The circumference of the circle is ${circumference}`);
}else{
  alert("Please insert the value");
}
}
