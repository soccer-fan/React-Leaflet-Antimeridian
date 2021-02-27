import { createPathComponent } from '@react-leaflet/core';
import { Polygon as LeafletPolygon } from 'leaflet.antimeridian/src/vector/Wrapped.Polygon';

/*
This file reuses the Polygon code from react-leaflet but just imports the underlying JS Polygon
file from the antimeridian lib rather than leaflet.
Only the imports and name of the export are different, otherwise this is identical to the source code from
React-Leaflet
*/
export const WrappedPolygon = createPathComponent(function createPolygon({
  positions,
  ...options
}, ctx) {
  const instance = new LeafletPolygon(positions, options);
  return {
    instance,
    context: { ...ctx,
      overlayContainer: instance
    }
  };
}, function updatePolygon(layer, props, prevProps) {
  if (props.positions !== prevProps.positions) {
    layer.setLatLngs(props.positions);
  }
});