export const ActionType = {
  CHANGE_HISTORY: 'save-history',
};

export const ActionCreator = {
  changeHistory: (operation) => ({
    type: ActionType.CHANGE_HISTORY,
    payload: operation,
  }),
};
