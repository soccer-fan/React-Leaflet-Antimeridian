import { createPathComponent } from '@react-leaflet/core';
import { Polyline as LeafletPolyline } from 'leaflet.antimeridian/src/vector/Wrapped.Polyline.js';

/*
This file reuses the Polyline code from react-leaflet but just imports the underlying JS Polyline
file from the antimeridian lib rather than leaflet.
Only the imports and name of the export are different, otherwise this is identical to the source code from
React-Leaflet
*/
export const WrappedPolyline = createPathComponent(function createPolyline({
  positions,
  ...options
}, ctx) {
  const instance = new LeafletPolyline(positions, options);
  return {
    instance,
    context: { ...ctx,
      overlayContainer: instance
    }
  };
}, function updatePolyline(layer, props, prevProps) {
  if (props.positions !== prevProps.positions) {
    layer.setLatLngs(props.positions);
  }
}); 