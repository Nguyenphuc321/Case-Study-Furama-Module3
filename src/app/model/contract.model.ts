import { Executive } from './executive.model';
import { Employee } from './employee.model';

export class Contract {
    id?: number;
    ngaylamhopdong?:string;
    ngayketthuc?:string;
    tiendaccoc?: number;
    tongtien?:number;
    executive?:Executive
    nhanvien?:Employee;
}
