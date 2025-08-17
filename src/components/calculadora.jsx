import Usecalculadora from "../hooks/Usecalculadora"

const Calculadora = () =>{
  const {
    monto,
    setMonto,
    porcentaje,
    setPorcentaje,
    manejoCalcular,
  } = Usecalculadora()
  

    return(
       <div style={{maxWidth: 400, margin: '0 auto', padding: 20}}>
        <h2>Calculadora de propinas</h2> 

       <label>Monto de la cuenta: </label>
       <input type="text" id="monto" value={monto} onChange={(e) => setMonto(e.target.value)} 
       placeholder="Ingresar monto" style={{marginLeft: 8, padding: '6px', width: '180px'}}/> 

       <div style={{marginBottom: 10}}>
     <button onClick={() => setPorcentaje(0.10)} style={{marginLeft: 8, padding: '6px 10px', background: porcentaje === 0.10? '#4caf50': '#e0e0e0',  border: 'none', borderRadius: 4, cursor: 'pointer' }}>
        10%
      

     </button> 

     <button onClick={() => setPorcentaje(0.15)}
        style={{marginLeft: 8, padding: '6px 10px', background: porcentaje === 0.15? '#4caf50' : 'e0e0e0', border: 'none', borderRadius: 4, cursor: 'pointer',}}
        
        
        >
       15% 
     </button>
       <button onClick={() => setPorcentaje(0.20)}
        style={{marginLeft: 8, padding:'6px 10px', background: porcentaje === 0.20? '4caf50' : 'e0e0e0', border: 'none', borderRadius: 4, cursor: 'pointer'}}
        
        
        >
        20%
       </button>
    
       </div>
       <button onClick={manejoCalcular}   
       style={{padding: '10px 14px', background: '#1976d2', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer'}}
       
       
       > Calcular propina y total
      </button>
 </div> 

 



 
        
    )
} 

export default Calculadora