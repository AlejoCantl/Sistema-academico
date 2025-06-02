import UploadExcel from "@/app/components/calificaciones/UploadExcel";
import Button from "@/app/components/Button";
export default function CalificacionesPage() {
    return (
        <div>
            <h2 style={{ fontSize: "36px", color: "#2E71BD", textAlign: "center" }}>Calificaciones</h2>
            <label style={{ fontSize: "18px", color: "#757575", marginLeft: "50px" }}>Consultar registros de asistencia por materia y fecha</label>

            {/* Contenedor que organiza inputs y botones en fila */}
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "40px",
                marginLeft: "20px",
                marginTop: "30px"
            }}>

                {/* Contenedor de inputs */}
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "40px",
                    maxWidth: "600px"
                }}>


                    <div style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}>
                        <label style={{ marginBottom: "10px" }}>Programa</label>
                        <select name="select" style={{ backgroundColor: "#2E71BD", border: "none", padding: "12px", color: "#fff", outline: "none", borderRadius: "15px", width: "250px" }}>
                            <option>Selecciona una opcion</option>
                            <option value="value1">Matematicas</option>
                            <option value="value2">Español</option>
                            <option value="value3">Quimica</option>
                            <option value="value4">Fisica</option>
                        </select>
                    </div>
                    {/* Los otros selects similares aquí */}
                    <div style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}>
                        <label style={{ marginBottom: "10px" }}>Corte</label>
                        <select name="select" style={{ backgroundColor: "#2E71BD", border: "none", padding: "12px", color: "#fff", outline: "none", borderRadius: "15px", width: "250px" }}>
                            <option>Selecciona una opcion</option>
                            <option value="value1">Corte 1</option>
                            <option value="value2">Corte 2</option>
                            <option value="value3">Corte 3</option>
                        </select>
                    </div>

                    <UploadExcel/>

                    {/* Contenedor de botones */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "35px", marginLeft: "50px" }}>
                        <Button label="Enviar" color="#2E71BD" />

                    </div>
                </div>
            </div>
        </div>
    );
}
