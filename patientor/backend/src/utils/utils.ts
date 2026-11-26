import type {NewPatient} from "../../types.ts";

export const parseNewPatientEntry = (object: unknown): NewPatient => {
    console.log(object);
    return {
        name: "Harry",
        dateOfBirth: "01-08-1992",
        ssn: "0108929232",
        gender: "male",
        occupation: "Wizard"
    };
};
