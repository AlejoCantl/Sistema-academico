import styles from "./eventModal.module.css";
const EventModal = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className={styles.customModalOverlay}>
      <div className={styles.customModal}>
        <h2>{event.title}</h2>
        <p><strong>Inicio:</strong> {new Date(event.start).toLocaleString("es-CO")}</p>
        <p><strong>Fin:</strong> {new Date(event.end).toLocaleString("es-CO")}</p>
        {event.extendedProps?.description && (
          <p><strong>Descripción:</strong> {event.extendedProps.description}</p>
        )}
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default EventModal;
