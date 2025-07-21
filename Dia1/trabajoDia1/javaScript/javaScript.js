// ###############################
// ########### tarea #############
// ###############################

//from funciones import *
//from tabulate import tabulate
let fecha_actual = new Date();

let boleanito= true
while(boleanito==true){

    let listaDeGastos = abrirJSON()
    listaDeGastos=hallarFecha()
    
    // Menú Principal del Simulador de Gasto Diario
    console.log("=============================================");
    console.log("         Simulador de Gasto Diario           ");
    console.log("=============================================");
    console.log("seleccione una opción:");
    console.log("");
    console.log("1. Registrar nuevo gasto");
    console.log("2. Listar gastos");
    console.log("3. Calcular total de gastos");
    console.log("4. Generar reporte de gastos");
    console.log("5. Salir");
    console.log("=============================================");
    let opcion=parseInt(prompt("que desea hacer?: "));
    if (opcion==1){    // 1. Registrar Nuevos Gastos  
        console.log(" ");
        console.log(" ");
        console.log("=============================================");
        console.log("        Registrar Nuevo Gasto               ");
        console.log("=============================================");
        console.log("Ingrese la información del gasto:");
        console.log(" ");
       
        let registrar_hora=(fecha_actual.getHours() % 12 || 12);
        let registrar_dia=(fecha_actual.getDate());
        let registrar_mes=(fecha_actual.getMonth()+1);
        let registrar_año=(fecha_actual.getFullYear());
        let fechaFormateada=[];
        fechaFormateada.push(registrar_hora,registrar_dia,registrar_mes,registrar_año)
        let montoGasto=parseInt(prompt("- Monto del gasto: "));
        let categoriaGasto=prompt("- Categoría (ej. comida, transporte, entretenimiento, otros):");
        let descripcionGasto=prompt("- Descripción (opcional):");
        let nuevoGasto={
            "fecha":fechaFormateada,
            "monto del gasto":montoGasto,
            "categoria":categoriaGasto,
            "Descripcion":descripcionGasto
        }
        
        console.log(" ");
        let guardarGasto=prompt("Ingrese 'S' para guardar o 'C' para cancelar.");
        if (guardarGasto=="S"){
            listaDeGastos.push(nuevoGasto);
            guardarJSON(listaDeGastos);
            nuevoGasto={}
            fechaFormateada=[]
            console.log("");
            console.log("");
        }
        else if(guardarGasto=="C"){
            console.log("=============================================");
            console.log("");
            console.log("");
        }
        else{
            console.log("opcion no valida, vuelva a Intentar");
        }
              
    }
    else if (opcion==2){// 2. Listar gastos
        console.log("");
        console.log("");
        console.log("=============================================");
        console.log("               Listar Gastos                 ");
        console.log("=============================================");
        console.log("Seleccione una opción para filtrar los gastos:");
        console.log(" ");
        console.log("1. Ver todos los gastos");
        console.log("2. Filtrar por categoría");
        console.log("3. Filtrar por rango de fechas");
        console.log("4. Regresar al menú principal");
        console.log("=============================================");
        let opcionListarGastos=parseInt(prompt("que desea hacer?"));
        
        if (opcionListarGastos==1){
           console.log(listaDeGastos);
        }
        else if (opcionListarGastos==2){
            let gastoCatComida=[]
            let gastoCatTransporte=[]
            let gastoCatEntretenimiento=[]
            let gastoCatOtros=[]
            for (let i=0; i < listaDeGastos.length; i=i+1){
                if (listaDeGastos[i]["categoria"]=="comida"){
                        gastoCatComida.push(listaDeGastos[i])
                }
                else if (listaDeGastos[i]["categoria"]=="transporte"){
                        gastoCatTransporte.push(listaDeGastos[i])
                }
                else if (listaDeGastos[i]["categoria"]=="entretenimiento"){
                        gastoCatEntretenimiento.push(listaDeGastos[i])
                }
                else if (listaDeGastos[i]["categoria"]=="otros"){
                        gastoCatOtros.push(listaDeGastos[i])
                }
            }
            console.log("comida:");        
            console.log(gastoCatComida);
            console.log("");
            console.log("transporte:");
            console.log(gastoCatTransporte);
            console.log("");
            console.log("entretenimiento:");
            console.log(gastoCatEntretenimiento);
            console.log("");
            console.log("otros:");
            console.log(gastoCatOtros);
        } 
        else if (opcionListarGastos==3){
            let listasPorFechas=[]
            listasPorFechas
            console.log(listasPorFechas)
        }       
        else if (opcionListarGastos==4){
            console.log("")
        }
    }
    else if (opcion==3){ // 3. Calcular total de gastos
        console.log("");
        console.log("");
        console.log("=============================================");
        console.log("        Calcular Total de Gastos             ");     
        console.log("=============================================");
        console.log("Seleccione el periodo de cálculo: ");
        console.log(" ");
        console.log("1. Calcular total diario");
        console.log("2. Calcular total semanal");
        console.log("3. Calcular total mensual");
        console.log("4. Regresar al menú principal");
        console.log("=============================================");
        let opcionCalcularGastos=parseInt(prompt("que desea hacer?"));
        if (opcionCalcularGastos==1){
            console.log
        }
        else if (opcionCalcularGastos==2){
            console.log // falta terminar
        }
        else if(opcionCalcularGastos==3){
            console.log // falta terminar
        }
        else if(opcionCalcularGastos==4){
            console.log("")
        }
    }
    else if (opcion==4){ // 4. Generar reporte de gastos
        console.log("");
        console.log("");
        console.log("=============================================");
        console.log("       Generar Reporte de Gastos             ");
        console.log("=============================================");
        console.log("Seleccione el tipo de reporte: ");
        console.log(" ");
        console.log("1. Reporte diario");
        console.log("2. Reporte semanal");
        console.log("3. Reporte mensual");
        console.log("4. Regresar al menú principal");
        console.log("=============================================");
        let opcionReporteGastos=parseInt(prompt("que desea hacer?"));
        if (opcionReporteGastos==1){
             console.log // falta terminar
        }
        else if (opcionReporteGastos==2){
             console.log // falta terminar
        }
        else if(opcionReporteGastos==3){
             console.log // falta terminar
        }
        else if(opcionReporteGastos==4){
             console.log("");
        }
    }
    else if (opcion==5){ // 5. Salir
            
        let salirONo=prompt("¿Desea salir del programa? (S/N): ");
        if (salirONo=="S"){
            boleanito= false
            console.log("hasta la proxima");
        }
        else if (salirONo=="N"){
            console.log(" ");
        }
        else{
            console.log("opcion no valida, vuelva a Intentar");
        }
    }
    else{
        console.log("vuelva a elegir una opcion");
    }
}

// Desarrollado por : Juan David Barrera Torres - T.I - 1.097.101.967