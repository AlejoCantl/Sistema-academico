import { Roboto } from "next/font/google";
import styles from "./dashboard.module.css";
import DashboardHeader from "../components/dashboard/DashboardHeader";
const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
    variable: "--font-roboto",
    display: "swap",
    fallback: ["system-ui", "sans-serif"],
});
export const metadata = {
    title: "Dashboard Sistema academico",
    description: "Dashboard para las gestiones del sistema academico",
};

export default function DashboardLayout({ children }) {
    return (
        <>
        <DashboardHeader/>
        <main className={`${roboto.variable} ${styles.mainContainer}`}>
            <div className={styles.dashboardContainer}>
            {children}
            </div>
        </main>
        </>
    );
}