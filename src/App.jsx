import './App.css';
import Profile from './components/profile/Profile';
import FriendList from './components/FriendList/FriendList';
import userData from "./assets/userData.json";
import friends from "./assets/friends.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};

export default App
