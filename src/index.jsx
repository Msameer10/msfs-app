import { createRoot } from "react-dom/client"
import { createElement } from "react"
import App from "./App"

//----create a root
const root = createRoot(document.getElementById("root"))

//----render markup to root
root.render(<App />)