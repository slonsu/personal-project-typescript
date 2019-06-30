import {GenerateID, idcreator} from "./index";
import {IPupilMapType, IPupilType} from "./interfaces";

export class PupilsModel implements IPupilMapType {
    public pupilMap: Map<number, IPupilType>;

    constructor() {
        this.pupilMap = new Map();
    }

    public add(data: IPupilType) {
        data.id = idcreator.CreateID();
        this.pupilMap.set(data.id, data);
        return data.id;
    }

    public read(pupilId: number) {
        return console.log(this.pupilMap.get(pupilId));
    }

    public update(pupilId: number, data: IPupilType) {
        this.pupilMap.set(pupilId, data);
        return pupilId;
    }

    public remove(pupilId: number) {
        this.pupilMap.delete(pupilId);
    }
}
