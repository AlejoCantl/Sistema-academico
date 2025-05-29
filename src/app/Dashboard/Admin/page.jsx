import Button from "@/app/components/Button";
export default function AdministradorPage() {
  return (
    <div>
      <h1 style={{fontSize:"36px", color:"#2E71BD", textAlign:"center"}}>Gestion de usuarios</h1>
      <label style={{fontSize:"18px", color:"#757575", marginLeft:"50px"}}>Agregar, modificar, eliminar usuarios</label>

      {/* Contenedor que organiza inputs y botones en fila */}
      <div style={{ display: "flex", flexDirection: "row", gap: "40px", marginLeft:"20px", marginTop:"30px" }}>

        {/* Contenedor de inputs */}
        <div style={{ display:"flex", flexWrap:"wrap", gap:"40px", maxWidth:"600px" }}>
          {/* Aquí tus inputs */}
          <div style={{display:"flex", flexDirection:"column", marginBottom:"10px"}}>
            <label style={{marginBottom:"10px"}}>Nombre</label>
            <input type="text" placeholder="Nombre" style={{backgroundColor:"#2E71BD", border:"none", padding:"12px", color:"#fff", outline:"none", borderRadius:"15px", width:"230px"}}/>
          </div>
          {/* ... demás inputs ... */}
          <div style={{display:"flex", flexDirection:"column", marginBottom:"10px"}}>
            <label style={{marginBottom:"10px"}}>Rol</label>
            <select name="select" style={{backgroundColor:"#2E71BD", border:"none", padding:"12px", color:"#fff", outline:"none", borderRadius:"15px", width:"250px"}}>
              <option>Selecciona una opcion</option>
              <option value="value1">Administrador</option>
              <option value="value2">Coordinador</option>
              <option value="value3">Docente</option>
              <option value="value4">Estudiante</option>
            </select>
          </div>
          {/* Los otros selects similares aquí */}
          <div style={{display:"flex", flexDirection:"column", marginBottom:"10px"}}>
            <label style={{marginBottom:"10px"}}>Facultad</label>
            <select name="select" style={{backgroundColor:"#2E71BD", border:"none", padding:"12px", color:"#fff", outline:"none", borderRadius:"15px", width:"250px"}}>
              <option>Selecciona una opcion</option>
              <option value="value1">Facultad de Matematicas</option>
              <option value="value2">Facultad de Licenciatura</option>
              <option value="value3">Facultad de Fisica y Quimica</option>
              <option value="value4">Facultad de ciencias naturales</option>
            </select>
          </div>
          <div style={{display:"flex", flexDirection:"column", marginBottom:"10px"}}>
            <label style={{marginBottom:"10px"}}>Programa</label>
            <select name="select" style={{backgroundColor:"#2E71BD", border:"none", padding:"12px", color:"#fff", outline:"none", borderRadius:"15px", width:"250px"}}>
              <option>Selecciona una opcion</option>
              <option value="value1">Matematicas</option>
              <option value="value2">Español</option>
              <option value="value3">Quimica</option>
              <option value="value4">Fisica</option>
            </select>
          </div>
          <div style={{display:"flex", flexDirection:"column", marginBottom:"10px"}}>
            <label style={{marginBottom:"10px"}}>Estado</label>
            <select name="select" style={{backgroundColor:"#2E71BD", border:"none", padding:"12px", color:"#fff", outline:"none", borderRadius:"15px", width:"250px"}}>
              <option>Selecciona una opcion</option>
              <option value="value1">Activo</option>
              <option value="value2">Inactivo</option>
            </select>
          </div>
        </div>

        {/* Contenedor de botones */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "0" }}>
          <Button label="Agregar" color="#2E71BD" />
          <Button label="Modificar" color="#80B7F5" />
          <Button label="Eliminar" color="#BD3F2E" />
        </div>
      </div>
    </div>
  );
}
