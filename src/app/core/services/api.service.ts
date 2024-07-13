import { Observable } from "rxjs";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(
    private readonly http: HttpClient,
    private readonly translate: TranslateService
  ) {}

  getUploadHeaders() {
    const token: string | null = localStorage.getItem("token") || null;
    const id: string | null = localStorage.getItem("userId") || null;
    const language: string = localStorage.getItem("lang")
      ? String(localStorage.getItem("lang"))
      : this.translate.defaultLang;

    if (token && id) {
      return {
        headers: new HttpHeaders()
          .set("lang", language)
          .set("Authorization", "Bearer " + token),
      };
    }
    return null;
  }

  public get<TResponse>(type: string, params?: any): Observable<TResponse> {
    return this.http.get<TResponse>(environment.BASE_URL + type, {
      params: { ...params },
      ...this.getUploadHeaders(),
    });
  }

  public postForOTP<TInput, TResponse>(
    type: string,
    data: TInput
  ): Observable<TResponse> {
    return this.http.post<TResponse>(environment.BASE_URL + type, null, {
      ...this.getUploadHeaders(),
    });
  }

  public post<TInput, TResponse>(
    type: string,
    data: TInput
  ): Observable<TResponse> {
    // if (type === 'File/Upload') {
    //   return this.http.post<TResponse>(environment.BASE_FILE_URL + type, data, {
    //     ...this.getUploadHeaders(),
    //   });
    // }
    return this.http.post<TResponse>(environment.BASE_URL + type, data ?? {}, {
      ...this.getUploadHeaders(),
    });
  }

  public put<TInput, TResponse>(
    type: string,
    data: TInput,
    params?: any
  ): Observable<TResponse> {
    return this.http.put<TResponse>(environment.BASE_URL + type, data, {
      params: { ...params },
      ...this.getUploadHeaders(),
    });
  }

  public delete<TInput, TResponse>(
    type: string,
    id?: TInput
  ): Observable<TResponse> {
    if (id) {
      return this.http.delete<TResponse>(environment.BASE_URL + type + id, {
        ...this.getUploadHeaders(),
      });
    } else {
      return this.http.delete<TResponse>(environment.BASE_URL + type, {
        ...this.getUploadHeaders(),
      });
    }
  }
}
