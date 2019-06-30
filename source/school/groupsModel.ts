import {GenerateID, idcreator} from "./index";
import {IGroupMapType, IGroupType, IPupilType} from "./interfaces";

export class GroupsModel implements IGroupMapType {
    public groupMap: Map<number, IGroupType>;
    public pupilMap: Map<number, IPupilType>;

    constructor() {
        this.groupMap = new Map();
        this.pupilMap = new Map();
    }

    public add(newroom: number) {
        const tempRoom = {
            id: idcreator.CreateID(),
            room: newroom,
        };
        this.groupMap.set(tempRoom.id, tempRoom);
        return tempRoom.id;
    }

    public addPupil(groupID: number, pupil: IPupilType) {
        this.pupilMap.set(groupID, pupil);
    }

    public removePupil(groupId: number, pupil: IPupilType) {
        this.pupilMap.delete(groupId);
    }

    public read(groupID: number) {
        console.log(this.pupilMap.get(groupID));
    }

    public update(groupID: number, upd: IGroupType) {
        upd.id = groupID;
        this.groupMap.set(groupID, upd);
    }

    public readAll() {
        const arr: IGroupType[] = [];
        this.groupMap.forEach((element) => {
            arr.push(element);
        });
        return arr;
    }
}
