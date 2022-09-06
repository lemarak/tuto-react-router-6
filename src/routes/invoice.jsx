import { useParams } from "react-router";
import { getInvoice } from "../data";

const invoice = () => {
  let params = useParams();
  const invoice = getInvoice(parseInt(params.invoiceId));

  return (
    <main>
      <h2>Total Due : {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </main>
  );
};

export default invoice;
