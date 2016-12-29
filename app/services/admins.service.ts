import { ADMINS } from './dummies/admins';
import { ADMIN } from './dummies/admin';
import { Admin } from './../components/admins/admin';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminsService {

    constructor() { }

    createAdmin(admin: Admin) {
        return Promise.resolve({
            success: true
        });
    }

    getAdmins(): Promise<Admin[]> {
        return Promise.resolve(ADMINS);
    }

    getAdmin(adminId: number): Promise<Admin> {
        return Promise.resolve(ADMIN);
    }

    updateAdmin(updateAsset: Admin) {
        return Promise.resolve({
            success: true
        })
    }

    deleteAdmin(adminId: number) {
        return Promise.resolve({
            success: true
        });
    }
}