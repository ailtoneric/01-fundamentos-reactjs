import { Post } from './Post';

export function App() {
  return (
    <div>
      <Post 
        author="Ailton Oliveira" 
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis ad quis sed explicabo accusamus libero, natus asperiores numquam inventore cumque ipsam, sequi repellat officiis facilis et dolores maxime quia excepturi."
      />
      <Post 
        author="Eric Lacerda" 
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis ad quis sed explicabo accusamus libero, natus asperiores numquam inventore cumque ipsam, sequi repellat officiis facilis et dolores maxime quia excepturi."
      />
    </div>
  )
}