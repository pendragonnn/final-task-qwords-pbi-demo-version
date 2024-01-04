import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

export default function AccordionCustomAnimation({ questionAnswerDataDetail }) {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion data-aos="zoom-in-down" open={open === 1} animate={CUSTOM_ANIMATION} className="px-5 my-2">
        <AccordionHeader onClick={() => handleOpen(1)} className="text-orange-500 mx-auto px-3 hover:opacity-50 hover:text-orange-500">{questionAnswerDataDetail.question}</AccordionHeader>
        <AccordionBody className="px-3 text-base">
          {questionAnswerDataDetail.answer}
        </AccordionBody>
      </Accordion>
    </>
  );
}