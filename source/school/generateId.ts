export class GenerateID {
    public IDList: number[] = [];

    public CreateID() {
        this.IDList.push(this.IDList.length);
        return this.IDList[this.IDList.length - 1];
    }
}

export const idcreator = new GenerateID();
