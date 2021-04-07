import { AuthService } from '../api/auth.service';

export function loadAuth(auth: AuthService): () => Promise<boolean> {
  return (): Promise<any> => {
    return auth.initGoogleAuth();
  };
}
