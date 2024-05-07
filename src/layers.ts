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

type IconType = "parking-low" | "parking-high" | "parking-medium" | "parking-empty" | "ev-occupied" | "ev-free" | "ev-unknown";

const createSymbol = (type: IconType) => {
  return new PointSymbol3D({
    verticalOffset: {
      screenLength: type.includes("parking") ? 60 : 30,
      maxWorldLength: 500,
      minWorldLength: 20,
    },
    callout: new LineCallout3D({
      size: 2,
      color: [255, 255, 255, 0.6],
    }),
    symbolLayers: [
      new IconSymbol3DLayer({
        anchor: "bottom",
        resource: {
          href: `./${type}.png`,
        },
        size: 30,
      }),
    ],
  });
};

// https://velocitydemo.maps.arcgis.com/home/item.html?id=057261b29f77473f847937b488fa2151
export const evStations = new StreamLayer({
  url: "https://us-iot.arcgis.com/bc1qjuyagnrebxvh/bc1qjuyagnrebxvh/streams/arcgis/rest/services/Zurich__ev_stations_live1/StreamServer",
  renderer: new UniqueValueRenderer({
    valueExpression: "$feature.EvseStatus",
    defaultSymbol: createSymbol("ev-unknown"),
    uniqueValueInfos: [
      {
        value: "Occupied",
        symbol: createSymbol("ev-occupied"),
      },
      {
        value: "Available",
        symbol: createSymbol("ev-free"),
      },
    ],
  }),
  labelsVisible: false,
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
        expression: "$feature.available + ' free'",
      },
      symbol: new LabelSymbol3D({
        symbolLayers: [
          new TextSymbol3DLayer({
            material: {
              color: "white",
            },
            background: {
              color: [50, 50, 50, 0.6],
            },
            halo: {
              color: [80, 80, 80],
              size: 1,
            },
            size: 8,
          }),
        ],
      }),
      labelPlacement: "center-right",
      maxScale: 0,
      minScale: 0,
    }),
  ],
  renderer: new UniqueValueRenderer({
    valueExpression:
      "When($feature.available == 0, 'empty', $feature.available < 5, 'low', $feature.available < 10, 'medium', 'high')",
    defaultSymbol: createSymbol("parking-empty"),
    uniqueValueInfos: [
      {
        value: "empty",
        symbol: createSymbol("parking-empty"),
      },
      {
        value: "low",
        symbol: createSymbol("parking-low"),
      },
      {
        value: "medium",
        symbol: createSymbol("parking-medium"),
      },
      {
        value: "high",
        symbol: createSymbol("parking-high"),
      },
    ],
  }),
});
