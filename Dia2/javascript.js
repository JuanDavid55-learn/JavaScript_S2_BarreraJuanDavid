// ####################################
// ############   QUIZ    #############
// ####################################

let fecha_actual = new Date();
let jsonIngradientes=[
    {
        "nombre": "Pan",
        "descripcion": "Pan de hamburguesa clásico",
        "precio": 2.5,
        "stock": 500
    },
    {
        "nombre": "Carne de res",
        "descripcion": "Carne de res jugosa y sabrosa",
        "precio": 8,
        "stock": 300
    },
    {
        "nombre": "Queso cheddar",
        "descripcion": "Queso cheddar derretido",
        "precio": 1.5,
        "stock": 200
    }
]
let jsonCategorias=[
    {
        "nombre": "Clásica",
        "descripcion": "Hamburguesas clásicas y sabrosas"
    },
    {
        "nombre": "Vegetariana",
        "descripcion": "Hamburguesas sin carne, perfectas para vegetarianos"
    },
    {
        "nombre": "Gourmet",
        "descripcion": "Hamburguesas gourmet con ingredientes premium"
    }
]
let jsonHamburgesas=[
    {
        "nombre": "Clásica",
        "categoria": "Clásica",
        "ingredientes": ["Pan", "Carne de res", "Queso cheddar", "Lechuga", "Tomate", "Cebolla", "Mayonesa", "Ketchup"],
        "precio": 10,
        "chef": "ChefA"
    },
    {
        "nombre": "Vegetariana",
        "categoria": "Vegetariana",
        "ingredientes": ["Pan integral", "Hamburguesa de lentejas", "Queso suizo", "Espinacas", "Cebolla morada", "Aguacate", "Mayonesa vegana"],
        "precio": 8,
        "chef": "ChefB"
    },
    {
        "nombre": "Doble Carne",
        "categoria": "Gourmet",
        "ingredientes": ["Pan de sésamo", "Doble carne de res", "Queso cheddar", "Bacon", "Lechuga", "Cebolla caramelizada", "Salsa BBQ"],
        "precio": 12,
        "chef": "ChefC"
    }
]
let jsonChesfs=[
    {
        "nombre": "ChefA",
        "especialidad": "Carnes"
    },
    {
        "nombre": "ChefB",
        "especialidad": "Cocina Vegetariana"
    },
    {
        "nombre": "ChefC",
        "especialidad": "Gourmet"
    }
]
let lasCategoriasExistentes=[
    "Clásica",
    "Vegetariana",
    "Gourmet"
]

