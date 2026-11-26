import {z} from 'zod';

export interface Diagnosis {
    code: string;
    name: string;
    latin?: string;
}

export const Gender = {
    Male: 'male',
    Female: 'female',
    Other: 'other',
} as const;

export type Gender = typeof Gender[keyof typeof Gender];

export type NonSensitivePatient = Omit<Patient, 'ssn'>;

export const NewPatientSchema = z.object({
    gender: z.enum(Gender),
    name: z.string(),
    dateOfBirth: z.iso.date(),
    occupation: z.string(),
    ssn: z.string(),
});

export type NewPatient = z.infer<typeof NewPatientSchema>;

export interface Patient extends NewPatient {
    id: string;
}