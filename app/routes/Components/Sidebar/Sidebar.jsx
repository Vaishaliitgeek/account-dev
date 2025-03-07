import React from 'react';
import './Sidebar.css';
import { CiHome } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { VscCallIncoming } from "react-icons/vsc";
import { Link } from '@remix-run/react';
import { CiUser } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className="main-sidebar-div">
      <div className="inner-sidebar-nav">
        <Link>
        <div className="side-icon">
        <CiHome />
        <p>Home</p>
        </div>
       </Link>
        <Link><div className="side-icon">
        <FiUsers/>
        <p>Partner</p>
        </div></Link>
        <Link><div className="side-icon">
        <VscCallIncoming />
        <p>Support</p>
        </div></Link>
        <Link><div className="side-icon">
        <CiUser/>
        <p>Admin Chat</p>
        </div></Link>
      </div>
    </div>
  );
}

export default Sidebar;
