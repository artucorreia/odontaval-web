import Cookies from "js-cookie";
import { xAxisDefaultProps } from "recharts/types/cartesian/XAxis";

export function setFlashData(data:any) {
    Cookies.set(`flash`, JSON.stringify(data));
}

export function getFlashData() {
    const data = Cookies.get(`flash`);
    if (data) {
        Cookies.remove(`flash`);
        return JSON.parse(data);
    }
    return null;
}

export function clearFlashData() {
    Cookies.remove(`flash`);
}