
let btn = document.querySelector(".btn");
let num = document.querySelector(".num");
let resetBtn = document.querySelector(".restart");
// let tsoher = document.querySelector(".tsoher")
// let imga=document.querySelector('.imga')

// let finished=document.querySelector(
//   '.finished')

btn.onclick = function () {
  num.textContent++;
}

resetBtn.onclick = function () {
  num.textContent = '0';
}

// btn.onclick=function(){
//     num.textContent++
//     setTimeout(() => {
//         sba.style.display = `none`
//     }, 1000);
//     sba.style.display = `block`

//     if (num.textContent === '33' ){
//   console.log('aaaaaa')
//   sba.textContent ='الحمد لله'
// } else if (num.textContent === '66'){
//   sba.textContent =' الله اكبر '
//   }else if (num.textContent === '101'){
//         imga.style.display = `block`;
//   }else if (num.textContent === '100'){
//     sba.textContent ='لا اله الا الله'
//   }else if(num.textContent === '101')
//   finished.style.display= 'block'
// }

// tsoher.onclick=function(){
//     if (num.textContent = '0')
//     { sba.textContent ='سبحان لله'

//       imga.style.display = `none`
//             finished.style.display = `none`
//           finished.textContent ='1'

//     }




// };
// finished.onclick=function(){
// setTimeout(()=>{
//     finished.textContent ='♤'
// finished.style.cssText =
// "padding: 24px 31px ; display:block;"
// },100)

// }