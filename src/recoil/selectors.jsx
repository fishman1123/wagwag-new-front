import {selector} from "recoil";


export const dataFetch = selector({
    key: "dataFetch",
    get: async(targetUrl) => {
        const data = await fetch({targetUrl})
        return data.json();
    },
});