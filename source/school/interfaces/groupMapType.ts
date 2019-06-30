import {IGroupType, IPupilType} from "./index";

export interface IGroupMapType {
    groupMap: Map<number, IGroupType>;
    pupilMap: Map<number, IPupilType>;
}
