import {Currency} from "./currency";
import {Language} from "./language";

export class Country {
  name: string;
  alpha2Code: string;
  capital: string;
  nativeName: string;
  currencies: Currency[];
  languages: Language[];
}
