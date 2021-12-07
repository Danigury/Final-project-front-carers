import actionTypes from "../actions/actionTypes";
import locationReducer from "./locationReducer";

describe("Given a locationReducer reducer", () => {
  describe("When it receives a location and a loadCurrentLocation action", () => {
    test("Then it should return the location desired", () => {
      const initialLocationValue = {};
      const locationValue = {
        _id: {
          id: "61a3b944285007fa54226ac6",
        },
        name: "Centre Residencial de Primera Acollida Nou Barris",
        woman: false,
        type: "Centro de día",
        address: {
          street: "Carrer de Marie Curie, 20",
          postcode: "08042",
          coordinates: {
            longitude: 40123,
            latitude: 401654,
          },
        },
        phonenumber: "932760539",
        capacity: 100,
        timetable: [
          {
            day: "Lunes",
            time: "20:00 - 22:00",
            _id: {
              $oid: "61a3b944285007fa54226ac7",
            },
          },
          {
            day: "Martes",
            time: "20:00 - 22:00",
            _id: {
              $oid: "61a3b944285007fa54226ac8",
            },
          },
          {
            day: "Miécoles",
            time: "20:00 - 22:00",
            _id: {
              $oid: "61a3b944285007fa54226ac9",
            },
          },
          {
            day: "Jueves",
            time: "20:00 - 22:00",
            _id: {
              $oid: "61a3b944285007fa54226aca",
            },
          },
          {
            day: "Viernes",
            time: "20:00 - 22:00",
            _id: {
              $oid: "61a3b944285007fa54226acb",
            },
          },
          {
            day: "Sábado",
            time: "20:00 - 22:00",
            _id: {
              $oid: "61a3b944285007fa54226acc",
            },
          },
          {
            day: "Domingo",
            time: "20:00 - 22:00",
            _id: {
              $oid: "61a3b944285007fa54226acd",
            },
          },
        ],
        __v: 0,
      };

      const loadCurrentLocation = {
        type: actionTypes.loadCurrentLocation,
        location: locationValue,
      };

      const result = locationReducer(initialLocationValue, loadCurrentLocation);

      expect(result).toEqual(locationValue);
    });
  });

  describe("When it receives a location and a createNewLocation action", () => {
    test("Then it should return the location desired", () => {
      const initialLocationValue = {};
      const locationValue = {
        _id: {
          id: "61a3b944285007fa54226ac6",
        },
        name: "Centre Residencial de Primera Acollida Nou Barris",
        woman: false,
        type: "Centro de día",
        address: {
          street: "Carrer de Marie Curie, 20",
          postcode: "08042",
          coordinates: {
            longitude: 40123,
            latitude: 401654,
          },
        },
        phonenumber: "932760539",
        capacity: 100,
        timetable: [
          {
            day: "Lunes",
            time: "20:00 - 22:00",
            _id: {
              $oid: "61a3b944285007fa54226ac7",
            },
          },
          {
            day: "Martes",
            time: "20:00 - 22:00",
            _id: {
              $oid: "61a3b944285007fa54226ac8",
            },
          },
          {
            day: "Miécoles",
            time: "20:00 - 22:00",
            _id: {
              $oid: "61a3b944285007fa54226ac9",
            },
          },
          {
            day: "Jueves",
            time: "20:00 - 22:00",
            _id: {
              $oid: "61a3b944285007fa54226aca",
            },
          },
          {
            day: "Viernes",
            time: "20:00 - 22:00",
            _id: {
              $oid: "61a3b944285007fa54226acb",
            },
          },
          {
            day: "Sábado",
            time: "20:00 - 22:00",
            _id: {
              $oid: "61a3b944285007fa54226acc",
            },
          },
          {
            day: "Domingo",
            time: "20:00 - 22:00",
            _id: {
              $oid: "61a3b944285007fa54226acd",
            },
          },
        ],
        __v: 0,
      };

      const createNewLocation = {
        type: actionTypes.createNewLocation,
        location: locationValue,
      };

      const result = locationReducer(initialLocationValue, createNewLocation);

      expect(result).toEqual(locationValue);
    });
  });

  describe("When it receives a location and a updateLocation action", () => {
    test("Then it should return the location desired", () => {
      const initialLocationValue = {};
      const locationValue = {
        _id: {
          id: "61a3b944285007fa54226ac6",
        },
        name: "Centre Residencial de Primera Acollida Nou Barris",
        woman: false,
        type: "Centro de día",
        address: {
          street: "Carrer de Marie Curie, 20",
          postcode: "08042",
          coordinates: {
            longitude: 40123,
            latitude: 401654,
          },
        },
        phonenumber: "932760539",
        capacity: 100,
        timetable: [
          {
            day: "Lunes",
            time: "20:00 - 22:00",
            _id: {
              $oid: "61a3b944285007fa54226ac7",
            },
          },
          {
            day: "Martes",
            time: "20:00 - 22:00",
            _id: {
              $oid: "61a3b944285007fa54226ac8",
            },
          },
          {
            day: "Miécoles",
            time: "20:00 - 22:00",
            _id: {
              $oid: "61a3b944285007fa54226ac9",
            },
          },
          {
            day: "Jueves",
            time: "20:00 - 22:00",
            _id: {
              $oid: "61a3b944285007fa54226aca",
            },
          },
          {
            day: "Viernes",
            time: "20:00 - 22:00",
            _id: {
              $oid: "61a3b944285007fa54226acb",
            },
          },
          {
            day: "Sábado",
            time: "20:00 - 22:00",
            _id: {
              $oid: "61a3b944285007fa54226acc",
            },
          },
          {
            day: "Domingo",
            time: "20:00 - 22:00",
            _id: {
              $oid: "61a3b944285007fa54226acd",
            },
          },
        ],
        __v: 0,
      };

      const updateLocation = {
        type: actionTypes.updateLocation,
        location: locationValue,
      };

      const result = locationReducer(initialLocationValue, updateLocation);

      expect(result).toEqual(locationValue);
    });
  });

  describe("When it receives a location and a deleteLocation action", () => {
    test("Then it should return the location desired", () => {
      const initialLocationValue = {};
      const locationValue = {
        _id: {
          id: "61a3b944285007fa54226ac6",
        },
        name: "Centre Residencial de Primera Acollida Nou Barris",
        woman: false,
        type: "Centro de día",
        address: {
          street: "Carrer de Marie Curie, 20",
          postcode: "08042",
          coordinates: {
            longitude: 40123,
            latitude: 401654,
          },
        },
        phonenumber: "932760539",
        capacity: 100,
        timetable: [
          {
            day: "Lunes",
            time: "20:00 - 22:00",
            _id: {
              $oid: "61a3b944285007fa54226ac7",
            },
          },
          {
            day: "Martes",
            time: "20:00 - 22:00",
            _id: {
              $oid: "61a3b944285007fa54226ac8",
            },
          },
          {
            day: "Miécoles",
            time: "20:00 - 22:00",
            _id: {
              $oid: "61a3b944285007fa54226ac9",
            },
          },
          {
            day: "Jueves",
            time: "20:00 - 22:00",
            _id: {
              $oid: "61a3b944285007fa54226aca",
            },
          },
          {
            day: "Viernes",
            time: "20:00 - 22:00",
            _id: {
              $oid: "61a3b944285007fa54226acb",
            },
          },
          {
            day: "Sábado",
            time: "20:00 - 22:00",
            _id: {
              $oid: "61a3b944285007fa54226acc",
            },
          },
          {
            day: "Domingo",
            time: "20:00 - 22:00",
            _id: {
              $oid: "61a3b944285007fa54226acd",
            },
          },
        ],
        __v: 0,
      };

      const deleteLocation = {
        type: actionTypes.deleteLocation,
        location: locationValue,
      };

      const result = locationReducer(initialLocationValue, deleteLocation);

      expect(result).toEqual(locationValue);
    });
  });
});
