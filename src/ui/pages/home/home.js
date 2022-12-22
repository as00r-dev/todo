// Import CSS
import "../../../css/reset.css";
import "../../../css/utils.css";

// Import root element
import { Root } from "../../components/root-element/root";

// Import Topbar, Sidebar and Dashboard
import { Topbar } from "../../components/topbar/topbar";
import { Sidebar } from "../../components/sidebar/sidebar";
import { Dashboard } from "../../components/dashboard/dashboard";

// Render root element
Root.render(document.body, "afterbegin");
