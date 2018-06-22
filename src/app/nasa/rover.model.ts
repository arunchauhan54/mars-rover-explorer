enum RoverCamera {
  FHAZ, NAVCAM, MAST, CHEMCAM, MAHLI, MARDI, RHAZ
}

interface RoverData {
  camera: RoverCamera;
  cameraName: string;
  date: Date;
  imgUrl: string;
}

