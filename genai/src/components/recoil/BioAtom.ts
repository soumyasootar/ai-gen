import { atom } from "recoil";

interface BioState {
    output: { name: string }[];
    loading: boolean;
}

export const bioAtom = atom<BioState>({
    key: "bioAtom",
    default: {
        output: [], // This can also be [{ name: "" }] if needed
        loading: false
    }
});