import "./Alert.css"; // Your CSS file for styling the alert

const Alert = ({ message, type, onClose }) => {
  return (
    <div className="home-alert">
      <div className={`alert ${type}`}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Alert;
