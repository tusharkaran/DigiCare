import { RealTimeDataProps } from "../modules/homepage/realTimeCards/interface";

export const realTimeData: RealTimeDataProps[] = [
  {
    _id: "1r",
    name: "blood_pressure",
    reading: `${Math.floor(Math.random() * 180)}/${Math.floor(Math.random() * 120)}`,
    unit: "mmHg",
  },
  {
    _id: "2r",
    name: "heart_rate",
    reading: `${Math.floor(Math.random() * 185)}`,
    unit: "bpm",
  },
  {
    _id: "3r",
    name: "bmi",
    reading: `${Math.floor(Math.random() * 40)}`,
    unit: "kg/msq",
  },
  {
    _id: "4r",
    name: "weight",
    reading: `${Math.floor(Math.random() * 200)}`,
    unit: "Kg",
  },
  {
    _id: "5r",
    name: "o2",
    reading: `${Math.floor(Math.random() * 100)}`,
    unit: "%",
  },
  {
    _id: "6r",
    name: "sugar_level",
    reading: `${Math.floor(Math.random() * 300)}`,
    unit: "mg/dL",
  },
];
