

export default function Button({ label, color}){
    return(
        <div>
            <button 
            style={{
                backgroundColor: color,
                width: "140px",
                height: "40px",
                color: "white", // texto blanco por defecto
                border: "none",
                borderRadius: "15px",
                cursor: "pointer",
                marginBottom: "20px"
            }}>{label}</button>
        </div>
    )
}