import { CLOCATIONS } from './dummies/clocations';
import { CLOCATION } from './dummies/clocation';
import { Clocation } from './../components/const-locations/clocation';
import { Injectable } from '@angular/core';

@Injectable()
export class ClocationsService {

constructor() { }

createClocation(cloc: Clocation) {
    return Promise.resolve({
        success: true
    });
}

getClocations(): Promise<Clocation[]> {
    return Promise.resolve(CLOCATIONS);
}

getClocation(clocationId: number): Promise<Clocation> {
    return Promise.resolve(CLOCATION);
}

updateClocation(updatedClocation:Clocation) {
    return Promise.resolve({
        success: true
    });
}

deleteClocation(clocationId:number) {
    return Promise.resolve({
        success: true
    });
}

}