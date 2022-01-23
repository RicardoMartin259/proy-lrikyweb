export interface CustomerI{
    "tipoDoc": string;
    "numDoc": string;
    "rznSocial": string;
    "address": {
        "direccion": string|null;
        "provincia": string;
        "departamento": string;
        "distrito": string;
        "ubigueo": string;
    };
    "contacto": string;
    "telefono": string;
}