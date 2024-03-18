export interface IBookAppointment {
  _id: string;
  doctor_id: string;
  online_availability?: IDoctorOnlineAvailability;
  appointments?: IAppointmnets[];
}

export interface IDoctorOnlineAvailability {
  timeIntervals: number;
  days: IDoctorOnlineAvailabilityDays[];
}

export interface IDoctorOnlineAvailabilityDays {
  _id: string;
  name: string;
  start_time: string;
  end_time: string;
  time_slots?: IDoctorTimeSlots[];
}

export interface IDoctorTimeSlots {
  _id: string;
  start_time: string;
  isBooked: boolean;
  booked_by?: string;
}

export interface IAppointmnets {
  id: string;
  date: Date;
  description: string;
  patient_id?: string;
  doctor_id?: string;
  room_id: string;
}
