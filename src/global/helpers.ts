export const getCurrentDate = () => {
    let local = new Date();
    local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
    return local.toJSON().slice(0,10);
}

export class UniqueObjectsSet extends Set {
    constructor(items: any[]) {
        super(items);

        const array: any[] = [];
        for (let item of this) {
            if (array.includes(item.name)) {
                this.delete(item);
            } else {
                array.push(item.name);
            }
        }
    }
}
