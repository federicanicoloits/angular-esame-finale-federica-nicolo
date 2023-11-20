export interface AlbaTramonto {
  sunrise: string;
  sunset: string;
  first_light: string;
  last_light: string;
  dawn: string;
  dusk: string;
  solar_noon: string;
  golden_hour: string;
  day_length: string;
  timezone: string;
  utc_offset: number;
}

export interface DatiMeteo {
  cloudcover: number;
  png: string;
  lifted_index: number;
  prec_type: string;
  rh2m: number;
  seeing: number;
  temp2m: number;
  timepoint: number;
  transparency: number;
  wind10m: {
    direction: string;
    speed: number;
  };
}
