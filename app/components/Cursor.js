'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const follower = followerRef.current
    if (!dot || !follower) return

    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = mouseX + 'px'
      dot.style.top = mouseY + 'px'
    }

    const animate = () => {
      followerX += (mouseX - followerX) * 0.12
      followerY += (mouseY - followerY) * 0.12
      follower.style.left = followerX + 'px'
      follower.style.top = followerY + 'px'
      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMouseMove)
    animate()

    // Scale on hover
    const links = document.querySelectorAll('a, button')
    links.forEach(el => {
      el.addEventListener('mouseenter', () => {
        follower.style.width = '56px'
        follower.style.height = '56px'
        follower.style.opacity = '0.8'
      })
      el.addEventListener('mouseleave', () => {
        follower.style.width = '32px'
        follower.style.height = '32px'
        follower.style.opacity = '0.5'
      })
    })

    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  )
}
