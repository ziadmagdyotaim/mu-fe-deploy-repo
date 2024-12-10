import { L1Header } from "@/components/L1";

const L1 = ({ children }) => {
  return (
    <section>
      <L1Header />

      {children}
    </section>
  );
};

export default L1;
