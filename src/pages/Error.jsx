import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate, useRouteError } from "react-router-dom";
import Header from "../components/Header";

const geoLocationPermission = () =>
  new Promise((res, rej) =>
    navigator.permissions
      .query({ name: "geolocation" })
      .then((permissionStatus) => res(permissionStatus))
      .catch((permissionStatus) => rej(permissionStatus))
  );

const ErrorPage = () => {
  const [isGeoLocationAllowed, setIsGeoLocationAllowed] = useState(false);

  const error = useRouteError();
  const navigate = useNavigate();

  geoLocationPermission().then(
    (permissionStatus) =>
      (permissionStatus.onchange = (e) =>
        setIsGeoLocationAllowed(
          e.currentTarget.state === "granted" ? true : false
        ))
  );

  useEffect(() => {
    isGeoLocationAllowed && navigate("/");
  }, [isGeoLocationAllowed, navigate]);

  let message = "Что-то пошло не так.";

  if (error.status === 404) message = "Страница не найдена 🙁";

  if (error.code === 1)
    message =
      "Прежде чем использовать приложение, убедитесь что вы включили отслеживание локации.";

  if (error.code === 2) message = "Проверьте сетевое подключение.";

  return (
    <>
      <Container className="px-3">
        <Header />
      </Container>
      <Container
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <img
          src="https://img.icons8.com/fluency/192/null/sad-cloud.png"
          alt="Error Page Icon"
          loading="lazy"
        />
        <div className="text-center" style={{ marginTop: "-100px" }}>
          <span className="fw-bolder" style={{ fontSize: "96px" }}>
            OOPS!
          </span>
          <p className="text-muted" style={{ fontSize: "20px" }}>
            {message}
          </p>
          <Button
            type="button"
            variant="primary"
            className="d-flex align-items-center shadow mx-auto my-4"
            onClick={() => {
              geoLocationPermission().then((permissionStatus) => {
                if (permissionStatus.state === "granted")
                  window.location.reload();
                else alert("Убедитесь что отслеживание по локации включено.");
              });

              navigate("/");
            }}
          >
            <span className="me-2">Посмотрите текущую погоду</span>
            <img
              src="https://img.icons8.com/color-glass/32/null/partly-cloudy-day--v1.png"
              alt="Button Icon"
            />
          </Button>
        </div>
      </Container>
    </>
  );
};

export default ErrorPage;
