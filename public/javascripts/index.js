import {createMemberContainer, memberCards} from "./memberContainer.js";
import { formChecker } from "./validation.js";
import {getActivity,getSports} from './selectorElementsGet.js';
import {backBtn} from "./backBtn.js"
import { addMembers } from "./addMembers.js";
import { updateMembers } from "./updateMembers.js";
// Dynamic HTML element creation


export const baseUrl = "http://localhost:3000/users";

memberCards();
formChecker();
// addEventListenerByClass("#backbtnadd","click",hideEdit());

backBtn();

addMembers();
updateMembers();
