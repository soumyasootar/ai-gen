import { atom } from "recoil";

export const bioAtom = atom({
    key: "countAtom",
    default: {
        output: [{name: ""}],
        loading: false
    }
})