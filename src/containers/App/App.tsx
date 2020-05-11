import React from 'react';
import {connect} from 'react-redux';

import styles from './App.module.scss';

import Chat from '../../components/Chat/Chat';
import Sidebar from '../../components/Sidebar/Sidebar';
import ChatService from '../../services/ChatService';
import { chatServiceUrl, testUsername, currentUserStorageName } from '../../constants';
import { fetchChatbotsData } from '../../redux/chatbots/chatbotsActions';
import { fetchUserData, setUserData } from '../../redux/user/userActions';
import StorageService from '../../services/StorageService';
import { IUser } from '../../model/IUser';

class App extends React.Component<any, {}> {

  public componentDidMount() {
    ChatService.connect(chatServiceUrl);
    this.fetchUser();
    this.props.fetchChatbots();
  }

  public render() {
    return (
      <div className={styles.app}>
        <Sidebar />
        <Chat />
      </div>
    );
  }

  private fetchUser(){
    const userStr: any = StorageService.getItem(currentUserStorageName);
    if(!userStr){
      this.props.fetchUser(testUsername)
    }else{
      const user = JSON.parse(userStr);
      this.props.setUser(user);
    }
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  fetchChatbots: () => dispatch(fetchChatbotsData()),
  fetchUser: (name: string) => dispatch(fetchUserData(name)),
  setUser: (data: IUser) => dispatch(setUserData(data))
})

export default connect(null, mapDispatchToProps)(App);
