import { useState } from "react";
import Swal from "sweetalert2";

function FormularioPropina (){
    const [monto, setMonto] = useState('');
    const [porcentaje, setPorcentaje] = useState(0.15);

    const manejoCalcular = () =>{
        const totalCuenta = parseFloat(monto); 
        if(isNaN(totalCuenta) || totalCuenta <=0){
            Swal.fire({
                text: 'Por favor ingresa un monto valido de la cuenta',
                icon: "warning"
            });
            return;
        }
    const propina = totalCuenta * porcentaje;

    const totalFinal = totalCuenta + propina;
    Swal.fire({
        text: `Cuenta: $${totalCuenta.toFixed(2)}\n` + `Propina (${(porcentaje * 100).toFixed(0)}%): $${propina.toFixed(2)}\n`
        + `Total a pagar: $${totalFinal.toFixed(2)}`, 

        icon: "success"
    });
       

    }
} 

export default Usecalculadora