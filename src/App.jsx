import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
{
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
},
{
    userName: 'bridamore',
    name: 'bri',
    isFollowing: false
},
{
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true
},
{
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
}
]

export function App () {
return (
    <section className='App'>
    {
        users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
        >
            {name}
        </TwitterFollowCard>
        ))
    }
    </section>
)
}