import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './project-dashboard-biz.css'

const ProjectDashboardBiz = (props) => {
  return (
    <div className="project-dashboard-biz-container">
      <Helmet>
        <title>Project-Dashboard-biz - LocalBoost</title>
        <meta
          property="og:title"
          content="Project-Dashboard-biz - LocalBoost"
        />
      </Helmet>
      <div className="project-dashboard-biz-container1">
        <button className="project-dashboard-biz-button button">
          Create a digital menu
        </button>
        <button className="project-dashboard-biz-button1 button">
          Create an online delivery system
        </button>
        <h1 className="project-dashboard-biz-text">My Projects</h1>
        <span className="project-dashboard-biz-text01">Manage projects</span>
        <span className="project-dashboard-biz-text02">Billing overview</span>
      </div>
      <div className="project-dashboard-biz-container2">
        <img
          alt="image"
          src="/playground_assets/timeline%20template-200w.png"
          className="project-dashboard-biz-image"
        />
        <span className="project-dashboard-biz-text03">STAGE 1: Proposal</span>
        <span className="project-dashboard-biz-text04">STAGE 2: Prototype</span>
        <Link
          to="/assignments-milestone"
          className="project-dashboard-biz-navlink"
        >
          <span>STAGE 3: Create interactive</span>
          <br></br>
          <span>app</span>
        </Link>
        <span className="project-dashboard-biz-text08">
          STAGE 4: Launch app
        </span>
        <Link
          to="/assignments-milestone"
          className="project-dashboard-biz-navlink1"
        >
          See 3 new updates
        </Link>
        <h1 className="project-dashboard-biz-text09">Create a digital menu</h1>
        <div className="project-dashboard-biz-container3">
          <div className="project-dashboard-biz-container4">
            <span className="project-dashboard-biz-text10">
              <span>Student:</span>
              <br></br>
              <span>Jessica Tan</span>
            </span>
          </div>
          <div className="project-dashboard-biz-container5">
            <span className="project-dashboard-biz-text14">
              <span>Project due date:</span>
              <br></br>
              <span>unspecified</span>
            </span>
          </div>
          <div className="project-dashboard-biz-container6">
            <span className="project-dashboard-biz-text18">
              <span>Total budget: $150</span>
              <br></br>
              <span>(link to cost breakdown)</span>
            </span>
          </div>
        </div>
        <button className="button">Chat with Jessica</button>
      </div>
    </div>
  )
}

export default ProjectDashboardBiz
