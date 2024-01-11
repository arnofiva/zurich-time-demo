import Color from "@arcgis/core/Color";
import StreamLayer from "@arcgis/core/layers/StreamLayer";
import LabelClass from "@arcgis/core/layers/support/LabelClass";
import { UniqueValueRenderer } from "@arcgis/core/renderers";
import {
  IconSymbol3DLayer,
  LabelSymbol3D,
  PointSymbol3D,
  TextSymbol3DLayer,
} from "@arcgis/core/symbols";
import LineCallout3D from "@arcgis/core/symbols/callouts/LineCallout3D";

type IconType = "parking" | "ev";

const icon = (type: IconType) => {
  switch (type) {
    case "ev":
      return "https://static.arcgis.com/arcgis/styleItems/Icons/web/resource/Fuel.svg";
    case "parking":
      return "https://static.arcgis.com/arcgis/styleItems/Icons/web/resource/Parking.svg";
  }
};

const createSymbol = (type: IconType, color: Color) => {
  const size = 15;

  return new PointSymbol3D({
    verticalOffset: {
      screenLength: type === "parking" ? 30 : 60,
      maxWorldLength: 500,
      minWorldLength: 20,
    },
    callout: new LineCallout3D({
      size: 1.2,
      // border: {
      //   color: "red",
      // },
      color,
    }),
    symbolLayers: [
      new IconSymbol3DLayer({
        anchor: "center",
        resource: {
          primitive: "circle",
        },
        size: size * 1.4,
        material: {
          color: "white",
        },
        outline: {
          color: color,
          size: 1,
        },
      }),
      new IconSymbol3DLayer({
        material: {
          color,
        },
        resource: {
          href: icon(type),
        },
        size,
      }),
    ],
  });
};

// https://velocitydemo.maps.arcgis.com/home/item.html?id=057261b29f77473f847937b488fa2151
export const evStations = new StreamLayer({
  url: "https://us-iot.arcgis.com/bc1qjuyagnrebxvh/bc1qjuyagnrebxvh/streams/arcgis/rest/services/Zurich__ev_stations_live1/StreamServer",
  renderer: new UniqueValueRenderer({
    valueExpression: "$feature.EvseStatus",
    defaultSymbol: createSymbol("ev", new Color("#BFBFBF")),
    uniqueValueInfos: [
      {
        value: "Occupied",
        symbol: createSymbol("ev", new Color("#BFBFBF")),
      },
      {
        value: "Available",
        symbol: createSymbol("ev", new Color("#00A0FF")),
      },
    ],
  }),
  labelingInfo: [
    new LabelClass({
      labelExpressionInfo: {
        expression: "'EV Charger ' + $feature.EvseStatus",
      },
      symbol: new LabelSymbol3D({
        symbolLayers: [
          new TextSymbol3DLayer({
            material: {
              color: "white",
            },
            halo: {
              color: [80, 80, 80],
              size: 1,
            },
            size: 8,
          }),
        ],
        callout: new LineCallout3D({
          type: "line",
          size: 1.5,
          color: [200, 200, 200],
        }),
        verticalOffset: {
          screenLength: 25,
          maxWorldLength: 150000,
          minWorldLength: 20,
        },
      }),
      labelPlacement: "above-center",
      maxScale: 0,
      minScale: 0,
    }),
  ],
});

// https://velocitydemo.maps.arcgis.com/home/item.html?id=15d346c38cc34359b91c25a767f64d73
export const parkings = new StreamLayer({
  url: "https://us-iot.arcgis.com/bc1qjuyagnrebxvh/bc1qjuyagnrebxvh/streams/arcgis/rest/services/Zurich__parking_live/StreamServer",
  labelingInfo: [
    new LabelClass({
      labelExpressionInfo: {
        expression: "$feature.available + ' / ' + $feature.anzahl_oef",
      },
      symbol: new LabelSymbol3D({
        symbolLayers: [
          new TextSymbol3DLayer({
            material: {
              color: "white",
            },
            halo: {
              color: [80, 80, 80],
              size: 1,
            },
            size: 8,
          }),
        ],
        callout: new LineCallout3D({
          type: "line",
          size: 1.5,
          color: [200, 200, 200],
        }),
        verticalOffset: {
          screenLength: 25,
          maxWorldLength: 150000,
          minWorldLength: 20,
        },
      }),
      labelPlacement: "above-center",
      maxScale: 0,
      minScale: 0,
    }),
  ],
  renderer: new UniqueValueRenderer({
    valueExpression:
      "When($feature.available < 5, 'low', $feature.available < 10, 'medium', 'high')",
    defaultSymbol: createSymbol("parking", new Color([50, 50, 50])),
    uniqueValueInfos: [
      {
        value: "low",
        symbol: createSymbol("parking", new Color("#D90012")),
      },
      {
        value: "medium",
        symbol: createSymbol("parking", new Color("#FFC900")),
      },
      {
        value: "high",
        symbol: createSymbol("parking", new Color("#36DA43")),
      },
    ],
  }),
});
