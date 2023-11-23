export interface AlbaTramonto {
  sunrise: string;
  sunset: string;
  sunriseore: string;
  sunsetore: string;
  sunriseminuti: string;
  sunsetminuti: string;
  sunrisetsecondi: string;
  sunsetsecondi: string;
  sunsetsunrise: string;
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
  weather: string;
  cloudcover: number;
  png: string;
  lifted_index: number;
  prec_type: string;
  rh2m: number;
  seeing: number;
  temp2m: number;
  timepoint: number;
  timepointstring: string;
  timepointdate: Date;
  transparency: number;
  wind10m: {
    direction: string;
    speed: number;
  };
}
