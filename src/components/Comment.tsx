import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react';
import { Avatar } from './Avatar'
import styles from './comment.module.css'

interface CommentProps{
    content:string;
    onDeleteComment: (content:string) => void;
}

export function Comment({content, onDeleteComment}:CommentProps){
const [likeCount,setLikeCount]=useState(0);


function hadleDeleteComment(){
    onDeleteComment(content);
}
function hadleLikeComment() {
    setLikeCount((state) => {
        return state + 1
    });
}

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} 
             src="https://github.com/edlaniasantos.png" 
             alt="" 
             />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Edlania santos</strong>
                        <time title="17 de outubro" dateTime="2022-11-17">Cerca de 1h atrás</time>
                    </div>

                    <button onClick={hadleDeleteComment} title='Deletar comentario'>
                        <Trash size={24} />
                    </button>
                </header>
                <p>{content}</p>
                </div>

                <footer>
                    <button onClick={hadleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}