import { ElementFactory } from "../../elem-helper/elem-helper";

export const Heading = (type) => {
	return ElementFactory(`h${type}`);
};
