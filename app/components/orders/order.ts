export class Order{
  constructor(
    public id: number,
    public responsivePerson: number,
    public patient: number,
    public orderCount: number,
    public orderDetail: string
  ){}
}
