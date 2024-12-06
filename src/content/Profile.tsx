import React, { useState } from 'react'
import { FaTumblrSquare } from 'react-icons/fa'
import About from '../pages/About'
import Services from '../pages/Services'
import CertificateSlider from '../pages/Certification'
import WorkExperience from '../pages/Work'

interface Tabs{ 
id: string
label:string
content: React.ReactNode
}
const Profile = () => {
const [activeTab, setActiveTab] = useState<string>('tab1')

const tabs : Tabs[] = [
  {id:'tab1', label: 'About', content:<About/>},
  {id:'tab2', label: 'My Service', content:<Services/>},
  {id:'tab3', label: 'Certification', content:<CertificateSlider/>},
  {id:'tab4', label: 'Work Experience', content:<WorkExperience/>},
] 

  return (<div
    className="mx-auto w-screen bg-black flex justify-center items-center py-8"
    id="profile"
  >
    <div className="container max-h-1/2 shadow-lg bg-navy drop-shadow-lg rounded-sm md:relative z-40 -m-20">
      {/* Tabs */}
      <div className="w-full mx-auto mt-4">
        {/* Dropdown untuk Mobile */}
        <div className="md:hidden px-4">
          <select
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-600 font-montserrat font-semibold"
          >
            {tabs.map((tab) => (
              <option key={tab.id} value={tab.id}>
                {tab.label}
              </option>
            ))}
          </select>
        </div>
  
        {/* Tabs untuk Desktop */}
        <div className="hidden md:flex justify-around">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab-btn px-6 py-2 text-sm md:text-base text-gray-600 hover:text-navbar border-1 rounded-md font-montserrat font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-color4 text-dark'
                  : 'border-transparent text-white'
              }`}
            >
              {tab.label.toLocaleUpperCase()}
            </button>
          ))}
        </div>
  
        {/* Tab Content */}
        <div className="p-4 md:p-6">
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <div key={tab.id} className="tab-content">
                  {tab.content}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Profile
