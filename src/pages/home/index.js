import React from "react";
import styles from "./Home.module.css";
import TransactionForm from "../../components/transaction";
import { useAuthContext } from "../../hooks/UseAuthContext";
import { useCollection } from "../../hooks/UseCollection";
import TransactionList from "../../components/transactionList";

const Home = () => {
  const { user } = useAuthContext();
  const { documents, error } = useCollection(
    "transactions",
    ["uid", "==", user.uid],
    ["createdAt", "desc"]
  );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error && <p>{error}</p>}
        {documents && <TransactionList documents={documents} />}
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
};

export default Home;
