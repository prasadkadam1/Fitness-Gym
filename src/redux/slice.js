import { createSlice } from '@reduxjs/toolkit'
import logo from "../assets/images/logo.png"
const initialState = {
  about: {
    gymName: "fitnessGym",
    address: "Pune Maharashtra",
    phoneNumber: "+91-8149837983",
    emailId: "info@gym.com",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Etiam porta semmalesuada magna`,
    openingHours: "Monday - Friday : 6 AM to 10 PM " + " Saturday & Sunday : Closed",
    ownerDetails: { name: 'Prasad Kadam', designation: 'Founder' },
    description: `We Belive In "NO PAIN NO GAIN"`,
    gymLogo: logo,
  },
}

export const gymSlice = createSlice({
  name: 'gymApi',
  initialState,
  reducers: {
    increment: (state) => {
      console.log("inc func")
    },
    decrement: (state) => {
      console.log("dec func")
    },
    incrementByAmount: (state, action) => {
      console.log("inc func + amt")
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = gymSlice.actions

export default gymSlice.reducer