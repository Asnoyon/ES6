var javascript = {
    name: "Noyon",
    libraries: ["React","Angular","Vue"],
    printlibraries: function(){
        this.libraries.forEach((a)=>{
            console.log(`${this.name} loves ${a}`)
        })
    }
}
javascript.printlibraries();