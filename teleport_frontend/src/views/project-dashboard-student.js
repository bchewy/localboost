import React from 'react'

import { Helmet } from 'react-helmet'

import './project-dashboard-student.css'

const ProjectDashboardStudent = (props) => {
  return (
    <div className="project-dashboard-student-container">
      <Helmet>
        <title>Project-Dashboard-student - LocalBoost</title>
        <meta
          property="og:title"
          content="Project-Dashboard-student - LocalBoost"
        />
      </Helmet>
    </div>
  )
}

export default ProjectDashboardStudent
