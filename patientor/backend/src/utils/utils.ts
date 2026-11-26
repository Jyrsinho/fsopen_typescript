import {Gender, type NewPatient} from "../../types.ts";

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};

const parseString = (name: unknown, field:string) : string => {
    if (!name || !isString(name)) {
        throw new Error(`incorrect or missing ${field}`);
    }
    return name;
};

const parseDateOfBirth = (dateOfBirth: unknown) : string =>  {
    if (!dateOfBirth || !isString(dateOfBirth) || !isDate(dateOfBirth) ) {
        throw new Error('incorrect or missing dateOfBirth');
    }
    return dateOfBirth;

};


function isGender(param: string): param is Gender {
    return (Object.values(Gender) as string[]).includes(param);
}

function parseGender(gender: unknown): Gender {
    if (!isString(gender) || !isGender(gender)) {
        throw new Error('incorrect or missing gender');
    }
    return gender;
}


function isValidSSN(ssn: string): boolean {
    return ssn.length === 11;
}

function parseSSN(ssn: unknown): string {
    if ( !ssn || !isString(ssn) || !isValidSSN(ssn)) {
        throw new Error('incorrect or missing ssn');
    }
    return ssn;
}

export const parseNewPatientEntry = (object: unknown): NewPatient => {
    if (!object || typeof object !== 'object') {
        throw new Error('incorrect or missing data');
    }

    if ('name' in object && 'dateOfBirth' in object && 'gender' in object && 'occupation' in object && 'ssn' in object) {
        return {
            gender: parseGender(object.gender),
            occupation: parseString(object.occupation, 'occupation'),
            ssn: parseSSN(object.ssn),
            name: parseString(object.name, 'name'),
            dateOfBirth: parseDateOfBirth(object.dateOfBirth)
        };
    }
    throw new Error('incorrect or missing data');
};
