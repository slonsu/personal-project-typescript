import {
    GenerateID,
    GroupsModel,
    LMSModel,
    PupilsModel,
    SubjectsModel,
    TeachersModel,
} from "./school/";

import {IPupilType, ITeacherType} from "./school/interfaces";

(async () => {
    const history = new SubjectsModel({
        lessons: 24,
        title: "History",
    });
    await console.log(history.id);

    const lms = new LMSModel();
    await lms.remove(history);
    await lms.add(history);
    await lms.verify(history);
    await console.log(lms.readAll());

    /* tslint:disable */
    const data: ITeacherType = {
        name: {
            first: "string",
            last: "string",
        },
        image: "string",
        dateOfBirth: "string",
        emails: [
            {
                email: "string",
                primary: true,
            }
        ],
        phones: [
            {
                phone: "string",
                primary: true,
            }
        ],
        sex: "string",
        subjects: [
            {
                subject: "string",
            }
        ],
        description: "string",
    }

    const updatedProfile: ITeacherType = {
        name: {
            first: "The",
            last: "rusted",
        },
        image: "chains",
        dateOfBirth: "of",
        emails: [
            {
                email: "prison",
                primary: false,
            }
        ],
        phones: [
            {
                phone: "moons",
                primary: false,
            }
        ],
        sex: "Are",
        subjects: [
            {
                subject: "shattered",
            }
        ],
        description: "by",
    }
    /* tslint ignore:end */
    const teachers = new TeachersModel();
    const teacherId = teachers.add(data);
    await teachers.read(teacherId);
    await teachers.update(teacherId, updatedProfile);
    await teachers.remove(teacherId);
    await teachers.read(teacherId);

    /* tslint:disable */
    const data2: IPupilType = {
        name: {
            first: "string",
            last: "string"
        },
        image: "string",
        dateOfBirth: "string", // format date
        phones: [
            {
                phone: "string",
                primary: true,
            }
        ],
        sex: "string", // male OR female
        description: "string"
    }

    const updatedProfile2: IPupilType = {
        name: {
            first: "the",
            last: "sun"
        },
        image: "I",
        dateOfBirth: "walk", // format date
        phones: [
            {
                phone: "a",
                primary: false,
            }
        ],
        sex: "road", // male OR female
        description: "horizons"
    }
    /* tslint ignore:end */

    const pupils = new PupilsModel();
    const pupil = pupils.add(data2);
    await pupils.read(pupil);
    await pupils.update(pupil, updatedProfile2)
    await pupils.remove(pupil)
    await pupils.read(pupil);

    const room = 236;
    const groups = new GroupsModel();
    const groupId = groups.add(room);
    await groups.removePupil(groupId, updatedProfile2);
    await groups.addPupil(groupId, updatedProfile2);
    await groups.update(groupId, {
        room: 237
    });
    await groups.read(groupId);
    await console.log(groups.readAll());

    const gradebooks = new GradebooksModel(groups, teachers, lms);
})();
