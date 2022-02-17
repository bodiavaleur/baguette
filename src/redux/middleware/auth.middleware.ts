import {Middleware} from '@reduxjs/toolkit';
import {storage} from '~helpers/storage';
import {authLogout} from '~redux/auth/auth.thunks';
import {removeAuthentication} from '~redux/app/app.slice';

export const authMiddleware: Middleware = store => next => async action => {
  const isRejected = action.meta?.requestStatus === 'rejected';

  if (isRejected) {
    const tokens = await storage.token.get();

    if (!tokens) {
      store.dispatch(authLogout());
      store.dispatch(removeAuthentication());
    }
  }

  next(action);
};
