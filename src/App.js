import './App.css';
import React from 'react'
import ClassCounter from './components/ClassCounter';
import ClassCounterOne from './components/ClassCounterOne';
import ComponentC from './components/ComponentC';
import DataFetching from './components/DataFetching';
import HookCounter from './components/HookCounter';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import HookMouse from './components/HookMouse';
import IntervalHookCounter from './components/IntervalHookCounter';
import MouseContainer from './components/MouseContainer';
import CounterOne from './components/CounterOne';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <CounterOne />
      {/* <UserContext.Provider value={'Sandeep'}>
        <ChannelContext.Provider value='Yadav'>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <DataFetching /> */}
      {/* <IntervalHookCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <ClassCounterOne /> */}
      {/* <HookCounterOne /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounter /> */}
      {/* <ClassCounter /> */}
    </div>
  );
}

export default App;