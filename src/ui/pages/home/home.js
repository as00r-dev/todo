// Import CSS
import "../../../css/reset.css";
import "../../../css/utils.css";
import "../../../css/root.css";

// Import root element
import { Root } from "../../components/root-element/root";

// Import Topbar, Sidebar and Dashboard
import { Topbar } from "../../components/topbar/topbar";
import { Sidebar } from "../../components/sidebar/sidebar";
import { Dashboard } from "../../components/dashboard/dashboard";

// Render Page
Topbar.render(Root.getElem, "afterbegin");
Sidebar.render(Topbar.getElem, "afterend");
// Dashboard.render(Sidebar.getElem, "afterend");

// Render root element
Root.render(document.body, "afterbegin");
