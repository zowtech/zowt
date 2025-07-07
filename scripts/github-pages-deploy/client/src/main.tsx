import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./utils/security"; // Initialize security monitoring

createRoot(document.getElementById("root")!).render(<App />);
