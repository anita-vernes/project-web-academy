import { memberCards} from "./memberContainer.js";
import { formChecker } from "./validation.js";
import {backBtn} from "./backBtn.js"
import { addMembers } from "./addMembers.js";
import { updateMembers } from "./updateMembers.js";

export const baseUrl = "http://localhost:3000/users";
memberCards();
formChecker();
backBtn();
addMembers();
updateMembers();
