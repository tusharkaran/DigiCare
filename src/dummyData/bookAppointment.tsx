import { IBookAppointment } from "../modules/appointments/interface";

export const bookAppointmentDummyData: IBookAppointment[] = [
  {
    _id: "1b",
    doctor_id: "1d",
    online_availability: {
      timeIntervals: 15,
      days: [
        {
          _id: "1Day",
          name: "Mon",
          start_time: "09:00",
          end_time: "11:00",
          time_slots: [
            {
              _id: "1time",
              start_time: "09:00",
              isBooked: true,
            },
            {
              _id: "2time",
              start_time: "09:15",
              isBooked: false,
            },
            {
              _id: "3time",
              start_time: "09:30",
              isBooked: false,
            },
            {
              _id: "4time",
              start_time: "09:45",
              isBooked: false,
            },
            {
              _id: "5time",
              start_time: "10:00",
              isBooked: false,
            },
            {
              _id: "6time",
              start_time: "10:15",
              isBooked: false,
            },
            {
              _id: "7time",
              start_time: "10:30",
              isBooked: false,
            },
            {
              _id: "8time",
              start_time: "10:45",
              isBooked: false,
            },
          ],
        },
        {
          _id: "2Day",
          name: "Tue",
          start_time: "21:00",
          end_time: "23:00",
          time_slots: [
            {
              _id: "21time",
              start_time: "21:00",
              isBooked: false,
            },
            {
              _id: "22time",
              start_time: "21:15",
              isBooked: false,
            },
            {
              _id: "23time",
              start_time: "21:30",
              isBooked: false,
            },
            {
              _id: "24time",
              start_time: "21:45",
              isBooked: false,
            },
            {
              _id: "25time",
              start_time: "22:00",
              isBooked: false,
            },
            {
              _id: "26time",
              start_time: "22:15",
              isBooked: false,
            },
            {
              _id: "27time",
              start_time: "22:30",
              isBooked: false,
            },
            {
              _id: "28time",
              start_time: "22:45",
              isBooked: false,
            },
          ],
        },
        {
          _id: "3Day",
          name: "Wed",
          start_time: "16:00",
          end_time: "17:00",
          time_slots: [
            {
              _id: "31time",
              start_time: "16:00",
              isBooked: false,
            },
            {
              _id: "32time",
              start_time: "16:15",
              isBooked: false,
            },
            {
              _id: "33time",
              start_time: "16:30",
              isBooked: false,
            },
            {
              _id: "34time",
              start_time: "16:45",
              isBooked: false,
            },
          ],
        },
        {
          _id: "4Day",
          name: "Thu",
          start_time: "09:00",
          end_time: "11:00",
          time_slots: [
            {
              _id: "41time",
              start_time: "09:00",
              isBooked: false,
            },
            {
              _id: "42time",
              start_time: "09:15",
              isBooked: false,
            },
            {
              _id: "43time",
              start_time: "09:30",
              isBooked: false,
            },
            {
              _id: "44time",
              start_time: "09:45",
              isBooked: false,
            },
            {
              _id: "45time",
              start_time: "10:00",
              isBooked: false,
            },
            {
              _id: "46time",
              start_time: "10:15",
              isBooked: false,
            },
            {
              _id: "47time",
              start_time: "10:30",
              isBooked: false,
            },
            {
              _id: "48time",
              start_time: "10:45",
              isBooked: false,
            },
          ],
        },
        {
          _id: "5Day",
          name: "Fri",
          start_time: "09:00",
          end_time: "11:00",
          time_slots: [
            {
              _id: "51time",
              start_time: "09:00",
              isBooked: false,
            },
            {
              _id: "52time",
              start_time: "09:15",
              isBooked: false,
            },
            {
              _id: "53time",
              start_time: "09:30",
              isBooked: false,
            },
            {
              _id: "54time",
              start_time: "09:45",
              isBooked: false,
            },
            {
              _id: "55time",
              start_time: "10:00",
              isBooked: false,
            },
            {
              _id: "56time",
              start_time: "10:15",
              isBooked: false,
            },
            {
              _id: "57time",
              start_time: "10:30",
              isBooked: false,
            },
            {
              _id: "58time",
              start_time: "10:45",
              isBooked: false,
            },
          ],
        },
        {
          _id: "6Day",
          name: "Sat",
          start_time: "09:00",
          end_time: "11:00",
          time_slots: [
            {
              _id: "61time",
              start_time: "09:00",
              isBooked: false,
            },
            {
              _id: "62time",
              start_time: "09:15",
              isBooked: false,
            },
            {
              _id: "63time",
              start_time: "09:30",
              isBooked: false,
            },
            {
              _id: "64time",
              start_time: "09:45",
              isBooked: false,
            },
            {
              _id: "65time",
              start_time: "10:00",
              isBooked: false,
            },
            {
              _id: "66time",
              start_time: "10:15",
              isBooked: false,
            },
            {
              _id: "67time",
              start_time: "10:30",
              isBooked: false,
            },
            {
              _id: "68time",
              start_time: "10:45",
              isBooked: false,
            },
          ],
        },
        {
          _id: "7Day",
          name: "Sun",
          start_time: "09:00",
          end_time: "10:00",
          time_slots: [
            {
              _id: "71time",
              start_time: "09:00",
              isBooked: false,
            },
            {
              _id: "72time",
              start_time: "09:15",
              isBooked: false,
            },
            {
              _id: "73time",
              start_time: "09:30",
              isBooked: false,
            },
            {
              _id: "74time",
              start_time: "09:45",
              isBooked: false,
            },
          ],
        },
      ],
    },
    appointments: [
      {
        id: "1a",
        date: new Date("2024-03-20T09:00:00"),
        description: "Dentist appointment",
        patient_id: "1p",
        doctor_id: "1d",
        room_id: "1rp",
      },
      {
        id: "2a",
        date: new Date("2024-03-22T14:30:00"),
        description: "To update on heart condition",
        patient_id: "2p",
        doctor_id: "1d",
        room_id: "2rp",
      },
      {
        id: "3a",
        date: new Date("2024-03-25T11:00:00"),
        description: "Follow-up doctor's appointment",
        patient_id: "1p",
        doctor_id: "1d",
        room_id: "1rp",
      },
      {
        id: "4a",
        date: new Date("2024-03-10T16:00:00"),
        description: "Injury healing situation",
        patient_id: "1p",
        doctor_id: "1d",
        room_id: "1rp",
      },
    ],
  },
  {
    _id: "2b",
    doctor_id: "2d",
    online_availability: {
      timeIntervals: 15,
      days: [
        {
          _id: "1Day",
          name: "Mon",
          start_time: "09:00",
          end_time: "11:00",
          time_slots: [
            {
              _id: "1time",
              start_time: "09:00",
              isBooked: true,
              booked_by: "2p",
            },
            {
              _id: "2time",
              start_time: "09:15",
              isBooked: false,
            },
            {
              _id: "3time",
              start_time: "09:30",
              isBooked: false,
            },
            {
              _id: "4time",
              start_time: "09:45",
              isBooked: false,
            },
            {
              _id: "5time",
              start_time: "10:00",
              isBooked: false,
            },
            {
              _id: "6time",
              start_time: "10:15",
              isBooked: false,
            },
            {
              _id: "7time",
              start_time: "10:30",
              isBooked: false,
            },
            {
              _id: "8time",
              start_time: "10:45",
              isBooked: false,
            },
          ],
        },
        {
          _id: "2Day",
          name: "Tue",
          start_time: "21:00",
          end_time: "23:00",
          time_slots: [
            {
              _id: "21time",
              start_time: "21:00",
              isBooked: false,
            },
            {
              _id: "22time",
              start_time: "21:15",
              isBooked: false,
            },
            {
              _id: "23time",
              start_time: "21:30",
              isBooked: false,
            },
            {
              _id: "24time",
              start_time: "21:45",
              isBooked: false,
            },
            {
              _id: "25time",
              start_time: "22:00",
              isBooked: false,
            },
            {
              _id: "26time",
              start_time: "22:15",
              isBooked: false,
            },
            {
              _id: "27time",
              start_time: "22:30",
              isBooked: false,
            },
            {
              _id: "28time",
              start_time: "22:45",
              isBooked: false,
            },
          ],
        },
        {
          _id: "3Day",
          name: "Wed",
          start_time: "16:00",
          end_time: "17:00",
          time_slots: [
            {
              _id: "31time",
              start_time: "16:00",
              isBooked: false,
            },
            {
              _id: "32time",
              start_time: "16:15",
              isBooked: false,
            },
            {
              _id: "33time",
              start_time: "16:30",
              isBooked: false,
            },
            {
              _id: "34time",
              start_time: "16:45",
              isBooked: false,
            },
          ],
        },
        {
          _id: "4Day",
          name: "Thu",
          start_time: "09:00",
          end_time: "11:00",
          time_slots: [
            {
              _id: "41time",
              start_time: "09:00",
              isBooked: false,
            },
            {
              _id: "42time",
              start_time: "09:15",
              isBooked: false,
            },
            {
              _id: "43time",
              start_time: "09:30",
              isBooked: false,
            },
            {
              _id: "44time",
              start_time: "09:45",
              isBooked: false,
            },
            {
              _id: "45time",
              start_time: "10:00",
              isBooked: false,
            },
            {
              _id: "46time",
              start_time: "10:15",
              isBooked: false,
            },
            {
              _id: "47time",
              start_time: "10:30",
              isBooked: false,
            },
            {
              _id: "48time",
              start_time: "10:45",
              isBooked: false,
            },
          ],
        },
        {
          _id: "5Day",
          name: "Fri",
          start_time: "09:00",
          end_time: "11:00",
          time_slots: [
            {
              _id: "51time",
              start_time: "09:00",
              isBooked: false,
            },
            {
              _id: "52time",
              start_time: "09:15",
              isBooked: false,
            },
            {
              _id: "53time",
              start_time: "09:30",
              isBooked: false,
            },
            {
              _id: "54time",
              start_time: "09:45",
              isBooked: false,
            },
            {
              _id: "55time",
              start_time: "10:00",
              isBooked: false,
            },
            {
              _id: "56time",
              start_time: "10:15",
              isBooked: false,
            },
            {
              _id: "57time",
              start_time: "10:30",
              isBooked: false,
            },
            {
              _id: "58time",
              start_time: "10:45",
              isBooked: false,
            },
          ],
        },
        {
          _id: "6Day",
          name: "Sat",
          start_time: "09:00",
          end_time: "11:00",
          time_slots: [
            {
              _id: "61time",
              start_time: "09:00",
              isBooked: false,
            },
            {
              _id: "62time",
              start_time: "09:15",
              isBooked: false,
            },
            {
              _id: "63time",
              start_time: "09:30",
              isBooked: false,
            },
            {
              _id: "64time",
              start_time: "09:45",
              isBooked: false,
            },
            {
              _id: "65time",
              start_time: "10:00",
              isBooked: false,
            },
            {
              _id: "66time",
              start_time: "10:15",
              isBooked: false,
            },
            {
              _id: "67time",
              start_time: "10:30",
              isBooked: false,
            },
            {
              _id: "68time",
              start_time: "10:45",
              isBooked: false,
            },
          ],
        },
        {
          _id: "7Day",
          name: "Sun",
          start_time: "09:00",
          end_time: "10:00",
          time_slots: [
            {
              _id: "71time",
              start_time: "09:00",
              isBooked: false,
            },
            {
              _id: "72time",
              start_time: "09:15",
              isBooked: false,
            },
            {
              _id: "73time",
              start_time: "09:30",
              isBooked: false,
            },
            {
              _id: "74time",
              start_time: "09:45",
              isBooked: false,
            },
          ],
        },
      ],
    },
    appointments: [
      {
        id: "21a",
        date: new Date("2024-03-20T10:00:00"),
        description: "Dentist appointment",
        patient_id: "1p",
        doctor_id: "2d",
        room_id: "1rp",
      },
      {
        id: "21a",
        date: new Date("2024-03-20T09:00:00"),
        description: "Dentist appointment",
        patient_id: "2p",
        doctor_id: "2d",
        room_id: "2rp",
      },
      {
        id: "22a",
        date: new Date("2024-03-22T14:30:00"),
        description: "To update on heart condition",
        patient_id: "3p",
        doctor_id: "2d",
        room_id: "3rp",
      },
    ],
  },
];
