export const ActionType = {
  CHANGE_HISTORY: 'save-history',
  DELETE_HISTORY: 'delete-history',
};

export const ActionCreator = {
  changeHistory: (operation) => ({
    type: ActionType.CHANGE_HISTORY,
    payload: operation,
  }),
  deleteHistory: () => ({
    type: ActionType.DELETE_HISTORY,
  }),
};
