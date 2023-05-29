import { useEffect, useState } from 'react';
import { GetProfileInfo } from '../api/request';
import ChangePassProfile from '../components/profile/ChangePassProfile';
import ChangeUserProfile from '../components/profile/ChangeUserProfile';
import ProfileCardRaad from '../components/profile/ProfileCardRaad';
import { BasicTabsRaad } from '../components/TabsRaad';
import { ProfileInfo } from '../interfaces/ProfileInfo';
import NightModeToggle from '../components/NightModeToggle';
import './pages.css';


const Profile = () => {
    const [profile, setProfile] = useState<ProfileInfo>({ floor: "", letter: "", name: "", plays: 1, urbaName: "", username: "" });
    useEffect(() => {
        GetProfileInfo((n: ProfileInfo) => setProfile(n));
    }, [])

    return (
        <div style={{ marginTop: 80, marginBottom: 120 }}>
            <ProfileCardRaad name={profile.name} urbaName={profile.urbaName} numberPlays={profile.plays} />
            <NightModeToggle/>
            <BasicTabsRaad
                listComponents={[
                    <ChangeUserProfile email={profile.username} />,
                    <ChangePassProfile />
                ]}
                listLabels={['Usuario', 'Contraseña']} />
        </div>
    )
}

export default Profile;