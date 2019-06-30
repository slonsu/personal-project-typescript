interface InameType {
    first: string;
    last: string;
}

interface IPhoneType {
    phone: string;
    primary: boolean;
}

export interface IPupilType {
    name: InameType;
    image: string;
    dateOfBirth: string;
    phones: IPhoneType[];
    sex: string;
    description: string;
    id?: number;
}
