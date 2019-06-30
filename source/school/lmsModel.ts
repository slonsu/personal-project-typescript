import {ILMSMapType, ISubjectsType} from "./interfaces";

export class LMSModel implements ILMSMapType {
    public lmsMap: Map<number, ISubjectsType>;
    constructor() {
        this.lmsMap = new Map();
    }

    public add(subject: ISubjectsType) {
        this.lmsMap.set(subject.id, subject);
    }

    public remove(subject: ISubjectsType) {
        this.lmsMap.delete(subject.id);
    }

    public verify(subject: ISubjectsType) {
        if (subject.id === undefined) {
            return false;
        } else {
            return this.lmsMap.has(subject.id);
        }
    }

    public readAll() {
        const arr: ISubjectsType[] = [];
        this.lmsMap.forEach((element) => {
            arr.push(element);
        });
        return arr;
    }
}
