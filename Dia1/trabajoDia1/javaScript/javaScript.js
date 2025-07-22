// ###############################
// ########### tarea #############
// ###############################

let fecha_actual = new Date();
let listaDeGastos={}

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
        prompt('=============================================\
            \n                  Registrar Nuevo Gasto\
            \n=============================================\
            \nIngrese la información del gasto:\
            ')
       
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

        let guardarGasto=prompt("Ingrese 'S' para guardar o 'C' para cancelar.");
        if (guardarGasto==="S"){
            listaDeGastos.push(nuevoGasto);
            nuevoGasto={}
            fechaFormateada=[]
        }
        else if(guardarGasto==="C"){
            console.log("se ha cancelado el registro")
        }
        else{
            console.log("opcion no valida, vuelva a intentar")
        }
              
    }
    else if (opcion==2){// 2. Listar gastos    
        let opcionListarGastos=parseInt(prompt('=============================================\
            \n               Listar Gastos                 \
            \n=============================================\
            \nSeleccione una opción para filtrar los gastos:\
            \n\
            \n1. Ver todos los gastos\
            \n2. Filtrar por categoría\
            \n3. Filtrar por rango de fechas\
            \n4. Regresar al menú principal\
            \n=============================================\
            '));
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
            elegirCat=prompt('que categira quieres ver?\
                \n1. comida\
                \n2. transporte\
                \n3. entretenimiento\
                \n4. otros\
            ');
            if(elegirCat===1){
                console.log(gastoCatComida)
            }else if(elegirCat===2){
                console.log(gastoCatTransporte)
            }else if(elegirCat===3){
                console.log(gastoCatEntretenimiento)
            }else if(elegirCat===4){
                console.log(gastoCatOtros)
            }
        } 
        else if (opcionListarGastos==3){
            let listasPorFechas= []
            listasPorFechas.push(listaDeGastos)
        }       
        else if (opcionListarGastos==4){
            ("")
        }
    }
    else if (opcion==3){ // 3. Calcular total de gastos
        let opcionCalcularGastos=parseInt(prompt('=============================================\
            \n          Calcular Total de Gastos\
            \n=============================================\
            \nSeleccione el periodo de cálculo:\
            \n1. Calcular total diario\
            \n2. Calcular total semanal\
            \n3. Calcular total mensual\
            \n4. Regresar al menú principal\
            \n=============================================\
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
        let opcionReporteGastos=parseInt(prompt('=============================================\
            \n           Generar Reporte de Gastos\
            \n=============================================\
            \nSeleccione el tipo de reporte:\
            \n\\nReporte diario\
            \nReporte semanal\
            \nReporte mensual\
            \nRegresar al menú principal\
            \n=============================================\
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
            
        let salirONo=prompt("¿Desea salir del programa? (S/N): ");
        if (salirONo==="S"){
            boleanito= false
            ("hasta la proxima");
        }
        else if (salirONo==="N"){
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