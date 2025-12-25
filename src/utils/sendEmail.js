import emailjs from "@emailjs/browser";

export const sendEmail = async (responses) => {
  return emailjs.send(
    "service_6gg1719",
    "template_pbi35ej",
    {
      data: JSON.stringify(responses, null, 2)
    },
    "QmvPLYPcmBtfFZObo"
  );
};
