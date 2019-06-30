import {GenerateID, idcreator} from "./index";
import {ITeacherMapType, ITeacherType} from "./interfaces";

export class TeachersModel implements ITeacherMapType {
    public teacherMap: Map<number, ITeacherType>;

    constructor() {
        this.teacherMap = new Map();
    }

    public add(data: ITeacherType) {
        data.id = idcreator.CreateID();
        this.teacherMap.set(data.id, data);
        return data.id;
    }

    public read(teacherId: number) {
        return console.log(this.teacherMap.get(teacherId));
    }

    public update(teacherId: number, data: ITeacherType) {
        this.teacherMap.set(teacherId, data);
        return teacherId;
    }

    public remove(teacherId: number) {
        this.teacherMap.delete(teacherId);
    }
}
