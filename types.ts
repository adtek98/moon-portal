import { ReactNode } from "react";

export type Unit = {
  registered: string;
  name: string;
  owner: string;
  firmware: string;
  eyesSerial: string;
  eyesFirmware: string;
  location: string;
  serialNumber: string;
};

export interface UnitProps {
  units: Unit[];
}

export interface TitleContainerProps {
  children: ReactNode;
  title: string;
}
