import './MainContacts.scss'
import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";
import {useState} from "react";

function MainContacts() {
    const contacts =
        [
            {
                imgLink: '/phone.svg',
                content: '+7 (905) 704 4666',
                link: 'tel:+79057044666',
            },
            {
                imgLink: '/mail.svg',
                content: 'info@markdavydov.ru',
                link: 'mailto:Fenix.mark@yandex.ru',
            },
            {
                imgLink: '/TG.svg',
                content: '@MarcusgameZ',
                link: 'https://t.me/MarcusgameZ',
            },
            {
                imgLink: '/Tenchat.svg',
                content: '@marcusgameZ',
                link: 'https://tenchat.ru/marcusgameZ',
            },
        ]
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className='main__contacts container'>
            <Modal
                isModalOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
            <div className="main__contacts-box">
                {
                    contacts.map((item, index)=>(
                        <ContactsItem
                            key={index}
                            imgLink={item.imgLink}
                            content={item.content}
                            link={item.link}
                        />
                    ))
                }
            </div>
            <Button onclick={()=> setIsModalOpen(true)} type='action' title='Свяжитесь со мной'/>
        </div>
    )
}

function ContactsItem({imgLink, content, link}) {
    return (
        <div className="main__contacts-item">
            <img src={imgLink} alt="" className="main__contacts-img"/>
            <a href={link}>{content}</a>
        </div>
    )
}

export default MainContacts