import type { NextPage } from 'next'
import { AnimationEditor } from 'animation-editor'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <AnimationEditor />
    </div>
  )
}

export default Home
