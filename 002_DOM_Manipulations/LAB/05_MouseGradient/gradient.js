function attachGradientEvents() {
   let gradient = document.getElementById('gradient-box');
   let result = document.getElementById('result');
   let overEvent = gradient.addEventListener('mousemove', function (event) {
       let maxWidth = event.target.clientWidth;
       let offset = event.offsetX;

       let percent = Math.trunc(offset * 100 / (maxWidth - 1));

       result.textContent = percent + '%';

   });

   gradient.addEventListener('mouseleave', function (event) {
       result.textContent = '';
   })
   
}