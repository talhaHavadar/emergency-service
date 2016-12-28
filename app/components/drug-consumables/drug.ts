export class Drug{
  constructor(
    public id: number,
    public type: string,
    public name: string,
    public description: string,
    public tag:number, //değişebilir tagDto
    public barcode:string,
    public ExpirationDate: string
  ){}
}
