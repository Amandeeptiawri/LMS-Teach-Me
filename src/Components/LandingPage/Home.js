import React from 'react'
 import Banner1 from "../Banner1";
import { Header } from './Header';

import Ourcoursesmain from '../Allcourses/Ourcoursesmain';
import TeachersList from '../TeachersList';

function Home() {
  return (
    <>
    <Header/>
    <Banner1/>
  <Ourcoursesmain></Ourcoursesmain>
  <TeachersList></TeachersList>
   
    
    </>
  )
}

export default Home