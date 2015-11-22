// Returns information about the available mars rovers
export class RoversService {
  constructor () {
    'ngInject';

    // Ideally this would just be hitting another api, but there isn't one.  Fortunately each photo returned from the mars-photos api returns a rover
    // object with all the details needed.  Just hardcoding those details here rather than making extra api calls just for this data.
    this.rovers = [
      {
        name: "Curiosity",
        minDate: "2012-08-06",
        maxDate: "2015-10-13",
        maxSol: 1132,
        img: "assets/images/curiosity-rover.jpg",
        cameras: [
          { name: "FHAZ", full_name: "Front Hazard Avoidance Camera"},
          { name: "NAVCAM", full_name: "Navigation Camera"},
          { name: "MAST", full_name: "Mast Camera"},
          { name: "CHEMCAM", full_name: "Chemistry and Camera Complex"},
          { name: "MAHLI", full_name: "Mars Hand Lens Imager"},
          { name: "MARDI", full_name: "Mars Descent Imager"},
          { name: "RHAZ", full_name: "Rear Hazard Avoidance Camera"}
        ]
      },
      {
        name: "Opportunity",
        minDate: "2004-01-25",
        maxDate: "2015-10-14",
        maxSol: 4166,
        img: "assets/images/opportunity-rover.jpg",
        cameras: [
          { name:"FHAZ","full_name":"Front Hazard Avoidance Camera"},
          { name:"NAVCAM","full_name":"Navigation Camera"},
          { name:"PANCAM","full_name":"Panoramic Camera"},
          { name:"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},
          { name:"ENTRY","full_name":"Entry, Descent, and Landing Camera"},
          { name:"RHAZ","full_name":"Rear Hazard Avoidance Camera"}
        ]
      },
      {
        name: "Spirit",
        minDate: "2004-01-04",
        maxDate: "2010-03-21",
        maxsol: 2208,
        img: "assets/images/spirit-rover.png",
        cameras: [
          { name:"FHAZ","full_name":"Front Hazard Avoidance Camera"},
          { name:"NAVCAM","full_name":"Navigation Camera"},
          { name:"PANCAM","full_name":"Panoramic Camera"},
          { name:"MINITES","full_name":"Miniature Thermal Emission Spectrometer (Mini-TES)"},
          { name:"ENTRY","full_name":"Entry, Descent, and Landing Camera"},
          { name:"RHAZ","full_name":"Rear Hazard Avoidance Camera"}
        ]
      }
    ];
  };

  getRovers() {
    return this.rovers;
  }

  getRover(roverName) {
    return _.find(this.rovers, { name: roverName });
  }


}
