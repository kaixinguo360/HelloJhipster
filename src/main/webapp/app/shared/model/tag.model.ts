export interface ITag {
    id?: number;
    title?: string;
    info?: string;
}

export class Tag implements ITag {
    constructor(public id?: number, public title?: string, public info?: string) {}
}
