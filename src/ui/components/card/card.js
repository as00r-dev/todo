import { Div } from "../../elem/div/div";
import { Heading } from "../../elem/heading/heading";
import { Paragraph } from "../../elem/paragraph/paragraph";

export const Card = (cardObj) => {
	const card = Div();
	card.addClasses(["container", "card"]);

	const cardName = Heading(3);
	cardName.addContent(cardObj.name);
	cardName.render(card.getElem, "afterbegin");

	const cardType = Paragraph();
	cardType.addContent(cardObj.type);
	cardType.render(cardName.getElem, "afterend");

	return card;
};
