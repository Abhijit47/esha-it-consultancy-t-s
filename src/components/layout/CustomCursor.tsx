'use client'

import React, { useEffect, useRef, useState } from 'react'
import './cursor.css'

interface CustomCursorProps {
  onTitleMouseEnter?: () => void
  onTitleMouseLeave?: () => void
}

const CustomCursor: React.FC<CustomCursorProps> = () => {
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const [isCursorHovering, setIsCursorHovering] = useState(false)
  const [isCursorBig, setIsCursorBig] = useState(false)
  const positionRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>(null)

  const updateCursorPosition = () => {
    if (outerRef.current && innerRef.current) {
      outerRef.current.style.left = `${positionRef.current.x}px`
      outerRef.current.style.top = `${positionRef.current.y}px`
      innerRef.current.style.left = `${positionRef.current.x}px`
      innerRef.current.style.top = `${positionRef.current.y}px`
    }
    animationRef.current = requestAnimationFrame(updateCursorPosition)
  }

  const handleMouseMove = (e: MouseEvent) => {
    positionRef.current = { x: e.clientX, y: e.clientY }
  }

  const handleCursorHover = () => {
    setIsCursorHovering(true)
  }

  const handleCursorLeave = () => {
    setIsCursorHovering(false)
  }

  const handleMouseEnterTitle = () => {
    setIsCursorBig(true)
  }

  const handleMouseLeaveTitle = () => {
    setIsCursorBig(false)
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)

    const titleElements = document.querySelectorAll('h1, p, h2, h3, h4, h5, h6')
    const clickableElements = document.querySelectorAll('a, button')

    titleElements.forEach((titleElement) => {
      titleElement.addEventListener('mouseover', handleMouseEnterTitle)
      titleElement.addEventListener('mouseout', handleMouseLeaveTitle)
    })

    clickableElements.forEach((clickableElement) => {
      clickableElement.addEventListener('mouseenter', handleCursorHover)
      clickableElement.addEventListener('mouseleave', handleCursorLeave)
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }

      titleElements.forEach((titleElement) => {
        titleElement.removeEventListener('mouseover', handleMouseEnterTitle)
        titleElement.removeEventListener('mouseout', handleMouseLeaveTitle)
      })

      clickableElements.forEach((clickableElement) => {
        clickableElement.removeEventListener('mouseenter', handleCursorHover)
        clickableElement.removeEventListener('mouseleave', handleCursorLeave)
      })
    }
  }, [])

  useEffect(() => {
    animationRef.current = requestAnimationFrame(updateCursorPosition)
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <>
      <div
        ref={outerRef}
        className={`mouseCursor cursor-outer ${
          isCursorHovering ? 'cursor-hover' : ''
        } ${isCursorBig ? 'cursor-big' : ''}`}
      />
      <div
        ref={innerRef}
        className={`mouseCursor cursor-inner ${
          isCursorHovering ? 'cursor-hover' : ''
        } ${isCursorBig ? 'cursor-big' : ''}`}
      >
        <span className={''}>E</span>
      </div>
    </>
  )
}

export default CustomCursor
