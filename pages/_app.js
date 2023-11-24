import "../styles/globals.css";

// componets
import Layout from "../components/Layout";
import Transition from "../components/Transition";
import { UserProvider } from "../data/UserProvider";
// router
import { useRouter } from "next/router";

// framer motion

import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <UserProvider>
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
