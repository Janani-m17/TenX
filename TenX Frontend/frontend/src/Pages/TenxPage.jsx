import React, { useState } from "react";
import Calendar from "../components/Calendar";
import MyTasks from "../components/MyTasks";
import MyCategories from "../components/MyCategories";
import MyTracking from "../components/MyTracking";
import TaskFormModal from "../components/TaskFormModal";
import "../styles/tenxpage.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Head from "../components/Head";

const TenxPage = () => {
	const [selectedSection, setSelectedSection] = useState("Dashboard");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedDate, setSelectedDate] = useState(null);
	const navigate = useNavigate();
	

	return (
		<div className='app-container'>
			<Sidebar
				selectedSection={selectedSection}
				onSectionSelect={setSelectedSection}
			/>
			<div className="cat-container">
			<div className='main-content'>
				{/* <div className='top-bar'>
				    <p className='quote-text'>
						From To-Do to Done – <span className="highlight">TenX Gets You There!</span>
					</p>
					<div className="header-actions">
						<button className="new-task-btn" onClick={() => setIsModalOpen(true)}>+ New task</button>
						<div className="user-profile">
							<span onClick={() => navigate("/profile")} style={{ cursor: "pointer" }}>👤</span>
						</div>
				</div>
				</div> */}
				<Head />
				<div className='dashboard-grid'>
					<div className='dashboard-left'>
						<Calendar onDateSelect={setSelectedDate} />
						<MyCategories />
					</div>
					<div className='dashboard-right'>
						<MyTasks selectedDate={selectedDate} />
						<MyTracking />
					</div>
				</div>
			</div>
			<TaskFormModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
			</div>
		</div>
	);
};

export default TenxPage;