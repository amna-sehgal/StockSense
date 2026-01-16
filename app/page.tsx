import NavBar from './components/Navbar/navbar'
import CursorGlow from './components/LandingPage/cursorGlow'
import LandingPage from './components/LandingPage/landingPage'
import Problem from './components/LandingPage/problem'
import Solution from './components/LandingPage/solution'
import HowItWorks from './components/LandingPage/HowItWorks'
import Features from './components/LandingPage/features'
import Value from './components/LandingPage/Value'
import FinalCTA from './components/LandingPage/FinalCTA'
import InsightsSummary from './components/Insights/insight'

export default function Home() {
  return (
    <>
      <CursorGlow />
      <NavBar />
      <LandingPage />
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      <Value />
      <FinalCTA />
    </>
  )
}



