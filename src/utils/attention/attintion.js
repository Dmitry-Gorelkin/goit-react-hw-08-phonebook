import { Notify } from 'notiflix';

export const attention = {
  warning: e => {
    Notify.warning(e, { timeout: 2000, clickToClose: true });
  },
  error: e => {
    Notify.failure(e, { timeout: 2000, clickToClose: true });
  },
};
