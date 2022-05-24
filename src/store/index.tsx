import { atom, selector } from "recoil"


export const textState = atom({
  key: "textState",
  default: ""
})


export const textlength = selector({
  key: "textlength",
  get: ({ get }) => {
    let text = get(textState)
    return text.length
  }
})