type AppState = {
  toggleMenu: boolean;
  scrollPage: boolean;
  modal: boolean;
  about: boolean;
  clientsModal: boolean;
  loader: boolean;
  thxModal: boolean;
};

export const initialState: AppState = {
  toggleMenu: false,
  scrollPage: true,
  modal: false,
  about: true,
  thxModal: false,
  clientsModal: false,
  loader: true,
};