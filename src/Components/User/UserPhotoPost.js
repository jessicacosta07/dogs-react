import React from 'react'
import styles from './UserPhotoPost.module.css'
import Input from '../Forms/Input'
import Button from '../Forms/Button'

const UserPhotoPost = () => {

    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <section className={`${styles.photoPost} animeLeft`}>
            <form onSubmit={handleSubmit}>
                <Input />
                <Button />
            </form>
        </section>
    )
}

export default UserPhotoPost
