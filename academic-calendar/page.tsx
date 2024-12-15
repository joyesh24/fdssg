'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'
import { useState } from 'react'

const months = [
  'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
  'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
]

const weekdays = ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহস্পতি', 'শুক্র', 'শনি']

const holidays = {
  '2025-01-01': 'নববর্ষ',
  '2025-02-21': 'শহীদ দিবস',
  '2025-03-26': 'স্বাধীনতা দিবস',
  '2025-04-14': 'বাংলা নববর্ষ',
  '2025-05-01': 'মে দিবস',
  '2025-08-15': 'জাতীয় শোক দিবস',
  '2025-12-16': 'বিজয় দিবস',
  '2025-12-25': 'বড়দিন',
}

export default function AcademicCalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(0)

  const renderCalendar = (month: number) => {
    const firstDay = new Date(2025, month, 1)
    const lastDay = new Date(2025, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDay = firstDay.getDay()

    let days = []
    for (let i = 0; i < startingDay; i++) {
      days.push(<div key={`empty-${i}`} className="text-center py-2"></div>)
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = `2025-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`
      const isHoliday = holidays[date]
      days.push(
        <div key={i} className={`text-center py-2 ${isHoliday ? 'bg-red-100 rounded' : ''}`}>
          <span className="font-bold">{i}</span>
          {isHoliday && <p className="text-xs text-red-600">{isHoliday}</p>}
        </div>
      )
    }

    return days
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-100 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" className="inline-flex items-center text-orange-600 hover:text-orange-800 mb-8">
          <ArrowLeft className="mr-2" /> হোম পেজে ফিরে যান
        </Link>
        <h1 className="text-4xl font-bold text-orange-800 mb-8 flex items-center">
          <Calendar className="mr-4" /> একাডেমিক ক্যালেন্ডার ২০২৫
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => setCurrentMonth(prev => (prev - 1 + 12) % 12)}
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            >
              পূর্ববর্তী
            </button>
            <h2 className="text-2xl font-bold text-orange-800">{months[currentMonth]}</h2>
            <button
              onClick={() => setCurrentMonth(prev => (prev + 1) % 12)}
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            >
              পরবর্তী
            </button>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {weekdays.map(day => (
              <div key={day} className="text-center font-bold text-orange-800">{day}</div>
            ))}
            {renderCalendar(currentMonth)}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

