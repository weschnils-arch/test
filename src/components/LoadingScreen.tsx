import { useEffect, useRef, useState } from 'react'

interface Props {
  onComplete: () => void
  onStart: () => void
  loaded: boolean
}

export default function LoadingScreen({ onComplete, onStart, loaded }: Props) {
  const [progress, setProgress] = useState(0)
  const [showButton, setShowButton] = useState(false)
  const [hidden, setHidden] = useState(false)
  const circleRef = useRef<SVGCircleElement>(null)
  const circumference = 2 * Math.PI * 36

  useEffect(() => {
    let current = 0
    const interval = setInterval(() => {
      current += Math.random() * 8 + 2
      if (current >= 100) {
        current = 100
        clearInterval(interval)
        setShowButton(true)
        onComplete()
      }
      setProgress(Math.min(Math.floor(current), 100))
    }, 50)

    return () => clearInterval(interval)
  }, [onComplete])

  useEffect(() => {
    if (circleRef.current) {
      const offset = circumference - (progress / 100) * circumference
      circleRef.current.style.strokeDashoffset = String(offset)
    }
  }, [progress, circumference])

  const handleStart = () => {
    setHidden(true)
    setTimeout(() => onStart(), 600)
  }

  return (
    <div className={`loading-screen ${hidden ? 'hidden' : ''}`}>
      {/* Dark layer content */}
      <div className="loading-progress">
        <svg viewBox="0 0 80 80">
          <circle
            ref={circleRef}
            cx="40"
            cy="40"
            r="36"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
          />
        </svg>
      </div>
      <div className="loading-percent">
        {String(progress).padStart(2, '0')}%
      </div>
      <button
        className={`loading-start ${showButton ? 'visible' : ''}`}
        onClick={handleStart}
        disabled={!showButton}
      >
        Start
      </button>

      {/* Red overlay that follows cursor */}
      <div className="loading-red-layer">
        <div className="loading-progress">
          <svg viewBox="0 0 80 80">
            <circle
              cx="40"
              cy="40"
              r="36"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - (progress / 100) * circumference}
              style={{ stroke: '#0d0d0d' }}
            />
          </svg>
        </div>
        <div className="loading-percent" style={{ color: '#0d0d0d' }}>
          {String(progress).padStart(2, '0')}%
        </div>
        <button
          className={`loading-start ${showButton ? 'visible' : ''}`}
          style={{
            borderColor: '#0d0d0d',
            color: '#0d0d0d',
          }}
          tabIndex={-1}
        >
          Start
        </button>
      </div>
    </div>
  )
}
