import { useDispatch } from "react-redux";

import { reactionAdded } from "./postSlice";


const reactionEmoji = {
    thumbsIp: '👍',
    wow: '😲',
    heart: '❤',
    rocket: '🚀',
    coffee: '☕'

}

const ReactiosButton = ({post}) => {

    const dispatch = useDispatch()
    const reactionsButton = Object.entries(reactionEmoji).map(([name, emoji]) => {
        
    })
    return (
        <div>BUtton</div>

    )
}

export default ReactiosButton