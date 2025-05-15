declare module 'react-map-gl' {
  import { FC, ReactNode, RefObject } from 'react';
  
  export interface ViewState {
    longitude: number;
    latitude: number;
    zoom: number;
    bearing?: number;
    pitch?: number;
  }
  
  export interface ViewStateChangeEvent {
    viewState: ViewState;
  }
  
  export interface MapProps {
    ref?: RefObject<MapRef | null>;
    mapboxAccessToken?: string;
    longitude?: number;
    latitude?: number;
    zoom?: number;
    bearing?: number;
    pitch?: number;
    style?: React.CSSProperties;
    mapStyle?: string;
    onMove?: (evt: ViewStateChangeEvent) => void;
    onMoveStart?: (evt: ViewStateChangeEvent) => void;
    onMoveEnd?: (evt: ViewStateChangeEvent) => void;
    children?: ReactNode;
  }
  
  export interface MapRef {
    getMap: () => mapboxgl.Map;
  }
  
  export interface MarkerProps {
    longitude: number;
    latitude: number;
    anchor?: string;
    offset?: [number, number];
    offsetLeft?: number;
    offsetTop?: number;
    onClick?: (e: { originalEvent: MouseEvent; target: any; }) => void;
    children?: ReactNode;
    className?: string;
    style?: React.CSSProperties;
  }
  
  export interface PopupProps {
    longitude: number;
    latitude: number;
    anchor?: string;
    offset?: number | [number, number];
    closeButton?: boolean;
    closeOnClick?: boolean;
    onClose?: () => void;
    children?: ReactNode;
    className?: string;
    style?: React.CSSProperties;
  }
  
  export interface NavigationControlProps {
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  }
  
  export interface SourceProps {
    id: string;
    type: string;
    data: any;
    children?: ReactNode;
  }
  
  export interface LayerProps {
    id: string;
    type: string;
    paint?: any;
    layout?: any;
  }
  
  const Map: FC<MapProps>;
  
  export const Marker: FC<MarkerProps>;
  export const Popup: FC<PopupProps>;
  export const NavigationControl: FC<NavigationControlProps>;
  export const Source: FC<SourceProps>;
  export const Layer: FC<LayerProps>;
  
  export default Map;
}

declare module 'mapbox-gl' {
  export interface Map {
    getCanvas: () => HTMLCanvasElement;
  }
}
