import {Gender, type NewPatient} from "../../types.ts";
import { z } from "zod";

export const parseNewPatientEntry = (object: unknown): NewPatient => {
    if (!object || typeof object !== 'object') {
        throw new Error('incorrect or missing data');
    }

    if ('name' in object && 'dateOfBirth' in object && 'gender' in object && 'occupation' in object && 'ssn' in object) {
        return {
            gender: z.enum(Gender).parse(object.gender),
            occupation: z.string().parse(object.occupation),
            ssn: z.string().parse(object.ssn),
            name: z.string().parse(object.name),
            dateOfBirth: z.iso.date().parse(object.dateOfBirth),
        };
    }
    throw new Error('incorrect or missing data');
};
