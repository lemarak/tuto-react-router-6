import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import QueryNavLink from "../components/QueryNavLink";
import { getInvoices } from "../data";

const invoices = () => {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();

  const inputChange = (event) => {
    let filter = event.target.value;
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <nav style={{ borderRight: "solid 1px", padding: "1rem" }}>
        <input
          value={searchParams.get("filter") || ""}
          onChange={inputChange}
        />
        {invoices
          .filter((invoice) => {
            const filter = searchParams.get("filter");
            if (!filter) {
              return true;
            }
            const name = invoice.name.toLocaleLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((invoice) => {
            return (
              <QueryNavLink
                style={({ isActive }) => {
                  return {
                    display: "block",
                    margin: "1rem 0",
                    color: isActive ? "red" : "",
                  };
                }}
                to={`/invoices/${invoice.number}`}
                key={invoice.number}
              >
                {invoice.name}
              </QueryNavLink>
            );
          })}
      </nav>
      <Outlet />
    </div>
  );
};

export default invoices;
