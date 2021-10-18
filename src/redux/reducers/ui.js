import { uiActionTypes } from "../actionTypes";

const initialState = {
  isModalOpen: false,
  isPanelCollapsed: false,
  isBoxCollapsed: false,
  isReadBoxOpen: true,
  isAdvancedBoxOpen: false,
  isEditBoxOpen: false,
};

const ui = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case uiActionTypes.OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
      };
    case uiActionTypes.CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
      };

    case uiActionTypes.OPEN_PANEL:
      return {
        ...state,
        isPanelCollapsed: false,
      };
    case uiActionTypes.CLOSE_PANEL:
      return {
        ...state,
        isPanelCollapsed: true,
      };
    case uiActionTypes.COLLAPSE_PANEL:
      return {
        ...state,
        isPanelCollapsed: !state.isPanelCollapsed,
      };
    case uiActionTypes.OPEN_BOX:
      return {
        ...state,
        isBoxCollapsed: true,
      };
    case uiActionTypes.CLOSE_BOX:
      return {
        ...state,
        isBoxCollapsed: false,
      };
    case uiActionTypes.COLLAPSE_BOX:
      return {
        ...state,
        isBoxCollapsed: !state.isBoxCollapsed,
      };
    case uiActionTypes.OPEN_READ_BOX:
      return {
        ...state,
        isAdvancedBoxOpen: false,
        isEditBoxOpen: false,
        isReadBoxOpen: true,
      };
    case uiActionTypes.CLOSE_READ_BOX:
      return {
        ...state,
        isReadBoxOpen: false,
      };
    case uiActionTypes.OPEN_ADVANCED_BOX:
      return {
        ...state,
        isReadBoxOpen: false,
        isEditBoxOpen: false,
        isAdvancedBoxOpen: true,
      };
    case uiActionTypes.CLOSE_ADVANCED_BOX:
      return {
        ...state,
        isAdvancedBoxOpen: false,
      };
    case uiActionTypes.OPEN_EDIT_BOX:
      return {
        ...state,
        isReadBoxOpen: false,
        isAdvancedBoxOpen: false,
        isEditBoxOpen: true,
      };
    case uiActionTypes.CLOSE_EDIT_BOX:
      return {
        ...state,
        isEditBoxOpen: false,
      };
    case uiActionTypes.COLLAPSE_READ_BOX:
      return {
        ...state,
        isReadBoxOpen: !state.isReadBoxOpen,
      };
    default: {
      return state;
      //throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default ui;
