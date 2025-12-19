export interface BusModel {
  id: string;
  name: string;
  capacity: number;
  vibe: string;
  features: string[];
  image: string; // Placeholder URL
}

export enum Section {
  HERO = 'hero',
  FLEET = 'fleet',
  ORACLE = 'oracle',
  MANIFESTO = 'manifesto',
  SUMMON = 'summon'
}
