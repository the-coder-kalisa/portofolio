import { atom, selector } from "recoil";

export const modes = atom({key: "modes", default: true});
export const phones = atom({key: "phones", default: "desktop"});
export const fonts = selector({
    key: "font",
    get: ({get}) => {
        const text = get(phones);
        return !(text === "phone" || text==="tablet");
    }
})