import { Order } from './../components/orders/order';
import { ORDERS } from './dummies/orders';
import { ORDER } from './dummies/order';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {

constructor() { }

createOrder(order: Order) {
    return Promise.resolve({
        success: true
    });
}

getOrders(): Promise<Order[]> {
    return Promise.resolve(ORDERS);
}

getOrder(orderId: number): Promise<Order> {
    return Promise.resolve(ORDER);
}

updateOrder(updatedOrder:Order) {
    return Promise.resolve({
        success: true
    });
}

deleteOrder(orderId:number) {
    return Promise.resolve({
        success: true
    });
}

}
