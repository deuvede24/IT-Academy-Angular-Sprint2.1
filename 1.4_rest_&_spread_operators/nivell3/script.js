
function tresElementos(a1,a2,a3){
console.log(a1,a2,a3)
}

function mainex5(){
    const array = ["Sandra", "Roberts", "President"]
    tresElementos(...array);
}


function mainex6(){
    //Crear dos objetos con propiedades diferentes
    const objecte1 = {
        nombre: "Sandra",
        profesion: 30,
      };
      
      const objecte2 = {
        ciudad: "Barcelona",
        profesion: "Ingeniero",
      };
      
      // Fusionar los dos objetos en uno nuevo usando spread
      const newObjecte = { ...objecte1, ...objecte2 };
      
      console.log(newObjecte);
      
    
    
    
    
}

