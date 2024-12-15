'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, GraduationCap, Download } from 'lucide-react'
import { useState } from 'react'

const examResults = [
  { id: 1, name: 'হাফ ইয়ারলি পরীক্ষা ২০২৩', date: '১৫ জুন, ২০২৩', link: '#' },
  { id: 2, name: 'বার্ষিক পরীক্ষা ২০২৩', date: '১০ ডিসেম্বর, ২০২৩', link: '#' },
  { id: 3, name: 'প্রি-টেস্ট পরীক্ষা ২০২৪', date: '২০ ফেব্রুয়ারি, ২০২৪', link: '#' },
]

export default function ExamResultsPage() {
  const [selectedExam, setSelectedExam] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-green-100 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" className="inline-flex items-center text-teal-600 hover:text-teal-800 mb-8">
          <ArrowLeft className="mr-2" /> হোম পেজে ফিরে যান
        </Link>
        <h1 className="text-4xl font-bold text-teal-800 mb-8 flex items-center">
          <GraduationCap className="mr-4" /> পরীক্ষার ফলাফল
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">পরীক্ষা নির্বাচন করুন</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {examResults.map((exam) => (
              <motion.div
                key={exam.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 rounded-lg shadow-md cursor-pointer transition-colors duration-300 ${
                  selectedExam === exam.id ? 'bg-teal-500 text-white' : 'bg-teal-100 hover:bg-teal-200'
                }`}
                onClick={() => setSelectedExam(exam.id)}
              >
                <h3 className="text-lg font-semibold mb-2">{exam.name}</h3>
                <p className="text-sm">{exam.date}</p>
              </motion.div>
            ))}
          </div>
          {selectedExam && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              <h3 className="text-xl font-semibold text-teal-600 mb-4">ফলাফল ডাউনলোড করুন</h3>
              <Link href={examResults.find(exam => exam.id === selectedExam)?.link || '#'} passHref>
                <button className="bg-teal-500 text-white px-6 py-3 rounded-lg flex items-center hover:bg-teal-600 transition-colors duration-300">
                  <Download className="mr-2" />
                  ফলাফল ডাউনলোড করুন (PDF)
                </button>
              </Link>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

