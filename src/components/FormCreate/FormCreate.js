import { useState } from "react";
import { useNavigate } from "react-router";
import useLocations from "../../hooks/useLocations";
import Button from "../Button/Button";

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
  };

  const navigate = useNavigate();
  const goToLocationsPage = () => {
    navigate(`/location/`);
  };
  return (
    <>
      <h2 className="title">añadir</h2>
      <div>
        <form
          className="form-create"
          noValidate
          autoComplete="off"
          onSubmit={onSubmit}
        >
          <label htmlFor="type" className="labels">
            Introduce el nombre de la localización
            <input
              type="text"
              id="type"
              name="type"
              placeholder="Comedor social"
              className="form-register__input"
              required
              onChange={changeLocation}
            ></input>
          </label>

          <label htmlFor="name" className="labels">
            Introduce el nombre de la localización
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Localización"
              className="form-register__input"
              required
              onChange={changeLocation}
            ></input>
          </label>

          <label htmlFor="address.street" className="labels">
            Introduce la dirección
            <input
              type="text"
              id="street"
              placeholder="Calle ejemplo 12, 08030, Barcelona"
              name="street"
              className="form-register__input"
              required
              onChange={changeLocation}
            ></input>
          </label>
          <label htmlFor="postcode" className="labels">
            Introduce el código postal
            <input
              type="text"
              id="postcode"
              placeholder="00000"
              name="postcode"
              className="form-register__input"
              required
              onChange={changeLocation}
            ></input>
          </label>
          <label htmlFor="longitude" className="labels">
            Coordenadas - Introduce la longitud
            <input
              type="number"
              id="longitude"
              placeholder="00000"
              name="longitude"
              className="form-register__input"
              required
              onChange={changeLocation}
            ></input>
          </label>
          <label htmlFor="latitude" className="labels">
            Coordenadas - Introduce la latitud
            <input
              type="number"
              id="latitude"
              placeholder="00000"
              name="latitude"
              className="form-register__input"
              required
              onChange={changeLocation}
            ></input>
          </label>
          <label htmlFor="phonenumber" className="labels">
            Teléfono de contacto
            <input
              type="text"
              id="phonenumber"
              placeholder="00000"
              name="phonenumber"
              className="form-register__input"
              required
              onChange={changeLocation}
            ></input>
          </label>
          <label htmlFor="capacity" className="labels">
            Introduce el aforo disponible
            <input
              type="number"
              id="capacity"
              placeholder="00000"
              name="capacity"
              className="form-register__input"
              required
              onChange={changeLocation}
            ></input>
          </label>
          <button type="submit" className="button-login">
            crear
          </button>
        </form>
      </div>
      <div>
        <Button
          text="+ localizaciones"
          className="button-volver"
          actionOnClick={() => goToLocationsPage()}
        />
        <p className="register-message">
          {feedback === true ? "Localización añadida a la base de datos" : ""}
        </p>
      </div>
    </>
  );
};

export default FormCreate;