let boleanito=true
while(boleanito==true){
    opcMenuPrincipal=prompt(`
    =======================================
    MENU PRINCIPAL
    =======================================
    1. ver opciones de ingredientes
    2. ver opciones de categorias
    3. ver opciones de hamburguesas
    4. ver opciones de chefs
    5. ver consultas frecuenetes
    6. salir del programa
    =======================================
    que desea hacer? (1-6)`);
    if(opcMenuPrincipal==1){
        opcMenuIngr=prompt(`
        =======================================
        MENU DE INGREDIENTES
        =======================================
        1. registrar nuevo ingrediente
        2. ver todos los ingredientes
        3. eliminar del registro
        4. salir al menu principal
        =======================================
        que desea hacer? (1-4)`);
        if(opcMenuIngr==1){
            let nombreIngrediente=prompt("Ingrese el nombre del ingrediente:");
            let descripcionIngrediente=prompt("Ingrese la descripción del ingrediente:");
            let precioIngrediente=parseFloat(prompt("Ingrese el precio del ingrediente:"));
            let stockIngrediente=parseInt(prompt("Ingrese el stock del ingrediente:"));
        
            nuevoIngrediente = {
                "nombre": nombreIngrediente,
                "descripcion": descripcionIngrediente,
                "precio": precioIngrediente,
                "stock": stockIngrediente
            };
            jsonIngradientes.push(nuevoIngrediente)
            nuevoIngrediente={}         
            alert("Ingrediente registrado exitosamente!"); 
        }
        else if (opcMenuIngr==2){       
            alert(JSON.stringify(jsonIngradientes)); 
        } 
        else if (opcMenuIngr==3){    
            let ingredienteEliminar = prompt("Ingrese el nombre del ingrediente que desea eliminar:");    
            let eliminarIng = jsonIngradientes.findIndex(ingrediente => ingrediente.nombre === ingredienteEliminar);     
            if (eliminarIng !== -1) {     
                jsonIngradientes.splice(eliminarIng, 1);    
                alert("Ingrediente eliminado exitosamente.");    
            } 
            else {      
                alert("Ingrediente no encontrado.");      
            }  
        }  
        else if (opcMenuIngr==4){   
            alert("Saliendo al menú principal...");   
        }
        else{
            alert("Opción no válida. Por favor, intente de nuevo.");
        }
    }
    else if(opcMenuPrincipal==2){
        opcMenuCat=prompt(`
        =======================================
        MENU DE CATEGORIAS
        =======================================
        1. registrar nueva categoria
        2. ver todas las categorias
        3. ver contenido de una categoria
        4. eliminar del registro
        5. salir al menu principal
        =======================================
        que desea hacer? (1-5)`);
        if(opcMenuCat==1){
            let nombreCategoria=prompt("Ingrese el nombre de la categoría:");
            let descripcionCategoria=prompt("Ingrese la descripción de la categoría:");
        
            nuevaCategoria = {
                "nombre": nombreCategoria,
                "descripcion": descripcionCategoria
            };
            jsonCategorias.push(nuevaCategoria);
            lasCategoriasExistentes.push(nombreCategoria);
            nuevaCategoria={}         
            alert("Categoría registrada exitosamente!"); 
        }
        else if (opcMenuCat==2){       
            alert(JSON.stringify(jsonCategorias)); 
        }
        else if (opcMenuCat==3){
            alert(JSON.stringify(lasCategoriasExistentes));
            let categoriaVer = prompt(`que categoria desea ver?`);    
            let verCat = jsonCategorias.find(categoria => categoria.nombre === categoriaVer);     
            if (verCat) {     
                alert(JSON.stringify(verCat));    
            } 
            else {      
                alert("Categoría no encontrada.");      
            }
        }
        else if (opcMenuCat==4){   
            let categoriaEliminar = prompt("Ingrese el nombre de la categoría que desea eliminar:");
            let eliminarCat = jsonCategorias.findIndex(categoria => categoria.nombre === categoriaEliminar);     
            if (eliminarCat !== -1) {     
                jsonCategorias.splice(eliminarCat, 1);    
                alert("Categoría eliminada exitosamente.");    
            } 
            else {      
                alert("Categoría no encontrada.");      
            }  
        }  
        else if (opcMenuCat==5){   
            alert("Saliendo al menú principal...");   
        }
        else{
            alert("Opción no válida. Por favor, intente de nuevo.");
        }
    }
    else if(opcMenuPrincipal==3){
        opcMenuHam=prompt(`
        =======================================
        MENU DE HAMBURGUESAS
        =======================================
        1. registrar nueva hamburguesa
        2. ver menu de hamburguesas
        3. eliminar del registro
        4. salir al menu principal
        =======================================
        que desea hacer? (1-4)`);
        if(opcMenuHam==1){

            let nombreHamburguesa=prompt("Ingrese el nombre de la hamburguesa:");
            let categoriaHamburguesa=prompt("Ingrese la categoría de la hamburguesa:");
            let ingredientesHamburguesa=prompt("Ingrese los ingredientes de la hamburguesa (separados por comas):").split(",");
            let precioHamburguesa=parseFloat(prompt("Ingrese el precio de la hamburguesa:"));
            let chefHamburguesa=prompt("Ingrese el nombre del chef que preparó la hamburguesa:");
        
            nuevaHamburgesa = {
                "nombre": nombreHamburguesa,
                "categoria": categoriaHamburguesa,
                "ingredientes": ingredientesHamburguesa,
                "precio": precioHamburguesa,
                "chef": chefHamburguesa
            };
            jsonHamburgesas.push(nuevaHamburgesa)
            nuevaHamburgesa={}           
            alert("Hamburguesa registrada exitosamente!"); 
        }
        else if (opcMenuHam==2){       
            alert(JSON.stringify(jsonHamburgesas)); 
        } 
        else if (opcMenuHam==3){    
            let hamburguesaEliminar = prompt("Ingrese el nombre de la hamburguesa que desea eliminar:");    
            let eliminarHam = jsonHamburgesas.findIndex(hamburguesa => hamburguesa.nombre === hamburguesaEliminar);     
            if (eliminarHam !== -1) {     
                jsonHamburgesas.splice(eliminarHam, 1);    
                alert("Hamburguesa eliminada exitosamente.");    
            } 
            else {      
                alert("Hamburguesa no encontrada.");      
            }  
        }  
        else if (opcMenuHam==4){   
            alert("Saliendo al menú principal...");   
        }
        else{
            alert("Opción no válida. Por favor, intente de nuevo.");
        }
    }
    else if(opcMenuPrincipal==4){
        opcMenuChef=prompt(`
        =======================================
        MENU DE CHEFS
        =======================================
        1. registrar nuevo chef
        2. ver todos los chefs
        3. eliminar del registro
        4. salir al menu principal
        =======================================
        que desea hacer? (1-4)`);
        if(opcMenuChef==1){
            let nombreChef=prompt("Ingrese el nombre del chef:");
            let especialidadChef=prompt("Ingrese la especialidad del chef:");
        
            nuevoChef = {
                "nombre": nombreChef,
                "especialidad": especialidadChef
            };
            jsonChesfs.push(nuevoChef)
            nuevoChef={}         
            alert("Chef registrado exitosamente!"); 
        }
        else if (opcMenuChef==2){       
            alert(JSON.stringify(jsonChesfs)); 
        } 
        else if (opcMenuChef==3){    
            let chefEliminar = prompt("Ingrese el nombre del chef que desea eliminar:");    
            let eliminarChef = jsonChesfs.findIndex(chef => chef.nombre === chefEliminar);     
            if (eliminarChef !== -1) {     
                jsonChesfs.splice(eliminarChef, 1);    
                alert("Chef eliminado exitosamente.");    
            } 
            else {      
                alert("Chef no encontrado.");      
            }  
        }  
        else if (opcMenuChef==4){   
            alert("Saliendo al menú principal...");   
        }
        else{
            alert("Opción no válida. Por favor, intente de nuevo.");
        }
    }
    else if(opcMenuPrincipal==5){
        alert(`
        =======================================
        CONSULTAS FRECUENTES
        =======================================
        1. Encontrar todos los ingredientes con stock menor a 400.
        2. Encontrar todas las hamburguesas de la categoría “Vegetariana”.
        3. Encontrar todos los chefs que se especializan en “Carnes”.
        4. Aumentar en 1.5 el precio de todos los ingredientes.
        5. Encontrar todas las hamburguesas preparadas por “ChefB”.
        6. Encontrar el nombre y la descripción de todas las categorías.
        7. Eliminar todos los ingredientes que tengan un stock de 0.
        8. Agregar un nuevo ingrediente a la hamburguesa “Clásica”.
        9. Encontrar todas las hamburguesas que contienen “Pan integral” como ingrediente.
        10. Cambiar la especialidad del “ChefC” a “Cocina Internacional”.
        11. Encontrar el ingrediente más caro.
        12. Encontrar las hamburguesas que no contienen “Queso cheddar” como ingrediente.
        13. Incrementar el stock de “Pan” en 100 unidades.
        14. Encontrar todos los ingredientes que tienen una descripción que contiene la palabra “clásico”.
        15. Listar las hamburguesas cuyo precio es menor o igual a $9.
        16. Contar cuántos chefs hay en la base de datos.
        17. Encontrar todas las categorías que contienen la palabra “gourmet” en su descripción.
        18. Eliminar las hamburguesas que contienen menos de 5 ingredientes.
        19. Agregar un nuevo chef a la colección con una especialidad en “Cocina Asiática”.
        20. Listar las hamburguesas en orden ascendente según su precio.
        21. Encontrar todos los ingredientes cuyo precio sea entre $2 y $5.
        22. Actualizar la descripción del “Pan” a “Pan fresco y crujiente”.
        23. Encontrar todas las hamburguesas que contienen “Tomate” o “Lechuga” como ingredientes.
        24. Listar todos los chefs excepto “ChefA”.
        25. Incrementar en $2 el precio de todas las hamburguesas de la categoría “Gourmet”.
        26. Listar todos los ingredientes en orden alfabético.
        27. Encontrar la hamburguesa más cara.
        28. Agregar “Pepinillos” a todas las hamburguesas de la categoría “Clásica”.
        29. Eliminar todos los chefs que tienen una especialidad en “Cocina Vegetariana”.
        30. Encontrar todas las hamburguesas que contienen exactamente 7 ingredientes.
        31. Encontrar la hamburguesa más cara que fue preparada por un chef especializado en “Gourmet”.
        32. Listar todos los ingredientes junto con el número de hamburguesas que los contienen.
        33. Listar los chefs junto con el número de hamburguesas que han preparado.
        34. Encuentra la categoría con la mayor cantidad de hamburguesas.
        35. Listar todos los chefs y el costo total de ingredientes de todas las hamburguesas que han preparado.
        36. Encontrar todos los ingredientes que no están en ninguna hamburguesa.
        37. Listar todas las hamburguesas con su descripción de categoría.
        38. Encuentra el chef que ha preparado hamburguesas con el mayor número de ingredientes en total.
        39. Encontrar el precio promedio de las hamburguesas en cada categoría.
        40. Listar los chefs y la hamburguesa más cara que han preparado.

        
        =======================================
        `);
    }
    else if(opcMenuPrincipal==6){
        alert("Saliendo del programa...");
        boleanito=false;
    }
    else{
        alert("Opción no válida. Por favor, intente de nuevo.");
    }
}
