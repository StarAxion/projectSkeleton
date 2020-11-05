import React, { memo } from 'react';

const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

const SelectedLanguage = memo((props) => (
        <ul className='languages'>
            {languages.map((language, index) => (
                    <li 
                        key={index}
                        style={language === props.selectedLanguage ? { color: '#d0021b'} : null}
                        onClick={() => props.onSelect(language)}
                    >
                        {language}
                    </li>
                )
            )}
        </ul>
    )
)

export default SelectedLanguage;