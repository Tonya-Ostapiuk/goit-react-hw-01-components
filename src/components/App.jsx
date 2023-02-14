import { Painting } from './Profile/Profile';
import  user  from './data/user';
import { Statistics } from './Statistics/Statistics';
import data from './data/data';
import { FriendList } from './FriendList/FriendList';
import friends from './data/friends';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './data/transactions';

export const App = () => {
  return (
    <div>
      <Painting 
    username={user.username}
    tag={user.tag}
    location={user.location} 
    avatar={user.avatar} 
    followers={user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes}/>

    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />

    <FriendList friends={friends} />

    <TransactionHistory items={transactions} />
    </div>
  );
};
