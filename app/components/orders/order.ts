export class Order{
  constructor(
    public id: number,
    public responsivePerson: any,
    public patient: any,
    public orderCount: number,
    public orderDetail: string
  ){}
}
