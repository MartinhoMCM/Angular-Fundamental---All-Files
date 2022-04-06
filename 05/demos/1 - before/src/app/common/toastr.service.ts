import { Injectable } from "@angular/core";

declare let toastr:any;

@Injectable()
export class ToastrService {
    success(message:string, title?:string){
        toastr.success(message, title)
    }
    information(message:string, title?:string){
        toastr.success(message, title)
    }
    warning(message:string, title?:string){
        toastr.success(message, title)
    }
    error(message:string, title?:string){
        toastr.success(message, title)
    }
}