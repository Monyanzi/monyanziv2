# AI-Powered UI Animation Reference

Production-ready patterns for GSAP and Motion (Framer Motion). Use with Gemini, Claude, or GPT to generate advanced animations.

---

## Library Selection

| Use Case | Library | Reason |
|----------|---------|--------|
| React component interactions | **Motion** | Built for React, gesture props, AnimatePresence |
| Scroll-driven animations | **GSAP + ScrollTrigger** | Pinning, scrubbing, snapping |
| Timeline sequences | **GSAP** | Position parameter, nesting, labels |
| Spring physics | **Motion** | Native spring transitions |
| Exit/unmount animations | **Motion** | `AnimatePresence` wrapper |

---

## Motion (Framer Motion)

### Installation
```bash
npm install motion
```

### Core Imports
```tsx
import { motion, AnimatePresence } from "motion/react"
```

---

### Basic Animation
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

---

### Gesture Animations
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
>
  Click me
</motion.button>
```

**Gesture Props:**
- `whileHover` - hover state
- `whileTap` - press state
- `whileFocus` - focus state
- `whileDrag` - drag state

---

### Spring Physics
```tsx
transition={{
  type: "spring",
  stiffness: 300,  // Higher = snappier
  damping: 20,     // Higher = less oscillation
  mass: 1          // Higher = heavier, slower
}}
```

**Presets:**
```tsx
transition={{ type: "spring", bounce: 0.4 }}  // 0-1
```

---

### Exit Animations (AnimatePresence)
```tsx
<AnimatePresence mode="wait">
  {isVisible && (
    <motion.div
      key="modal"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      Modal content
    </motion.div>
  )}
</AnimatePresence>
```

**Modes:**
- `sync` (default) - animations happen simultaneously
- `wait` - exit completes before enter
- `popLayout` - exiting elements pop out of layout

---

### Variants (Orchestrated Animations)
```tsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

<motion.ul variants={container} initial="hidden" animate="show">
  {items.map(i => (
    <motion.li key={i} variants={item}>{i}</motion.li>
  ))}
</motion.ul>
```

---

### Scroll-Triggered (Motion)
```tsx
import { useScroll, useTransform, motion } from "motion/react"

function Component() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0])

  return <motion.div style={{ opacity, y }}>Content</motion.div>
}
```

**Element-specific scroll:**
```tsx
const ref = useRef(null)
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start end", "end start"]  // [when animation starts, when it ends]
})
```

---

### Layout Animations
```tsx
<motion.div layout>
  {/* Automatically animates layout changes */}
</motion.div>

// Shared layout (morph between elements)
<motion.div layoutId="unique-id">
  Element A
</motion.div>
// Elsewhere:
<motion.div layoutId="unique-id">
  Element B (morphs from A)
</motion.div>
```

---

## GSAP + ScrollTrigger

### Installation
```bash
npm install gsap
```

### Core Imports
```js
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
```

---

### Basic Timeline
```js
const tl = gsap.timeline()

tl.to(".element", { x: 100, duration: 1 })
  .to(".element", { y: 50, duration: 0.5 })
  .to(".element", { opacity: 0, duration: 0.3 })
```

---

### Position Parameter (Timeline Sequencing)

| Syntax | Meaning |
|--------|---------|
| `3` | Absolute: 3 seconds from timeline start |
| `"+=1"` | 1 second after previous animation ends |
| `"-=0.5"` | Overlap previous by 0.5 seconds |
| `"<"` | Start of previous animation |
| `">"` | End of previous animation |
| `"<0.5"` | 0.5s after start of previous |
| `">-0.2"` | 0.2s before end of previous |
| `"labelName"` | At specific label |
| `"labelName+=1"` | 1s after label |

```js
tl.to(".a", { x: 100 }, 0)           // At 0s
  .to(".b", { x: 100 }, "<")         // Same time as .a
  .to(".c", { x: 100 }, ">-0.2")     // 0.2s before .b ends
  .to(".d", { x: 100 }, "+=0.5")     // 0.5s gap after .c
```

---

### Timeline Defaults
```js
const tl = gsap.timeline({
  defaults: {
    duration: 0.8,
    ease: "power3.out"
  }
})

tl.to(".a", { x: 100 })  // Inherits defaults
  .to(".b", { y: 50, duration: 0.3 })  // Override duration
```

---

### Nested Timelines (Modular Code)
```js
function heroAnimation() {
  const tl = gsap.timeline()
  tl.from(".hero-title", { opacity: 0, y: 50 })
    .from(".hero-subtitle", { opacity: 0, y: 30 }, "-=0.3")
  return tl
}

function cardsAnimation() {
  const tl = gsap.timeline()
  tl.from(".card", { opacity: 0, y: 40, stagger: 0.15 })
  return tl
}

// Master timeline
const master = gsap.timeline()
master
  .add(heroAnimation())
  .add(cardsAnimation(), "-=0.5")
