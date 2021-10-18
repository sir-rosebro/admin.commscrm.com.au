import { uiActionTypes } from '../actionTypes';


export const openModal = () => { return { type: uiActionTypes.OPEN_MODAL }};
export const closeModal = () => { return { type: uiActionTypes.CLOSE_MODAL }};

export const openAdvancedBox = () => { return { type: uiActionTypes.OPEN_ADVANCED_BOX }};
export const closeAdvancedBox = () => { return { type: uiActionTypes.CLOSE_ADVANCED_BOX }};

export const openEditBox = () => { return { type: uiActionTypes.OPEN_EDIT_BOX }};
export const closeEditBox = () => { return { type: uiActionTypes.CLOSE_EDIT_BOX }};

export const openPanel = () => { return { type: uiActionTypes.OPEN_PANEL }};
export const closePanel = () => { return { type: uiActionTypes.CLOSE_PANEL }};
export const collapsePanel = () => { return { type: uiActionTypes.COLLAPSE_PANEL }};

export const openCollapsedBox = () => { return { type: uiActionTypes.OPEN_BOX }};
export const closeCollapsedBox = () => { return { type: uiActionTypes.CLOSE_BOX }};
export const collapseCollapsedBox = () =>{ return { type: uiActionTypes.COLLAPSE_BOX }};

export const openReadBox = () => { return { type: uiActionTypes.OPEN_READ_BOX }};
export const closeReadBox = () => { return { type: uiActionTypes.CLOSE_READ_BOX }};
export const collapseReadBox = () => { return { type: uiActionTypes.COLLAPSE_READ_BOX }};

