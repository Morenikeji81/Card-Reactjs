import { useState } from 'react';
import './Example.css'

export default function Example() {
    const [users, setUsers] = useState(
        [
            {
                id: 1,
                name: 'Franc Enemuo',
                interest: ['Football', 'Tennis', 'Politics'],
                profession: 'Software Developer',
                phoneNumber:'08100000000',
                stateOfOrigin: 'Anambra'    
                }, 
                {
                    id: 2,
                    name: 'Ola debo',
                    interest: ['Swimming', 'Reading', 'Boxing'],
                    profession: 'Doctor',
                    phoneNumber:'08123456789',
                    stateOfOrigin: 'Delta'    
                    }, 
                    {
                        id: 3,
                        name: 'Haruna Lukman',
                        interest: ['Singing', 'Soccer', 'Dancing'],
                        profession: 'Caterer',
                        phoneNumber:'08189345890',
                        stateOfOrigin: 'Kaduna'    
                        },
                        {
                            id: 4,
                            name: 'Ugochi Ameh',
                            interest: ['Dancing', 'Cooking', 'Football'],
                            profession: 'Data Analyst',
                            phoneNumber:'08122225890',
                            stateOfOrigin: 'Edo'    
                            },
                            {
                                id: 5,
                                name: 'Effiong Epeh',
                                interest: ['Cooking', 'Swimming', 'Music'],
                                profession: 'Nurse',
                                phoneNumber:'08189343450',
                                stateOfOrigin: 'Delta'    
                                },
                                {
                                    id: 6,
                                    name: 'Ezia Amadi',
                                    interest: ['History', 'Swimming', 'Dancing'],
                                    profession: 'Writer',
                                    phoneNumber:'08170043450',
                                    stateOfOrigin: 'Kano'    
                                    },
                                    {
                                        id: 7,
                                        name: 'Akadiri Dami',
                                        interest: ['History', 'Music', 'Dancing'],
                                        profession: 'Backened Developer',
                            phoneNumber:'08154903450',
                            stateOfOrigin: 'Ondo'    
                            },
                            {
                                id: 8,
                                name: 'Sheriff',
                                interest: ['Writing', 'Cooking', 'Dancing'],
                                profession: 'Data science',
                                phoneNumber:'08154903643',
                                stateOfOrigin: 'Kwara'    
                                },
                                {
                                    id: 9,
                                    name: 'Wales Wales',
                                    interest: ['History', 'Swimming', 'Dancing'],
                                    profession: 'UI/UX developer',
                                    phoneNumber:'08154902323',
                                    stateOfOrigin: 'Osun'  

                                    }

        ]
        
    )
    function addUser(user){
        return(
        
    <div className='card1' key = {user.id} >
     <h2 className="card2" style={{color:'red'}}>{user.id}</h2>
     <img src={`https://robohash.org/${user.name}`} alt={user.name} />
    <h2 >Name: {user.name}</h2>
    <p >Interest: {user.interest.join(' , ')}</p>
    <p >Profession: {user.profession}</p>
    <p >Phone Number: {user.phoneNumber}</p>
    <p >State of Origin: {user.stateOfOrigin}</p>
    </div>
    
 ) 
}

    
   
    return (
        <>
{users.map(addUser)}
        
        </>
    )
}
