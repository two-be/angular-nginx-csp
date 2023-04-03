import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"
import { firstValueFrom } from "rxjs";

@Injectable()
export class AppService {

    constructor(private http: HttpClient) { }

    get() {
        return firstValueFrom(this.http.get("https://sampleapp.dev/api/csp"))
    }
}