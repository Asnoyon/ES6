// var javascript = {
//     name: "Noyon",
//     libraries: ["React","Angular","Vue"],
//     printlibraries: function(){
//         this.libraries.forEach((a)=>{
//             console.log(`${this.name} loves ${a}`)
//         })
//     }
// }
// javascript.printlibraries();

const searchInput = document.querySelector(".search");
const display = document.querySelector(".result");
const thank = document.querySelector(".thanks");
function show(){
    display.innerHTML=this.value;
    setTimeout(() => {
        thank.innerHTML= `You have typed: ${this.value}`
    }, 1000);
}
searchInput.addEventListener("keyup", show)