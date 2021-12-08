import { useState } from "react";
import { useNavigate } from "react-router";
import useLocations from "../../hooks/useLocations";
import Button from "../Button/Button";
import "./FormCreate.scss";

const FormCreate = () => {
  const initialDataLocation = {
    name: "",
    woman: false,
    type: "",
    street: "",
    postcode: "",
    longitude: 0,
    latitude: 0,
    phonenumber: "",
    capacity: 0,
    timetable: [
      {
        day: "Lunes",
        time: "Abierto 24 horas",
      },
      {
        day: "Martes",
        time: "Abierto 24 horas",
      },
      {
        day: "Miécoles",
        time: "Abierto 24 horas",
      },
      {
        day: "Jueves",
        time: "Abierto 24 horas",
      },
      {
        day: "Viernes",
        time: "Abierto 24 horas",
      },
      {
        day: "Sábado",
        time: "Abierto 24 horas",
      },
      {
        day: "Domingo",
        time: "Abierto 24 horas",
      },
    ],
  };

  const [dataLocation, setDataLocation] = useState(initialDataLocation);
  const newDataLocation = {
    name: dataLocation.name,
    woman: false,
    type: dataLocation.type,
    address: {
      street: dataLocation.street,
      postcode: dataLocation.postcode,
      coordinates: {
        longitude: dataLocation.longitude,
        latitude: dataLocation.latitude,
      },
    },
    phonenumber: dataLocation.phonenumber,
    capacity: dataLocation.capacity,
    timetable: [
      {
        day: "Lunes",
        time: "Abierto 24 horas",
      },
      {
        day: "Martes",
        time: "Abierto 24 horas",
      },
      {
        day: "Miécoles",
        time: "Abierto 24 horas",
      },
      {
        day: "Jueves",
        time: "Abierto 24 horas",
      },
      {
        day: "Viernes",
        time: "Abierto 24 horas",
      },
      {
        day: "Sábado",
        time: "Abierto 24 horas",
      },
      {
        day: "Domingo",
        time: "Abierto 24 horas",
      },
    ],
  };
  const [disableButton, setDisableButton] = useState(true);
  const checkForm = () => {
    if (
      dataLocation.name !== "" &&
      dataLocation.type !== "" &&
      dataLocation.street !== "" &&
      dataLocation.postcode !== "" &&
      dataLocation.longitude !== 0 &&
      dataLocation.latitude !== 0 &&
      dataLocation.phonenumber !== "" &&
      dataLocation.capacity !== 0
    ) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  };
  const { createNewLocation } = useLocations();
  const [feedback, setFeedback] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    createNewLocation(newDataLocation);
    setFeedback(true);
  };

  const changeLocation = (event) => {
    setDataLocation({
      ...dataLocation,
      [event.target.id]: event.target.value,
    });
    checkForm();
  };

  const navigate = useNavigate();
  const goToLocationsPage = () => {
    navigate(`/location/`);
  };

  return (
    <>
      <div className="form-container__location">
        <h2 className="title">crear organización</h2>
        <div>
          <form
            className="form-create"
            noValidate
            autoComplete="off"
            onSubmit={onSubmit}
          >
            <select
              className="form-register__list"
              id="type"
              name="type"
              onChange={changeLocation}
            >
              <option>Escoge el tipo de organización</option>
              <option value="Albergue social">Albergue social</option>
              <option value="Centro de día">Centro de día</option>
              <option value="Comedor social">Comedor social</option>
              <option value="Higiene y salud">Higiene y salud</option>
            </select>

            <label htmlFor="name" className="labels">
              Nombre de la organización
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Localización"
              className="form-register__input"
              required
              onChange={changeLocation}
            ></input>

            <label htmlFor="street" className="labels">
              Introduce la dirección
            </label>
            <input
              type="text"
              id="street"
              placeholder="Calle ejemplo 12, 08030, Barcelona"
              name="street"
              className="form-register__input"
              required
              onChange={changeLocation}
            ></input>
            <label htmlFor="postcode" className="labels">
              Introduce el código postal
            </label>
            <input
              type="text"
              id="postcode"
              placeholder="00000"
              name="postcode"
              className="form-register__input"
              required
              onChange={changeLocation}
            ></input>
            <label htmlFor="longitude" className="labels">
              Introduce la longitud
            </label>
            <input
              type="number"
              id="longitude"
              placeholder="00000"
              name="longitude"
              className="form-register__input"
              required
              onChange={changeLocation}
            ></input>
            <label htmlFor="latitude" className="labels">
              Introduce la latitud
            </label>
            <input
              type="number"
              id="latitude"
              placeholder="00000"
              name="latitude"
              className="form-register__input"
              required
              onChange={changeLocation}
            ></input>
            <label htmlFor="phonenumber" className="labels">
              Teléfono de contacto
            </label>
            <input
              type="text"
              id="phonenumber"
              placeholder="00000"
              name="phonenumber"
              className="form-register__input"
              required
              onChange={changeLocation}
            ></input>
            <label htmlFor="capacity" className="labels">
              Introduce el aforo disponible
            </label>
            <input
              type="number"
              id="capacity"
              placeholder="00000"
              name="capacity"
              className="form-register__input"
              required
              onChange={changeLocation}
            ></input>

            <button
              type="submit"
              className="button-create"
              disabled={disableButton}
            >
              crear
            </button>
          </form>
        </div>
        <Button
          text="+ localizaciones"
          className="button-volver"
          actionOnClick={() => goToLocationsPage()}
        />
        <div>
          <p className="register-message">
            {feedback === true ? "Localización añadida a la base de datos" : ""}
          </p>
        </div>
      </div>
    </>
  );
};

export default FormCreate;
