import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';

import styles from './App.module.css';

const posts = [
  {
    id:1,
    author: {
      avatarUrl:'https://github.com/MiltonMarques.png',
      name:'Milton marques',
      role:'CTO @Rocketseat'

    },
    content:[
     {type:'paragraph', content:'Fala galeraa 👋'},
     {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
     {type:'link', content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-11-20 14:00:00'),
  },
  {
    id:2,
    author: {
      avatarUrl:'https://github.com/Miltonmarques.png',
      name:'Milton marques',
      role:'Educador @Rocketseat'

    },
    content: [
     {type:'paragraph', content:'Fala galeraa 👋'},
     {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
     {type:'link', content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-11-20 15:45:00'),
  },
];

export function App() {
  return (
    <div>
      <Header/>
      
    <div className={styles.wrapeer}>
      <Sidebar />
      <main>
       {posts.map(post =>{
        return (
          <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />
        )
       }
       )}
      </main>
    </div>

    </div>)

}



