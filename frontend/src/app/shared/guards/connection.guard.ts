import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ConnectionService } from 'src/app/services/connection.service';

export const connectionGuard: CanActivateFn = (route, state) => {
  if (!inject(ConnectionService).isConnected()) inject(Router).navigate(['/']);
  return true;
};
