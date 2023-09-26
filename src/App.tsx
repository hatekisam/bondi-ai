import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Main from "./components/Main"
import Dashboard from "./pages/Dashboard"
import Database from "./pages/Database"
import Creation from "./pages/Creation"
import Settings from "./pages/Settings"
import AudioFile from "./pages/AudioFile"
import Folder from "./pages/Folder"
function App() {


	return (
		<div className="bg-[#FBFBFB] w-screen h-screen overflow-hidden">
			<Router>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/" element={<Main />}>
						<Route path="/" element={<Dashboard />} />
						<Route path="/creation" element={<Creation />} />
						<Route path="/creation/file/:id" element={<AudioFile />} />
						<Route path="/creation/folder/:id" element={<Folder />} />
						<Route path="/database" element={<Database />} />
						<Route path="/settings" element={<Settings />} />
					</Route>
				</Routes>
			</Router>
		</div>
	)
}

export default App
