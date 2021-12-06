import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import useLocations from "../../hooks/useLocations";
import Button from "../Button/Button";

const FormUpdate = () => {
  const { updateLocation, location } = useLocations();
  const { id } = useParams();

  const initialDataLocation = {
    name: location.name,
    woman: false,
    type: location.type,
    street: location.address.street,
    postcode: location.address.postcode,
    longitude: location.address.coordinates.longitude,
    latitude: location.address.coordinates.latitude,
    phonenumber: location.phonenumber,
    capacity: location.capacity,
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
  const changeLocation = (event) => {
    setDataLocation({
      ...dataLocation,
      [event.target.id]: event.target.value,
    });
  };

  const navigate = useNavigate();

  const editLocation = (event) => {
    event.preventDefault();
    const newLocation = {
      name: dataLocation.name,
      woman: false,
      type: dataLocation.type,
      address: {
        street: dataLocation.street,
        postcode: dataLocation.postcode,
        coordinates: {
          longitude: +dataLocation.longitude,
          latitude: +dataLocation.latitude,
        },
      },
      phonenumber: dataLocation.phonenumber,
      capacity: +dataLocation.capacity,
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
    updateLocation(newLocation, id);
    navigate("/location");
  };

  const goToLocationsPage = () => {
    navigate("/location");
  };
  return (
    <>
      <h2 className="title">modifica la localización</h2>
      <div>
        <form
          className="form-create"
          noValidate
          autoComplete="off"
          onSubmit={editLocation}
        >
          <select
            className="form-register__list"
            id="type"
            name="type"
            onChange={changeLocation}
          >
            <option>Escoge el tipo de localización</option>
            <option value="Albergue social">Albergue social</option>
            <option value="Centro de día">Centro de día</option>
            <option value="Comedor social">Comedor social</option>
            <option value="Higiene y salud">Higiene y salud</option>
          </select>

          <label htmlFor="name" className="labels">
            Introduce el nombre de la localización
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Localización"
              className="form-register__input"
              required
              value={dataLocation.name}
              onChange={changeLocation}
            ></input>
          </label>

          <label htmlFor="street" className="labels">
            Introduce la dirección
            <input
              type="text"
              id="street"
              placeholder="Calle ejemplo 12, 08030, Barcelona"
              name="street"
              className="form-register__input"
              required
              value={dataLocation.street}
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
              value={dataLocation.postcode}
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
              value={dataLocation.longitude}
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
              value={dataLocation.latitude}
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
              value={dataLocation.phonenumber}
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
              value={dataLocation.capacity}
              onChange={changeLocation}
            ></input>
          </label>
          <button type="submit" className="button-login">
            guardar
          </button>
        </form>
      </div>
      <div>
        <Button
          text="+ localizaciones"
          className="button-volver"
          actionOnClick={() => goToLocationsPage()}
        />
      </div>
    </>
  );
};

export default FormUpdate;
