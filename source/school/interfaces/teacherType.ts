interface InameType {
    first: string;
    last: string;
}

interface IEmailType {
    email: string;
    primary: boolean;
}

interface IPhoneType {
    phone: string;
    primary: boolean;
}

interface ISubjectType {
    subject: string;
}

export interface ITeacherType {
    name: InameType;
    image: string;
    dateOfBirth: string;
    emails: IEmailType[];
    phones: IPhoneType[];
    sex: string;
    subjects: ISubjectType[];
    description: string;
    id?: number;
}
