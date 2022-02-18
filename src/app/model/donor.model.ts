export class Donor {
    _id: number;
    name: string;
    description: string;
    charity_date: string;
    categories: string[];
    estimated_value: number;

    constructor(obj?:any){
        this._id = obj && obj._id || 0;
        this.name = obj && obj.name || "";
        this.description = obj && obj.description || "";
        this.charity_date = obj && obj.charity_date || "";
        this.estimated_value = obj && obj.estimated_value || 0;
        this.categories = obj && obj.categories && obj.categories.map((x:any) => {
            return x as string;
        }) || [];
    }
    
    getYear() : number {
        return parseInt(this.charity_date.split("-")[0]);
    }
}