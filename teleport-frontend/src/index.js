import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import ListingsCreatebusinesslisting from './views/listings-createbusinesslisting'
import ListingsBusinesslistings from './views/listings-businesslistings'
import ListingsStudentsaved from './views/listings-studentsaved'
import Profile from './views/profile'
import AssignmentsMilestone from './views/assignments-milestone'
import ListingsFulldesc from './views/listings-fulldesc'
import RegistrationCompany from './views/registration-company'
import ARCHIVEDMatching from './views/archive-matching'
import SignIn from './views/sign-in'
import ListingsCategorisedpostings from './views/listings-categorisedpostings'
import ListingsStudent from './views/listings-student'
import ListingsNoLogin from './views/listings-no-login'
import GPTChatEmpty from './views/gp-chat-empty'
import GPTChatSampleInteraction from './views/gp-chat-sample-interaction'
import Home from './views/home'
import RegistrationInitial from './views/registration-initial'
import ARCHIVEDRegistrationMentor from './views/archive-registration-mentor'
import ProjectDashboardBiz from './views/project-dashboard-biz'
import RegistrationStudent from './views/registration-student'
import ProjectDashboardStudent from './views/project-dashboard-student'
import AssignmentsMilestoneReview from './views/assignments-milestone-review'
import VerifyTimeline from './views/verify-timeline'
import GPT from './views/gpt'

import ChatWidget from './components/chat-widget'

const App = () => {
  return (
    <Router>
      <div>
        <Route
          component={ListingsCreatebusinesslisting}
          exact
          path="/listings-createbusinesslisting"
        />
        <Route
          component={ListingsBusinesslistings}
          exact
          path="/listings-businesslistings"
        />
        <Route
          component={ListingsStudentsaved}
          exact
          path="/listings-studentsaved"
        />
        <Route component={Profile} exact path="/profile" />
        <Route
          component={AssignmentsMilestone}
          exact
          path="/assignments-milestone"
        />
        <Route component={ListingsFulldesc} exact path="/listings-fulldesc" />
        <Route
          component={RegistrationCompany}
          exact
          path="/registration-company"
        />
        <Route component={ARCHIVEDMatching} exact path="/archive-matching" />
        <Route component={SignIn} exact path="/sign-in" />
        <Route
          component={ListingsCategorisedpostings}
          exact
          path="/listings-categorisedpostings"
        />
        <Route component={ListingsStudent} exact path="/listings-student" />
        <Route component={ListingsNoLogin} exact path="/listings-no-login" />
        <Route component={GPTChatEmpty} exact path="/gp-chat-empty" />
        <Route
          component={GPTChatSampleInteraction}
          exact
          path="/gp-chat-sample-interaction"
        />
        <Route component={Home} exact path="/" />
        <Route
          component={RegistrationInitial}
          exact
          path="/registration-initial"
        />
        <Route
          component={ARCHIVEDRegistrationMentor}
          exact
          path="/archive-registration-mentor"
        />
        <Route
          component={ProjectDashboardBiz}
          exact
          path="/project-dashboard-biz"
        />
        <Route
          component={RegistrationStudent}
          exact
          path="/registration-student"
        />
        <Route
          component={ProjectDashboardStudent}
          exact
          path="/project-dashboard-student"
        />
        <Route
          component={AssignmentsMilestoneReview}
          exact
          path="/assignments-milestone-review"
        />
        <Route
          component={VerifyTimeline}
          exact
          path="/verify-timeline"
        />
        <Route
          component={ChatWidget}
          exact
          path="/chat-widget"
        />
        <Route
          component={GPT}
          exact
          path="/gpt"
        />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
