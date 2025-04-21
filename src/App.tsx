import { AnimatePresence, motion, MotionConfig } from "motion/react"
import { useState } from "react"
import { Credits } from "./components/credits"

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const toggle = () => setTheme(theme == 'dark' ? 'light' : 'dark')

  return (
    <section className="w-full h-dvh flex justify-center items-center bg-white font-medium">
      <Credits />
      <motion.div
        onClick={toggle} 
        whileTap={{ scale: .9 }}
        initial={{ backgroundColor: '#e5e7eb', color: 'black' }}
        animate={{ 
          backgroundColor: theme == 'light' ? '#e5e7eb' : 'black',
          color: theme == 'light' ? 'black' : 'white' 
        }}
        className="flex gap-3 items-center cursor-pointer h-16 px-4 rounded-full"
      >
        <motion.div
          initial={{ rotate: 0, borderColor: 'black' }}
          animate={{ 
            rotate: theme == 'light' ? 0 : 360,
            borderColor: theme == 'light' ? 'black' : 'white'
          }} 
          transition={{ 
            default: { type: 'spring', duration: .5, bounce: .3 },
            borderColor: { duration: 0, delay: .15 }
          }}
          className="flex w-10 h-10 rounded-full border-2 overflow-hidden relative"
        >
          <div className="flex-grow bg-white" />
          <div className="flex-grow bg-black" />
          <div 
            className="w-4 h-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex rounded-full overflow-hidden"
          >
            <div className="flex-grow bg-black" />
            <div className="flex-grow bg-white" />
          </div>
        </motion.div>
        <div className="flex h-full items-center gap-1.5">
          <MotionConfig transition={{ type: 'spring', duration: .5, bounce: .3 }}>
            <AnimatePresence initial={false} mode="popLayout">
              <div
                key={theme} 
                className="h-full text-2xl flex items-center overflow-hidden"
              >
                {theme == 'light' && (
                  <motion.span 
                    key="light text"
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    exit={{ y: 50 }}
                    className="inline-block"
                  >
                    Light
                  </motion.span>
                )}
                {theme == 'dark' && (
                  <motion.span
                    key="dark text" 
                    className="inline-block"
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    exit={{ y: 50 }}
                  >
                    Dark
                  </motion.span>
                )}
              </div>
            </AnimatePresence>
          </MotionConfig>
          <span className="text-2xl">Mode</span>
        </div>
      </motion.div>
    </section>
  )
}

export default App
