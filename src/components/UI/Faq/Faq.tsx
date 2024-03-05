import {FC} from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import {default as FaqModel} from "@/app/models/Faq";
import styles from "./Faq.module.scss";

type Props = {
    faqs: FaqModel[],
}

const Faq: FC<Props> = ({faqs}) => {
    return (
        <Accordion className={styles.accordion}>
            {faqs.map(faq => (
                <AccordionItem key={faq.id}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            {faq.question}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            {faq.answer}
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default Faq;
