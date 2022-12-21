import { ElementFactory } from "../../factory/elem-factory";

export const Heading = (type) => {
	return ElementFactory(`h${type}`);
};
