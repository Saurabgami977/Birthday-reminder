import React, { useState } from 'react'

function Card() {

    const [user, setUser] = useState([
        { name: 'Saurav Gami', age: 18, url: 'https://media-exp1.licdn.com/dms/image/C5603AQGdZDbydHOGNQ/profile-displayphoto-shrink_400_400/0/1601635689409?e=1616025600&v=beta&t=5fAUIcbIahPcnzDnPQOmzHcoxWdhEPPpKIOjwtvuhj0' },
        { name: 'Manoj Gami', age: 45, url: 'https://media-exp1.licdn.com/dms/image/C5603AQGdZDbydHOGNQ/profile-displayphoto-shrink_400_400/0/1601635689409?e=1616025600&v=beta&t=5fAUIcbIahPcnzDnPQOmzHcoxWdhEPPpKIOjwtvuhj0' },
        { name: 'Lab Gami', age: 67, url: 'https://media-exp1.licdn.com/dms/image/C5603AQGdZDbydHOGNQ/profile-displayphoto-shrink_400_400/0/1601635689409?e=1616025600&v=beta&t=5fAUIcbIahPcnzDnPQOmzHcoxWdhEPPpKIOjwtvuhj0' },
        { name: 'Kush Gami', age: 56, url: 'https://media-exp1.licdn.com/dms/image/C5603AQGdZDbydHOGNQ/profile-displayphoto-shrink_400_400/0/1601635689409?e=1616025600&v=beta&t=5fAUIcbIahPcnzDnPQOmzHcoxWdhEPPpKIOjwtvuhj0' },
        { name: 'Saurav Gami', age: 34, url: 'https://media-exp1.licdn.com/dms/image/C5603AQGdZDbydHOGNQ/profile-displayphoto-shrink_400_400/0/1601635689409?e=1616025600&v=beta&t=5fAUIcbIahPcnzDnPQOmzHcoxWdhEPPpKIOjwtvuhj0' },
    ]
    );

    return (
        <div>
            <h1>{user.length} birthdays today</h1>
            {user.map(person => {
                return (
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        height: '75px',
                        margin: '20px 0',
                        fontSize: '16px',
                        textAlign: 'start'
                    }}>
                        <div>
                            <img
                                src={person.url}
                                alt={person.name}
                                style={{
                                    height: '75px',
                                    width: '75px',
                                    borderRadius: '50%',
                                    marginRight: '10px'
                                }}
                            />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <h5 style={{ fontSize: '16px', fontWeight: 700, }}>{person.name}</h5>
                            <p style={{ color: '#617d98' }}>{person.age} years</p>
                        </div>
                    </div>
                )
            })}
            <button
                style={{
                    backgroundColor: '#F28AB2',
                    color: 'white',
                    width: '100%',
                    height: '3rem',
                    borderRadius: '5px',
                    outline: 'none',
                    border: 'none',
                    fontSize: '1.3rem'
                }}
                onClick={() => setUser([])}
            >
                Clear All
            </button>
        </div >
    )
}

export default Card
