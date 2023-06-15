import styles from "./Profile.module.css"
import Wall from "../Wall/Wall";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Profile(){
    const { id } = useParams()
    return(
       <div className={styles.main}>
            <div className={styles.body}>
                <ProfileHeader user={id}/>
                <div className={styles.wall}>
                    <Wall user={id}/>
                </div>
            </div>
       </div>
    )
}
export default Profile;