```

---

### ScrollTrigger: Simple
```js
gsap.to(".box", {
  scrollTrigger: ".box",  // Trigger when .box enters viewport
  x: 500,
  duration: 1
})
```

---

### ScrollTrigger: Advanced
```js
gsap.to(".box", {
  scrollTrigger: {
    trigger: ".box",
    start: "top 80%",      // [trigger position] [viewport position]
    end: "bottom 20%",
    scrub: true,           // Link animation to scroll position
    markers: true,         // Debug markers (remove in production)
    toggleActions: "play pause resume reverse",
    // Actions for: onEnter, onLeave, onEnterBack, onLeaveBack
  },
  x: 500,
  opacity: 1
})
```

**Start/End Values:**
- Keywords: `top`, `center`, `bottom`, `left`, `right`
- Percentages: `80%`, `50%`
- Pixels: `100px`, `+=200`
- Combined: `"top 80%"` = trigger top hits viewport 80%

---

### ScrollTrigger: Pinning
```js
ScrollTrigger.create({
  trigger: ".section",
  start: "top top",
  end: "+=500",           // Pin for 500px of scroll
  pin: true,
  pinSpacing: true,       // Push content below
  scrub: 1                // 1 second catch-up delay
})
```

---

### ScrollTrigger: Snapping
```js
gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: {
      snapTo: "labels",           // Snap to timeline labels
      // OR: snapTo: [0, 0.25, 0.5, 0.75, 1],  // Progress values
      duration: { min: 0.2, max: 0.6 },
      ease: "power1.inOut"
    }
  }
})
.addLabel("section1")
.to(".a", { x: 100 })
.addLabel("section2")
.to(".b", { y: 50 })
```

---

### ScrollTrigger: Callbacks
```js
ScrollTrigger.create({
  trigger: ".element",
  start: "top center",
  end: "bottom center",
  onEnter: () => console.log("entered"),
  onLeave: () => console.log("left"),
  onEnterBack: () => console.log("entered from bottom"),
  onLeaveBack: () => console.log("left to bottom"),
  onUpdate: (self) => console.log(self.progress.toFixed(2)),
  onToggle: (self) => console.log("active:", self.isActive)
})
```

---

### Stagger Animation
```js
gsap.from(".item", {
  opacity: 0,
  y: 50,
  duration: 0.6,
  stagger: 0.15,            // Simple: 0.15s between each
  // OR
  stagger: {
    each: 0.15,             // Time between each
    from: "center",         // Start from: "start", "end", "center", "edges", "random"
    grid: "auto",           // For grid layouts
    ease: "power2.in"       // Easing for stagger timing
  }
})
```

---

## Common Easing Functions

**GSAP:**
- `power1.out`, `power2.out`, `power3.out`, `power4.out` - Smooth deceleration
- `power1.inOut` - Smooth start and end
- `elastic.out(1, 0.3)` - Bouncy overshoot
- `back.out(1.7)` - Slight overshoot
- `bounce.out` - Bouncing

**Motion:**
- `easeOut`, `easeIn`, `easeInOut`
- `circOut`, `circIn`, `circInOut`
- `backOut`, `backIn`, `backInOut`
- Custom: `[0.6, 0.01, 0.05, 0.95]` (cubic bezier)

---

## React + GSAP Integration

```tsx
import { useRef, useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function Component() {
  const containerRef = useRef(null)
  const elementsRef = useRef<HTMLDivElement[]>([])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // All GSAP code here auto-manages cleanup
      gsap.from(".item", {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%"
        }
      })
    }, containerRef)

    return () => ctx.revert()  // Cleanup on unmount
  }, [])

  return (
    <div ref={containerRef}>
      <div className="item">1</div>
      <div className="item">2</div>
      <div className="item">3</div>
    </div>
  )
}
```

---

## AI Prompt Template

Use this template when prompting AI for animations:

```
Create a [LIBRARY: GSAP/Motion] animation for a React component.

ELEMENTS:
- [List elements to animate with selectors/refs]

ANIMATION SEQUENCE:
1. [First animation: property changes, timing]
2. [Second animation: property changes, timing, relationship to first]

TRIGGER: [on load / on scroll / on hover / on click]

SCROLL CONFIG (if applicable):
- Start: [when animation begins relative to viewport]
- End: [when animation ends]
- Scrub: [true/false/number for catch-up delay]
- Pin: [true/false]

EASING: [power3.out / spring with stiffness:300 / etc.]

OUTPUT: Complete TypeScript React component with all imports.
```

---

## Performance Tips

1. **Use `will-change: transform`** sparingly for GPU acceleration
2. **Avoid animating layout properties** (`width`, `height`, `top`, `left`)
3. **Prefer `transform` and `opacity`** - GPU accelerated
4. **Use `gsap.context()`** in React for automatic cleanup
5. **Debounce resize handlers** for ScrollTrigger
6. **Use `scrub: 1`** instead of `scrub: true` for smoother scroll animations
7. **Remove `markers: true`** in production

---

## Debugging

**GSAP:**
```js
ScrollTrigger.defaults({ markers: true })
```

**Motion:**
```tsx
<motion.div
  onAnimationStart={() => console.log("started")}
  onAnimationComplete={() => console.log("done")}
>
```

---

## Resources

- Motion Docs: https://motion.dev/docs
- GSAP Docs: https://gsap.com/docs
- ScrollTrigger: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- GSAP Easing Visualizer: https://gsap.com/docs/v3/Eases/
- SuperDesign (AI animation planning): https://superdesign.dev/
