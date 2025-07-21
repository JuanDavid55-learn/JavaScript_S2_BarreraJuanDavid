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
    let opcion=parseInt(prompt('===========================================================\
    \n                              Simulador de gastos\
    \n==========================================================\
    \nSeleccione una opcion:\
    \n\
    \n1. Registrar gasto\
    \n2. Ver los gastos\
    \n3. Calcular los gastos\
    \n4. Generar reporte de gastos\
    \n5. Sali\
    '))
    if (opcion==1){    // 1. Registrar Nuevos Gastos  
        let opc=parseInt(prompt('=============================================\
        \n       Registrar Nuevo Gasto\
        \n=============================================\
        \nIngrese la información del gasto:\
    '))
       
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
        
        (" ");
        let guardarGasto=prompt("Ingrese 'S' para guardar o 'C' para cancelar.");
        if (guardarGasto=="S"){
            listaDeGastos.push(nuevoGasto);
            guardarJSON(listaDeGastos);
            nuevoGasto={}
            fechaFormateada=[]
            ("");
            ("");
        }
        else if(guardarGasto=="C"){
            ("=============================================");
            ("");
            ("");
        }
        else{
            ("opcion no valida, vuelva a Intentar");
        }
              
    }
    else if (opcion==2){// 2. Listar gastos
        ("");
        ("");
        ("=============================================");
        ("               Listar Gastos                 ");
        ("=============================================");
        ("Seleccione una opción para filtrar los gastos:");
        (" ");
        ("1. Ver todos los gastos");
        ("2. Filtrar por categoría");
        ("3. Filtrar por rango de fechas");
        ("4. Regresar al menú principal");
        ("=============================================");
        let opcionListarGastos=parseInt(prompt("que desea hacer?"));
        
        if (opcionListarGastos==1){
           (listaDeGastos);
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
            ("comida:");        
            (gastoCatComida);
            ("");
            ("transporte:");
            (gastoCatTransporte);
            ("");
            ("entretenimiento:");
            (gastoCatEntretenimiento);
            ("");
            ("otros:");
            (gastoCatOtros);
        } 
        else if (opcionListarGastos==3){
            let listasPorFechas=[]
            listasPorFechas
            (listasPorFechas)
        }       
        else if (opcionListarGastos==4){
            ("")
        }
    }
    else if (opcion==3){ // 3. Calcular total de gastos
        ("");
        ("");
        ("=============================================");
        ("        Calcular Total de Gastos             ");     
        ("=============================================");
        ("Seleccione el periodo de cálculo: ");
        (" ");
        ("1. Calcular total diario");
        ("2. Calcular total semanal");
        ("3. Calcular total mensual");
        ("4. Regresar al menú principal");
        ("=============================================");
        let opcionCalcularGastos=parseInt(prompt("que desea hacer?"));
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
        ("");
        ("");
        ("=============================================");
        ("       Generar Reporte de Gastos             ");
        ("=============================================");
        ("Seleccione el tipo de reporte: ");
        (" ");
        ("1. Reporte diario");
        ("2. Reporte semanal");
        ("3. Reporte mensual");
        ("4. Regresar al menú principal");
        ("=============================================");
        let opcionReporteGastos=parseInt(prompt("que desea hacer?"));
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
            
        let salirONo=prompt("¿Desea salir del programa? (S/N): ");
        if (salirONo=="S"){
            boleanito= false
            ("hasta la proxima");
        }
        else if (salirONo=="N"){
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