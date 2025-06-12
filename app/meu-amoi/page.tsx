'use client'

import { useState, useEffect } from 'react'

const riddles = [
  { clue: "Onde o cu é esfregado", answer: "ONE" },
  { clue: "Onde estraga mas conserta", answer: "7" },
  { clue: "Onde trabalha depois do trabalho", answer: "1" },
  { clue: "Onde a cabeça não bate", answer: "TWO" },
  { clue: "Onde toca a música eterna", answer: "DOIS" },
  { clue: "Onde o arrasta-pé é solicitado", answer: "2" }
]

export default function MeuAmor() {
  const [answers, setAnswers] = useState<string[]>(Array(6).fill(''))
  const [currentPhase, setCurrentPhase] = useState<'riddles' | 'final-clue' | 'message'>('riddles')
  const [finalAnswer, setFinalAnswer] = useState('')
  const [isAnimating, setIsAnimating] = useState(false)

  const normalizeAnswer = (answer: string) => {
    return answer.toLowerCase().trim()
  }

  const checkAnswer = (input: string, expected: string) => {
    const normalizedInput = normalizeAnswer(input)
    const normalizedExpected = normalizeAnswer(expected)

    // Handle special cases for string answers - only accept text variations, not numbers
    if (normalizedExpected === 'one') {
      return ['one'].includes(normalizedInput)
    }
    if (normalizedExpected === 'two') {
      return ['two'].includes(normalizedInput)
    }
    if (normalizedExpected === 'dois') {
      return ['dois'].includes(normalizedInput)
    }

    return normalizedInput === normalizedExpected
  }

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...answers]
    newAnswers[index] = value
    setAnswers(newAnswers)
  }

  const allAnswersCorrect = riddles.every((riddle, index) =>
    checkAnswer(answers[index], riddle.answer)
  )

  useEffect(() => {
    if (allAnswersCorrect && currentPhase === 'riddles') {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentPhase('final-clue')
        setIsAnimating(false)
      }, 1000)
    }
  }, [allAnswersCorrect, currentPhase])

  const handleFinalSubmit = () => {
    if (normalizeAnswer(finalAnswer) === 'boa mamainzinha') {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentPhase('message')
        setIsAnimating(false)
      }, 1000)
    }
  }

  if (currentPhase === 'message') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 to-rose-200 flex items-center justify-center p-4">
        <div className="text-center animate-pulse">
          <div className="text-6xl mb-8">💕</div>
          <h1 className="text-4xl font-bold text-rose-600 mb-4">
            Na saúde e na doença...
          </h1>
          <div className="text-6xl">💍</div>
        </div>
      </div>
    )
  }

  if (currentPhase === 'final-clue') {
    return (
      <div className={`min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 transition-all duration-1000 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        <div className="pt-8 pb-4 text-center">
          <div className="text-7xl font-bold text-amber-600 mb-2 animate-pulse">
            17/12/2022
          </div>
        </div>
        <div className="flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
            <div className="text-6xl mb-6 animate-bounce">🎁</div>
            <h1 className="text-3xl font-bold text-amber-600 mb-8 animate-pulse">
              EMBAIXO DA CAMA?
            </h1>
            <div className="space-y-4">
              <input
                type="text"
                value={finalAnswer}
                onChange={(e) => setFinalAnswer(e.target.value)}
                placeholder="Digite a senha final..."
                className="w-full p-4 text-lg border-2 border-amber-300 rounded-xl focus:border-amber-500 focus:outline-none text-center"
                onKeyPress={(e) => e.key === 'Enter' && handleFinalSubmit()}
              />
              <button
                onClick={handleFinalSubmit}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-6 rounded-xl text-lg transition-colors"
              >
                Confirmar 💝
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-purple-100 to-pink-200 p-4 transition-all duration-1000 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8 pt-8">
          <div className="text-6xl mb-4">💖</div>
          <h1 className="text-2xl font-bold text-purple-600 mb-2">
            Caça ao Tesouro do Amor
          </h1>
          <p className="text-purple-500 text-sm">
            Encontre as pistas e complete a senha!
          </p>
        </div>

        <div className="space-y-6">
          {riddles.map((riddle, index) => {
            const isCorrect = checkAnswer(answers[index], riddle.answer)
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      {riddle.clue}
                    </p>
                    <input
                      type="text"
                      value={answers[index]}
                      onChange={(e) => handleAnswerChange(index, e.target.value)}
                      placeholder="Digite aqui..."
                      className={`w-full p-3 border-2 rounded-xl focus:outline-none transition-colors ${
                        isCorrect
                          ? 'border-green-400 bg-green-50 text-green-700'
                          : 'border-gray-300 focus:border-purple-400'
                      }`}
                    />
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    {isCorrect && (
                      <span className="text-green-500 text-xl animate-pulse">✓</span>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-8 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-4">
            <p className="text-sm text-gray-600 mb-2">Progresso</p>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-purple-400 to-pink-400 h-3 rounded-full transition-all duration-500"
                style={{ width: `${(riddles.filter((_, i) => checkAnswer(answers[i], riddles[i].answer)).length / riddles.length) * 100}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {riddles.filter((_, i) => checkAnswer(answers[i], riddles[i].answer)).length} / {riddles.length} completas
            </p>
          </div>
        </div>

        {allAnswersCorrect && (
          <div className="mt-6 text-center animate-bounce">
            <p className="text-purple-600 font-bold">
              🎉 Todas as pistas encontradas! 🎉
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
