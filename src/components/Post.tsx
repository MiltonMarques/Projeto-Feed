import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import { Comment } from './Comment'
import { Avatar } from './Avatar'

import styles from './Post.module.css'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react';

interface Author{
    name:string;
    role:string;
    avatarUrl:string;
}
interface Content{
    type:string;
    content:string;
}

interface PostProps{
    author:Author;
    publishedAt:Date;
    content:Content[];
}

export function Post({ author, publishedAt,content }: PostProps) {
    const [comments, setComments]=useState([
        'post muito bacana'
    ])
    const [newCommentText, setNewCommentText] =useState('')


    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
        locale:ptBR,
        addSuffix:true,
    })
        
    function hadleCreateNewComment(event:FormEvent){
        event.preventDefault()

        setComments([...comments, newCommentText]);
        setNewCommentText('');
 
    }
    function hadleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }
    function hadleNewCommentInvalid(event:InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse campo é obrigario')
    }

    function deleteComment(commentToDelete:string){
        const commentsWithouDeletedOne = comments.filter(comment => {
            return comment != commentToDelete;
        })

        setComments(commentsWithouDeletedOne);
    }
    
    const isNewCommentEmpty= newCommentText.length === 0;
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfor}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>

                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line =>{
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>;
                    }
                })}

            </div>

            <form onSubmit={hadleCreateNewComment} className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea 
            name='comment'
            placeholder="Deixe um comentario"
            value={newCommentText}
            onChange={hadleNewCommentChange}
            onInvalid={hadleNewCommentInvalid}
            required={true}
            />
            
            <footer> 
                <button type="submit" disabled={isNewCommentEmpty} >Publicar</button>
            </footer>
            </form>
            <div className={styles.commentList}>
            {comments.map(comment => {
                return (
                <Comment 
                    key={comment} 
                    content={comment} 
                    onDeleteComment={deleteComment}
                />
                )
            })}

            </div>
        </article>
    )
}