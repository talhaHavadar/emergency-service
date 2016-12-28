import { Drug } from './../../components/drug-consumables/drug'

export const DRUGS: Drug[]=[
  {
    id:1,
    type:"ateş düşürücü",
    name:"calpol",
    description:"ağrı kesici ateş düşürücü",
    tag:11,
    barcode:"1548639",
    ExpirationDate:"12/4/2017"
  },{
      id:2,
      type:"ağrı kesici",
      name:"parafon",
      description:"ağrı kesici ateş düşürücü",
      tag:18,
      barcode:"1548638",
      ExpirationDate: "15/3/2018"
    }
]

/**
  public id: number,
  public type: string,
  public name: string,
  public description: string,
  public tag:number, //değişebilir tagDto
  public barcode:string,
  public ExpirationDate: Date
**/
