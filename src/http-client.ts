import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class HttpClient {
  public async post(): Promise<{ ok: true }> {
    return Promise.resolve({ ok: true });
  }
}
