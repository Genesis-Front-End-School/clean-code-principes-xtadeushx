import { ENV, StorageKey, HttpHeader } from '../../common/enums/enums';
import { storage } from '../../services/services';

type AuthToken = string | null;



class ApiClient {
  private async _getToken(): Promise<void> {
    const auth: AuthToken = storage.getItem(StorageKey.TOKEN);
    if (auth) return;

    try {
      const resp = await fetch(ENV.TOKEN_PATH);

      if (!resp.ok) {
        throw new Error(`${resp.status} server error`);
      }

      const { token } = await resp.json();
      localStorage.setItem(StorageKey.TOKEN, token);
    } catch (error) {
      console.log(error);
    }
  }

  public async get<T>(url: string): Promise<T> {
    await this._getToken();

    const token: AuthToken = storage.getItem(StorageKey.TOKEN);
    const headers = new Headers();
    if (token) {
      headers.append(HttpHeader.CONTENT_TYPE, 'application/json');
      headers.append(HttpHeader.AUTHORIZATION, `Bearer ${token}`);
    }

    try {
      const response = await fetch(url, { headers });
      return response.json();
    } catch (error) {
      return this.mapError(error);
    }
  }

  private mapError(error: any): any {
    console.log(error);
    if (error.status === 401) {
      storage.removeItem(StorageKey.TOKEN);
    }
    throw error;
  }
}

export { ApiClient };