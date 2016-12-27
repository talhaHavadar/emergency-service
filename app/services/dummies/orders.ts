import { Order } from './../../components/orders/order';
//     public id: number,
//     public responsivePerson: number,
//     public patient: number,
//     public orderCount: number,
//     public orderDetail: string
export const ORDERS: Order[] = [
    {
        id: 1,
        responsivePerson: {
            name: "Ahmet Gülgören"
        },
        patient: {
            name: "Nazmi Çıkaran"
        },
        orderCount: 1,
        orderDetail: "Öksürük ilacı"
    },
    {
        id: 2,
        responsivePerson: {
            name: "Mehmet Dağcı"
        },
        patient: {
            name: "Turgut Giray"
        },
        orderCount: 1,
        orderDetail: "Kanser İlacı"
    },
];