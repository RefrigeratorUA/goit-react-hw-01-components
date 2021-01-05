// import ListExample from './components/ListExample/ListExample';
// const jsonObj = [{ id: 1, text: 'Привет, реакт!' }, { id: 2, text: 'Где ключи?' }, {}];
import Profile from './components/Profile/Profile';
import user from './user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './statistical-data.json';

export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Это можно удалить" stats={statisticalData} />
    </>
  );
}
