import {Residence} from "./residence";

export class Apartment {
  id!: number;
  numAppart!: number;
  numEtage!: number;
  surface!: number;
  terrasse!: string;
  surfaceTerrasse!: number;
  category!: string;
  description!: string;
  residence!: Residence;

}
