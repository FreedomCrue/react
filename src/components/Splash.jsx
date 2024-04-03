import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../logo.svg";
import { Button, Card, Toast, ToastContainer } from "react-bootstrap";
import { useEffect, useState } from "react";

const Splash = () => {
  const animationState = useSelector((state) => state.animation);
  const [toast, setToast] = useState(false);
  const { splash, flicker } = animationState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setToast(true);
    }, 3500);

    return () => clearTimeout(identifier);
  }, [toast]);

  return (
    <>
      <div id="spinner">
        <motion.img
          src={logo}
          width={96}
          alt="Spinner Logo"
          animate={splash}
          transition={{ repeat: Infinity, ease: "easeInOut", duration: 4 }}
        />
        <motion.p
          className="d-flex align-items-center my-4"
          animate={flicker}
          transition={{ repeat: Infinity, ease: "easeInOut", duration: 1.25 }}
        >
          <span>Прогноз погоды для вашего города</span>
          <FontAwesomeIcon icon={faSearch} className="ms-2" />
        </motion.p>
      </div>
      {}
      <ToastContainer position="bottom-center" style={{ marginBottom: "10vh" }}>
        <Toast show={toast} animation={true}>
          <Toast.Header closeButton={false}>
            <img src={logo} width={24} alt="App logo" />
            <h4 className="ms-2">Страница для погоды</h4>
          </Toast.Header>
          <Toast.Body className="d-flex flex-column">
            <Card.Text className="mb-3">
              Пожалуйста убедитесь, что отслеживание по геолокации включено.
            </Card.Text>
            <Button
              type="button"
              variant="primary"
              className="p-0 py-2 px-4 ms-auto"
              onClick={() => setToast(!toast)}
            >
              Вперед!
            </Button>
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default Splash;
