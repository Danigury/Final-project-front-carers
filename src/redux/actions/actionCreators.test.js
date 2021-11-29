import { loadLocationsActions } from "./actionCreators";
import actionTypes from "./actionTypes";

describe("Given an actionCreators", () => {
  describe("When it receives a call of loadLocations", () => {
    test("Then it should render a list of locations", () => {
      const locationsToListTest = [
        {
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
        },
        {
          _id: {
            $oid: "61a3b9c5285007fa54226acf",
          },
          name: "Accent Social",
          woman: false,
          type: "Centro de día",
          address: {
            street: "Carrer de Josep Ferrater i Mora, 2",
            postcode: "08019",
            coordinates: {
              longitude: 40123,
              latitude: 401654,
            },
          },
          phonenumber: "935481353",
          capacity: 100,
          timetable: [
            {
              day: "Lunes",
              time: "09:00 - 18:00",
              _id: {
                $oid: "61a3b9c5285007fa54226ad0",
              },
            },
            {
              day: "Martes",
              time: "09:00 - 18:00",
              _id: {
                $oid: "61a3b9c5285007fa54226ad1",
              },
            },
            {
              day: "Miécoles",
              time: "09:00 - 18:00",
              _id: {
                $oid: "61a3b9c5285007fa54226ad2",
              },
            },
            {
              day: "Jueves",
              time: "09:00 - 18:00",
              _id: {
                $oid: "61a3b9c5285007fa54226ad3",
              },
            },
            {
              day: "Viernes",
              time: "09:00 - 18:00",
              _id: {
                $oid: "61a3b9c5285007fa54226ad4",
              },
            },
            {
              day: "Sábado",
              time: "Cerrado",
              _id: {
                $oid: "61a3b9c5285007fa54226ad5",
              },
            },
            {
              day: "Domingo",
              time: "Cerrado",
              _id: {
                $oid: "61a3b9c5285007fa54226ad6",
              },
            },
          ],
          __v: 0,
        },
      ];

      const expected = {
        type: actionTypes.loadLocations,
        locations: locationsToListTest,
      };

      const result = loadLocationsActions(locationsToListTest);
      expect(result).toEqual(expected);
    });
  });
});
