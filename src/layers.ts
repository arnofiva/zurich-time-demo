import Color from "@arcgis/core/Color";
import Graphic from "@arcgis/core/Graphic";
import { Point } from "@arcgis/core/geometry";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
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
interface SimpleIcon {
  type: IconType;
  color: Color;
}
interface CustomIcon {
  type: "parking-custom";
  total: number;
  available: number;
}


const icon = (type: IconType) => {
  switch (type) {
    case "ev":
      return "https://static.arcgis.com/arcgis/styleItems/Icons/web/resource/Fuel.svg";
    case "parking":
      return "https://static.arcgis.com/arcgis/styleItems/Icons/web/resource/Parking.svg";
  }
};

const getImageData = (total: number, available: number): string => {
  const canvas = document.createElement("canvas");
  const iconSize = 32;
  const padding = 2;
  const labelWidth = 78;
  canvas.width = iconSize + padding + labelWidth;
  canvas.height = iconSize;
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  ctx.fillStyle = 'rgba(49, 130, 212, 0.9)';
  ctx.fillRect(0, 0, iconSize, iconSize);
  ctx.font = 'bold 24px Arial';
  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('P', iconSize / 2, iconSize / 2);


  const freeRectWidth = available / total * labelWidth;
  const freeRectHeight = iconSize;
  const freeRectX = iconSize + padding;
  const freeRectY = 0;

  ctx.fillStyle = 'rgba(37, 157, 161, 0.8)';
  ctx.fillRect(freeRectX, freeRectY, freeRectWidth, freeRectHeight);

  const occupiedRectWidth = labelWidth * (1 - available / total);
  const occupiedRectHeight = iconSize;
  const occupiedRectX = freeRectX + freeRectWidth;
  const occupiedRectY = 0;

  ctx.fillStyle = 'rgba(227, 66, 104, 0.8)';
  ctx.fillRect(occupiedRectX, occupiedRectY, occupiedRectWidth, occupiedRectHeight);
  const textPadding = 2;
  const textX = iconSize + padding + textPadding * 2;
  ctx.font = 'bold 16px Arial';
  ctx.fillStyle = 'white';
  ctx.textAlign = 'start';
  ctx.textBaseline = 'bottom';
  ctx.fillText(`${available} free`, textX, iconSize / 2 + textPadding * 2);

  ctx.font = '12px Arial';
  ctx.textBaseline = 'top';
  ctx.fillText(`${total} total`, textX, iconSize / 2 + textPadding * 2);
  return canvas.toDataURL("image/png");
}

const createSymbol = (iconProperties: SimpleIcon | CustomIcon) => {
  const size = 15;
  const { type } = iconProperties;

  if (type === "parking-custom") {
    const { total, available } = iconProperties;
    return new PointSymbol3D({
      verticalOffset: {
        screenLength: 50,
        maxWorldLength: 500,
        minWorldLength: 20,
      },
      callout: new LineCallout3D({
        size: 1.2,
        color: "white",
      }),
      symbolLayers: [
        new IconSymbol3DLayer({
          anchor: "relative",
          anchorPosition: {
            x: -0.35,
            y: 0.5,
          },
          resource: {
            href: getImageData(total, available),
          },
          size: 80,
        }),
      ],
    });
  } else {
    const { color, type } = iconProperties;
    return new PointSymbol3D({
      verticalOffset: {
        screenLength: type === "parking" ? 60 : 30,
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
  }


};

// https://velocitydemo.maps.arcgis.com/home/item.html?id=057261b29f77473f847937b488fa2151
export const evStations = new StreamLayer({
  url: "https://us-iot.arcgis.com/bc1qjuyagnrebxvh/bc1qjuyagnrebxvh/streams/arcgis/rest/services/Zurich__ev_stations_live1/StreamServer",
  renderer: new UniqueValueRenderer({
    valueExpression: "$feature.EvseStatus",
    defaultSymbol: createSymbol({ type: "ev", color: new Color("#BFBFBF") }),
    uniqueValueInfos: [
      {
        value: "Occupied",
        symbol: createSymbol({ type: "ev", color: new Color("#D90012") }),
      },
      {
        value: "Available",
        symbol: createSymbol({ type: "ev", color: new Color("#00A0FF") }),
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
const parkingsStreamLayer = new StreamLayer({
  url: "https://us-iot.arcgis.com/bc1qjuyagnrebxvh/bc1qjuyagnrebxvh/streams/arcgis/rest/services/Zurich__parking_live/StreamServer"
});

export const parkings = new GraphicsLayer({
  elevationInfo: {
    mode: "relative-to-scene"
  },
  title: "Parkings availability"
});

const parameters = parkingsStreamLayer.createConnectionParameters();
parkingsStreamLayer.connect(parameters).then((connection) => {
  (connection as any).on("data-received", (event: any) => {
    const { objectid, anzahl_oef: total, available } = event.attributes;
    const graphic = parkings.graphics.find((g) => g.attributes.objectid === objectid);
    if (graphic) {
      if (graphic.attributes.available !== available) {
        // graphic.symbol = createSymbol("parking-custom", { total, available });
        const symbol = (graphic.symbol as PointSymbol3D).clone();
        (symbol.symbolLayers.getItemAt(0) as IconSymbol3DLayer).resource.href = getImageData(total, available);
        graphic.symbol = symbol;
        graphic.attributes.available = available;
      }
    } else {
      const graphic = new Graphic({
        geometry: new Point(event.geometry),
        attributes: { objectid, total, available },
        symbol: createSymbol({ type: "parking-custom", total, available }),
      });
      parkings.graphics.add(graphic);
    }
  });
})
