'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Clock } from 'lucide-react'

const routine = [
  { day: 'রবিবার', classes: ['বাংলা', 'ইংরেজি', 'গণিত', 'বিজ্ঞান', 'সমাজ বিজ্ঞান'] },
  { day: 'সোমবার', classes: ['ইংরেজি', 'গণিত', 'বাংলা', 'ধর্ম', 'শারীরিক শিক্ষা'] },
  { day: 'মঙ্গলবার', classes: ['গণিত', 'বিজ্ঞান', 'ইংরেজি', 'বাংলা', 'কম্পিউটার'] },
  { day: 'বুধবার', classes: ['বিজ্ঞান', 'বাংলা', 'ইংরেজি', 'গণিত', 'চারু ও কারুকলা'] },
  { day: 'বৃহস্পতিবার', classes: ['সমাজ বিজ্ঞান', 'ইংরেজি', 'গণিত', 'বাংলা', 'বিজ্ঞান'] },
]

const timeslots = ['9:00 - 9:45', '10:00 - 10:45', '11:00 - 11:45', '12:00 - 12:45', '2:00 - 2:45']

export default function ClassRoutinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-teal-100 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-800 mb-8">
          <ArrowLeft className="mr-2" /> হোম পেজে ফিরে যান
        </Link>
        <h1 className="text-4xl font-bold text-green-800 mb-8 flex items-center">
          <BookOpen className="mr-4" /> ক্লাস রুটিন
        </h1>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-green-500 text-white">
                  <th className="py-3 px-4 text-left">দিন</th>
                  {timeslots.map((slot, index) => (
                    <th key={index} className="py-3 px-4 text-left">
                      <div className="flex items-center">
                        <Clock className="mr-2" size={16} />
                        {slot}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {routine.map((day, index) => (
                  <motion.tr
                    key={day.day}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={index % 2 === 0 ? 'bg-green-50' : 'bg-white'}
                  >
                    <td className="py-3 px-4 font-semibold">{day.day}</td>
                    {day.classes.map((subject, i) => (
                      <td key={i} className="py-3 px-4">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="bg-green-200 rounded p-2 text-center"
                        >
                          {subject}
                        </motion.div>
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

