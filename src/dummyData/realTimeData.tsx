import { RealTimeDataProps } from "../modules/homepage/realTimeCards/interface";

export const realTimeData: RealTimeDataProps[] = [
  {
    _id: "1r",
    name: "blood_pressure",
    reading: `${Math.floor(Math.random() * 180)}/${Math.floor(Math.random() * 120)}`,
    unit: "mmHg",
    min_value: "120/80",
    max_value: "90/60"
  },
  {
    _id: "2r",
    name: "heart_rate",
    reading: `${Math.floor(Math.random() * 185)}`,
    unit: "bpm",
    min_value: "60",
    max_value: "100",
  },
  {
    _id: "3r",
    name: "bmi",
    reading: `${Math.floor(Math.random() * 40)}`,
    unit: "kg/msq",
    min_value: "18.5",
    max_value: "24.9",
  },
  {
    _id: "4r",
    name: "weight",
    reading: `${Math.floor(Math.random() * 200)}`,
    unit: "Kg",
    min_value: "40",
    max_value: "100",
  },
  {
    _id: "5r",
    name: "o2",
    reading: `${Math.floor(Math.random() * 100)}`,
    unit: "%",
    min_value: "90",
    max_value: "100",
  },
  {
    _id: "6r",
    name: "sugar_level",
    reading: `${Math.floor(Math.random() * 300)}`,
    unit: "mg/dL",
    min_value: "70",
    max_value: "125",
  },
];
