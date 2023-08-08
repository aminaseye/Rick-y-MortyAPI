"use strict";
var CharacterStatus;
(function (CharacterStatus) {
    CharacterStatus[CharacterStatus["Alive"] = 0] = "Alive";
    CharacterStatus[CharacterStatus["Dead"] = 1] = "Dead";
    CharacterStatus[CharacterStatus["Uknown"] = 2] = "Uknown";
})(CharacterStatus || (CharacterStatus = {}));
var CharacterGender;
(function (CharacterGender) {
    CharacterGender[CharacterGender["Male"] = 0] = "Male";
    CharacterGender[CharacterGender["Female"] = 1] = "Female";
    CharacterGender[CharacterGender["Unknown"] = 2] = "Unknown";
    CharacterGender[CharacterGender["Genderless"] = 3] = "Genderless";
})(CharacterGender || (CharacterGender = {}));
