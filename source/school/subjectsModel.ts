import {GenerateID, idcreator} from "./index";
import {ISubjectsConstructor, ISubjectsType} from "./interfaces";

export class SubjectsModel implements ISubjectsType {
    public id: number;
    public title: string;
    public lessons: number;
    public description?: string;

    constructor(subject: ISubjectsConstructor) {
        this.id = idcreator.CreateID();
        this.title = subject.title;
        this.lessons = subject.lessons;
        this.description = subject.description;
    }
}
