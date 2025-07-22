// ###############################
// ########### tarea #############
// ###############################

let fecha_actual = new Date();
let listaDeGastos=[
    {
        "fecha": "2025-07-21",
        "monto del gasto": 35.50,
        "categoria": "comida",
        "Descripcion": "Almuerzo en restaurante"
    },
    {
        "fecha": "2025-07-20",
        "monto del gasto": 12.00,
        "categoria": "transporte",
        "Descripcion": "Taxi al trabajo"
    },
      {
        "fecha": "2025-07-19",
        "monto del gasto": 89.99,
        "categoria": "entretenimiento",
        "Descripcion": "Entrada al cine y snacks"
      },
      {
        "fecha": "2025-07-18",
        "monto del gasto": 22.30,
        "categoria": "comida",
        "Descripcion": "Compra de frutas y verduras"
      },
      {
        "fecha": "2025-07-17",
        "monto del gasto": 8.00,
        "categoria": "comida",
        "Descripcion": "Desayuno en cafetería"
      },
      {
        "fecha": "2025-07-16",
        "monto del gasto": 150.00,
        "categoria": "otros",
        "Descripcion": "Consulta médica"
      },
      {
        "fecha": "2025-07-15",
        "monto del gasto": 59.99,
        "categoria": "entretenimiento",
        "Descripcion": "Suscripción a servicio de streaming"
      },
      {
        "fecha": "2025-07-14",
        "monto del gasto": 25.00,
        "categoria": "otros",
        "Descripcion": "Regalo de cumpleaños"
      },
      {
        "fecha": "2025-07-13",
        "monto del gasto": 110.75,
        "categoria": "otros",
        "Descripcion": "Compra de zapatos"
      },
      {
        "fecha": "2025-07-12",
        "monto del gasto": 5.50,
        "categoria": "transporte",
        "Descripcion": "Boleto de metro"
      }
]

let boleanito= true
while(boleanito==true){
    
    // Menú Principal del Simulador de Gasto Diario
    let opcion=parseInt(prompt('=====================================\
        \n                Simulador de gastos\
        \n=====================================\
        \nSeleccione una opcion:\
        \n\
        \n1. Registrar gasto\
        \n2. Ver los gastos\
        \n3. Calcular los gastos\
        \n4. Generar reporte de gastos\
        \n5. Salir\
    '))
    if (opcion==1){    // 1. Registrar Nuevos Gastos  
        alert(`=========================================
            Registrar Nuevo Gasto
            ==========================================
        Ingrese la información del gasto:`)
        let registrar_dia=(fecha_actual.getDate());
        let registrar_mes=(fecha_actual.getMonth()+1);
        let registrar_año=(fecha_actual.getFullYear());
        let fechaFormateada=[];
        fechaFormateada.push(registrar_año,registrar_mes,registrar_dia)
        let montoGasto=parseInt(prompt("- Monto del gasto: "));
        let categoriaGasto=prompt("- Categoría (ej. comida, transporte, entretenimiento, otros):");
        let descripcionGasto=prompt("- Descripción (opcional):");
        let nuevoGasto={
            "fecha":fechaFormateada,
            "monto del gasto":montoGasto,
            "categoria":categoriaGasto,
            "Descripcion":descripcionGasto
        }

        let guardarGasto=prompt("Ingrese 's' para guardar o 'c' para cancelar.");
        if (guardarGasto==="s"){
            listaDeGastos.push(nuevoGasto)
            nuevoGasto={}
            fechaFormateada=[]
        }
        else if(guardarGasto==="c"){
            alert("se ha cancelado el registro")
        }
        else{
            alert("opcion no valida, vuelva a intentar")
        }
              
    }
    else if (opcion==2){// 2. Listar gastos    
        let opcionListarGastos=parseInt(prompt('==========================================\
            \n               Listar Gastos                 \
            \n==========================================\
            \nSeleccione una opción para filtrar los gastos:\
            \n\
            \n1. Ver todos los gastos\
            \n2. Filtrar por categoría\
            \n3. Filtrar por rango de fechas\
            \n4. Regresar al menú principal\
            \n==========================================\
            '));
        if (opcionListarGastos==1){
            alert(JSON.stringify(listaDeGastos));
        }
        
        else if (opcionListarGastos==2){
            elegirCat=prompt('que categira quieres ver?\
                \ncomida\
                \ntransporte\
                \nentretenimiento\
                \notros\
            ');
            let filtroCat= listaDeGastos.filter((listaDeGastos) => listaDeGastos.categoria == elegirCat)
            alert(JSON.stringify(filtroCat))
        } 
        else if (opcionListarGastos==3){
            quefecha = prompt('Dime la fecha que quieres buscar : Año-Mes-Dia')
            let filtrofecha= listaDeGastos.filter((listaDeGastos) => listaDeGastos.fecha === quefecha)
            alert(JSON.stringify(filtrofecha));
        }       
        else if (opcionListarGastos==4){
            console.log("")
        }
    }
    else if (opcion==3){ // 3. Calcular total de gastos
        let opcionCalcularGastos=parseInt(prompt('==========================================\
            \n          Calcular Total de Gastos\
            \n==========================================\
            \nSeleccione el periodo de cálculo:\
            \n1. Calcular total diario\
            \n2. Calcular total semanal\
            \n3. Calcular total mensual\
            \n4. Regresar al menú principal\
            \n==========================================\
            '));
        if (opcionCalcularGastos==1){
            
        }
        else if (opcionCalcularGastos==2){
             // falta terminar
        }
        else if(opcionCalcularGastos==3){
             // falta terminar
        }
        else if(opcionCalcularGastos==4){
            ("")
        }
    }
    else if (opcion==4){ // 4. Generar reporte de gastos
        let opcionReporteGastos=parseInt(prompt('==========================================\
            \n           Generar Reporte de Gastos\
            \n==========================================\
            \nSeleccione el tipo de reporte:\
            \n\\nReporte diario\
            \nReporte semanal\
            \nReporte mensual\
            \nRegresar al menú principal\
            \n==========================================\
            '));
        if (opcionReporteGastos==1){
              // falta terminar
        }
        else if (opcionReporteGastos==2){
              // falta terminar
        }
        else if(opcionReporteGastos==3){
              // falta terminar
        }
        else if(opcionReporteGastos==4){
             ("");
        }
    }
    else if (opcion==5){ // 5. Salir
            
        let salirONo=prompt("¿Desea salir del programa? (s/n): ");
        if (salirONo==="s"){
            boleanito= false
            ("hasta la proxima");
        }
        else if (salirONo==="n"){
            (" ");
        }
        else{
            ("opcion no valida, vuelva a Intentar");
        }
    }
    else{
        ("vuelva a elegir una opcion");
    }
}

// Desarrollado por : Juan David Barrera Torres - T.I - 1.097.101.967