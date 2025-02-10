import { Header } from './components/Header';
import { Post } from './Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Ailton Oliveira" 
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis ad quis sed explicabo accusamus libero, natus asperiores numquam inventore cumque ipsam, sequi repellat officiis facilis et dolores maxime quia excepturi."
          />
          <Post 
            author="Eric Lacerda" 
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis ad quis sed explicabo accusamus libero, natus asperiores numquam inventore cumque ipsam, sequi repellat officiis facilis et dolores maxime quia excepturi."
          />
        </main>
      </div>
    </div>
  )
}