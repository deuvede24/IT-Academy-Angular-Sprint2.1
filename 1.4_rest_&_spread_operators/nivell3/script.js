/* Exercici 5
Spread en Funcions: Crea una funció que accepti tres arguments. 
Després, crea una array amb tres elements i crida la funció utilitzant 
l'operador spread amb aquesta array.*/

function tresElementos(a1,a2,a3){
console.log(a1,a2,a3)
}

function mainex5(){
    const array = ["Sandra", "Roberts", "President"]
    tresElementos(...array);
}


/*Exercici 6
Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. 
Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou.*/

function mainex6(){
    //Crear dos objetos con propiedades diferentes
    const objecte1 = {
        nombre: "Sandra",
        edad: 30
      };
      
      const objecte2 = {
        ciudad: "Barcelona",
        profesion: "Ingeniero"
      };
      
      // Fusionar los dos objetos en uno nuevo usando spread
      const newObjecte = { ...objecte1, ...objecte2 };
      
      console.log(newObjecte);
      
    
    
    
    
}

